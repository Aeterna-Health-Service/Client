/**
 * 인증 서비스
 * @author 김동현
 */

import { apiClient, saveTokens } from '../apiClient';
import type { TSocialProvider } from '../../types';
import type { TUserResponseDto } from '../user/types';

/**
 * 소셜 로그인 응답 타입
 */
export type TSocialLoginResponse = {
    accessToken: string;
    refreshToken: string;
    isNewUser: boolean;
    userId: number;
    user?: TUserResponseDto;
};

/**
 * 소셜 로그인
 * @param provider - 소셜 로그인 제공자 (google, apple)
 * @param token - 소셜 로그인 토큰
 */
export const socialLogin = async (
    provider: TSocialProvider,
    token: string
): Promise<TSocialLoginResponse | null> => {
    try {
        const response = await apiClient.post<TSocialLoginResponse>('/auth/social', {
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
 * 현재 사용자 정보 조회 (토큰 기반)
 * @deprecated getUser 사용 권장
 */
export const getCurrentUser = async (): Promise<TUserResponseDto | null> => {
    try {
        const response = await apiClient.get<TUserResponseDto>('/auth/me');
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
export const refreshAccessToken = async (
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
