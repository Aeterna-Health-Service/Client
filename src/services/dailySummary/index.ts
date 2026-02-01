/**
 * DailySummary 서비스
 * @author 김동현
 */

import { apiClient } from '../apiClient';
import type { TDailySummaryResponseDto, TGetResponse } from './types';

/**
 * 일일 요약 조회
 * GET /summary/{userId}/{date}
 * @param userId 사용자 ID
 * @param date 조회 날짜 (YYYY-MM-DD)
 * @author 김동현
 */
export const getDailySummary = async (
    userId: number,
    date: string
): Promise<TGetResponse<TDailySummaryResponseDto>> => {
    const response = await apiClient.get<TGetResponse<TDailySummaryResponseDto>>(
        `/summary/${userId}/${date}`
    );
    return response.data;
};
