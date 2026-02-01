/**
 * 사용자 서비스
 * @author 김동현
 */

import { apiClient, safeRequest } from '../apiClient';
import type { TUser, TOnboardingData } from '../../types';
import type { TGetResponse, TUserRequestDto, TUserResponseDto } from './types';

/**
 * 회원 가입
 * POST /user
 * @author 김동현
 */
export const registerUser = async (data: TUserRequestDto): Promise<TGetResponse<number>> => {
    const response = await apiClient.post<TGetResponse<number>>('/user', data);
    return response.data;
};

/**
 * 사용자 조회
 * GET /user/{userId}
 * @author 김동현
 */
export const getUser = async (userId: number): Promise<TGetResponse<TUserResponseDto>> => {
    const response = await apiClient.get<TGetResponse<TUserResponseDto>>(`/user/${userId}`);
    return response.data;
};

/**
 * 사용자 정보 수정
 * PATCH /user/{userId}
 * @author 김동현
 */
export const updateUser = async (
    userId: number,
    data: TUserRequestDto
): Promise<TGetResponse<boolean>> => {
    const response = await apiClient.patch<TGetResponse<boolean>>(`/user/${userId}`, data);
    return response.data;
};

// ============================================================
// 기존 API (레거시 - 추후 마이그레이션 예정)
// ============================================================

/**
 * 온보딩 데이터 저장
 * @deprecated 새 API 사용 권장: registerUser
 */
export const saveOnboarding = async (data: TOnboardingData): Promise<TUser | null> => {
    return safeRequest.post<TUser>('/users/onboarding', data);
};

/**
 * 사용자 프로필 조회
 * @deprecated 새 API 사용 권장: getUser
 */
export const getUserProfile = async (): Promise<TUser | null> => {
    return safeRequest.get<TUser>('/users/profile');
};

/**
 * 사용자 프로필 업데이트
 * @deprecated 새 API 사용 권장: updateUser
 */
export const updateUserProfile = async (data: Partial<TUser>): Promise<TUser | null> => {
    return safeRequest.patch<TUser>('/users/profile', data);
};

/**
 * 사용자 스탯 조회 (HP, MP, Stamina)
 */
export const getUserStats = async (): Promise<TUser['stats'] | null> => {
    return safeRequest.get<TUser['stats']>('/users/stats');
};

/**
 * 목표 칼로리 계산 (BMR, TDEE 기반)
 */
export const calculateCalories = async (
    data: Pick<TOnboardingData, 'gender' | 'age' | 'height' | 'weight' | 'activityLevel' | 'goalType'>
): Promise<{ bmr: number; tdee: number; targetCalories: number } | null> => {
    return safeRequest.post('/users/calculate-calories', data);
};
