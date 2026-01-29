import { apiClient, safeRequest } from '../apiClient';
import type { TUser, TOnboardingData } from '../../types';

/**
 * 사용자 서비스
 * @author 김동현
 */

/**
 * 온보딩 데이터 저장
 */
export const saveOnboarding = async (data: TOnboardingData): Promise<TUser | null> => {
    return safeRequest.post<TUser>('/users/onboarding', data);
};

/**
 * 사용자 프로필 조회
 */
export const getUserProfile = async (): Promise<TUser | null> => {
    return safeRequest.get<TUser>('/users/profile');
};

/**
 * 사용자 프로필 업데이트
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
