/**
 * DailySummary 서비스 타입 정의
 * @author 김동현
 */

import type { TGetResponse } from '../user/types';

/**
 * 일일 요약 응답 DTO
 */
export type TDailySummaryResponseDto = {
    /** 일일 요약 ID */
    id: number;
    /** 기록 날짜 (YYYY-MM-DD) */
    createdAt: string;
    /** 섭취 칼로리 (kcal) */
    intakeKcal: number;
    /** 섭취 탄수화물 (g) */
    intakeCarb: number;
    /** 섭취 단백질 (g) */
    intakeProtein: number;
    /** 섭취 지방 (g) */
    intakeFat: number;
    /** 소모 칼로리 (kcal) */
    burnedKcal: number;
    /** 걸음 수 */
    steps: number;
    /** 체중 (kg) */
    weight: number;
    /** 물 섭취량 (ml) */
    water: number;
};

export type { TGetResponse };
