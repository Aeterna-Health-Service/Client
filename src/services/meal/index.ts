/**
 * MealLog 서비스
 * @author 김동현
 */

import { apiClient } from '../apiClient';
import type { TMealLogRequestDto, TGetResponse } from './types';

/**
 * 식단 기록 추가
 * POST /meal/{userId}
 * @author 김동현
 */
export const createMealLog = async (
    userId: number,
    data: TMealLogRequestDto
): Promise<TGetResponse<number>> => {
    const response = await apiClient.post<TGetResponse<number>>(`/meal/${userId}`, data);
    return response.data;
};

/**
 * 식단 기록 수정
 * PATCH /meal/{mealId}
 * @author 김동현
 */
export const updateMealLog = async (
    mealId: number,
    data: TMealLogRequestDto
): Promise<TGetResponse<number>> => {
    const response = await apiClient.patch<TGetResponse<number>>(`/meal/${mealId}`, data);
    return response.data;
};

/**
 * 식단 기록 삭제
 * DELETE /meal/{mealId}
 * @author 김동현
 */
export const deleteMealLog = async (mealId: number): Promise<TGetResponse<boolean>> => {
    const response = await apiClient.delete<TGetResponse<boolean>>(`/meal/${mealId}`);
    return response.data;
};
