/**
 * MealLog 서비스 타입 정의
 * @author 김동현
 */

import type { TGetResponse } from '../user/types';

/**
 * 식사 타입
 */
export type TMealType = 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'SNACK';

/**
 * 식단 기록 생성/수정 요청 DTO
 */
export type TMealLogRequestDto = {
    /** 식단 이름/메뉴 */
    name: string;
    /** 섭취 날짜 (YYYY-MM-DD) */
    eatenAt: string;
    /** 식사 타입 */
    mealType: TMealType;
    /** 메모 (선택) */
    memo?: string;
    /** 총 칼로리 (kcal) */
    totalKcal: number;
    /** 총 탄수화물 (g) */
    totalCarbG: number;
    /** 총 단백질 (g) */
    totalProteinG: number;
    /** 총 지방 (g) */
    totalFatG: number;
};

/**
 * 식단 기록 응답 DTO (추후 조회 API용)
 */
export type TMealLogResponseDto = {
    id: number;
    name: string;
    eatenAt: string;
    mealType: TMealType;
    memo?: string;
    totalKcal: number;
    totalCarbG: number;
    totalProteinG: number;
    totalFatG: number;
    createdAt: string;
};

export type { TGetResponse };
