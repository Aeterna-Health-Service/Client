/**
 * MealLog 서비스 - TanStack Mutation 훅
 * @author 김동현
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMealLog, updateMealLog, deleteMealLog } from './index';
import type { TMealLogRequestDto } from './types';

/**
 * MealLog Query Keys 팩토리
 * @author 김동현
 */
export const mealKeys = {
    all: ['meals'] as const,
    lists: () => [...mealKeys.all, 'list'] as const,
    list: (userId: number, date?: string) => [...mealKeys.lists(), userId, date] as const,
    details: () => [...mealKeys.all, 'detail'] as const,
    detail: (mealId: number) => [...mealKeys.details(), mealId] as const,
};

/**
 * 식단 기록 추가 뮤테이션
 * @author 김동현
 */
export const useCreateMealLogMutation = (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: TMealLogRequestDto) => createMealLog(userId, data),
        onSuccess: () => {
            // 식단 목록 쿼리 무효화
            queryClient.invalidateQueries({ queryKey: mealKeys.lists() });
        },
    });
};

/**
 * 식단 기록 수정 뮤테이션
 * @author 김동현
 */
export const useUpdateMealLogMutation = (mealId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: TMealLogRequestDto) => updateMealLog(mealId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: mealKeys.detail(mealId) });
            queryClient.invalidateQueries({ queryKey: mealKeys.lists() });
        },
    });
};

/**
 * 식단 기록 삭제 뮤테이션
 * @author 김동현
 */
export const useDeleteMealLogMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteMealLog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: mealKeys.lists() });
        },
    });
};
