/**
 * DailySummary TanStack Query 훅
 * @author 김동현
 */

import { useQuery } from '@tanstack/react-query';
import { getDailySummary } from './index';

/**
 * DailySummary Query Keys 팩토리
 * @author 김동현
 */
export const dailySummaryKeys = {
    all: ['dailySummary'] as const,
    detail: (userId: number, date: string) =>
        [...dailySummaryKeys.all, userId, date] as const,
};

/**
 * 일일 요약 조회 쿼리
 * @param userId 사용자 ID
 * @param date 조회 날짜 (YYYY-MM-DD)
 * @author 김동현
 */
export const useGetDailySummaryQuery = (userId: number, date: string) => {
    return useQuery({
        queryKey: dailySummaryKeys.detail(userId, date),
        queryFn: () => getDailySummary(userId, date),
        enabled: !!userId && !!date,
        select: (response) => response.data,
    });
};
