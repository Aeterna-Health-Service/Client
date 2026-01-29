import { apiClient, saveTokens } from '../apiClient';
import type { TAuthResponse, TSocialProvider, TUser } from '../../types';

/**
 * 인증 서비스
 * @author 김동현
 */

/**
 * 소셜 로그인
 * @param provider - 소셜 로그인 제공자 (google, apple)
 * @param token - 소셜 로그인 토큰
 */
export const socialLogin = async (
    provider: TSocialProvider,
    token: string
): Promise<TAuthResponse | null> => {
    try {
        const response = await apiClient.post<TAuthResponse>('/auth/social', {
            provider,
            token,
        });

        // 토큰 저장
        await saveTokens(response.data.accessToken, response.data.refreshToken);

        return response.data;
    } catch (error) {
        console.error('Social login failed:', error);
        return null;
    }
};

/**
 * 로그아웃
 */
export const logout = async (): Promise<void> => {
    try {
        await apiClient.post('/auth/logout');
    } catch (error) {
        console.error('Logout API failed:', error);
    }
};

/**
 * 현재 사용자 정보 조회
 */
export const getCurrentUser = async (): Promise<TUser | null> => {
    try {
        const response = await apiClient.get<TUser>('/auth/me');
        return response.data;
    } catch (error) {
        console.error('Get current user failed:', error);
        return null;
    }
};

/**
 * 토큰 갱신
 * @param refreshToken - 리프레시 토큰
 */
export const refreshToken = async (
    refreshToken: string
): Promise<{ accessToken: string; refreshToken: string } | null> => {
    try {
        const response = await apiClient.post('/auth/refresh', { refreshToken });
        return response.data;
    } catch (error) {
        console.error('Token refresh failed:', error);
        return null;
    }
};
