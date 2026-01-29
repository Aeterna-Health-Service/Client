import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 환경 변수에서 API URL 가져오기 (TODO: 실제 URL로 변경)
const API_BASE_URL = 'https://api.aeterna.app';

/**
 * API 클라이언트 인스턴스
 * @author 김동현
 */
export const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * 토큰 저장 키
 */
const ACCESS_TOKEN_KEY = 'aeterna_access_token';
const REFRESH_TOKEN_KEY = 'aeterna_refresh_token';

/**
 * 토큰 저장
 */
export const saveTokens = async (accessToken: string, refreshToken: string): Promise<void> => {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

/**
 * 토큰 가져오기
 */
export const getAccessToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
};

/**
 * 토큰 삭제 (로그아웃)
 */
export const clearTokens = async (): Promise<void> => {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
};

/**
 * 요청 인터셉터
 * - 액세스 토큰을 Authorization 헤더에 자동 추가
 */
apiClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

/**
 * 응답 인터셉터
 * - 401 에러 시 토큰 갱신 시도
 * - 갱신 실패 시 로그아웃 처리
 */
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config;

        // 401 Unauthorized 에러 처리
        if (error.response?.status === 401 && originalRequest) {
            try {
                // 리프레시 토큰으로 새 액세스 토큰 요청
                const refreshToken = await getRefreshToken();
                if (refreshToken) {
                    const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
                        refreshToken,
                    });

                    const { accessToken, refreshToken: newRefreshToken } = response.data;
                    await saveTokens(accessToken, newRefreshToken);

                    // 원래 요청 재시도
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return apiClient(originalRequest);
                }
            } catch (refreshError) {
                // 리프레시 토큰도 만료됨 - 로그아웃 처리
                await clearTokens();
                // TODO: 로그아웃 상태로 전환하는 이벤트 발생
            }
        }

        return Promise.reject(error);
    }
);

/**
 * 안전한 API 요청 래퍼
 * 에러 처리를 일관되게 적용
 */
export const safeRequest = {
    get: async <T>(url: string, config?: object): Promise<T | null> => {
        try {
            const response = await apiClient.get<T>(url, config);
            return response.data;
        } catch (error) {
            console.error(`GET ${url} failed:`, error);
            return null;
        }
    },

    post: async <T>(url: string, data?: object, config?: object): Promise<T | null> => {
        try {
            const response = await apiClient.post<T>(url, data, config);
            return response.data;
        } catch (error) {
            console.error(`POST ${url} failed:`, error);
            return null;
        }
    },

    put: async <T>(url: string, data?: object, config?: object): Promise<T | null> => {
        try {
            const response = await apiClient.put<T>(url, data, config);
            return response.data;
        } catch (error) {
            console.error(`PUT ${url} failed:`, error);
            return null;
        }
    },

    patch: async <T>(url: string, data?: object, config?: object): Promise<T | null> => {
        try {
            const response = await apiClient.patch<T>(url, data, config);
            return response.data;
        } catch (error) {
            console.error(`PATCH ${url} failed:`, error);
            return null;
        }
    },

    delete: async <T>(url: string, config?: object): Promise<T | null> => {
        try {
            const response = await apiClient.delete<T>(url, config);
            return response.data;
        } catch (error) {
            console.error(`DELETE ${url} failed:`, error);
            return null;
        }
    },
};
