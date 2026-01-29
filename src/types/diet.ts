/**
 * 식단 관련 타입 정의
 * @author 김동현
 */

/**
 * 영양 정보
 */
export type TNutrition = {
    calories: number;
    carbs: number; // g
    protein: number; // g
    fat: number; // g
    fiber?: number; // g
    sodium?: number; // mg
};

/**
 * 음식 아이템
 */
export type TFoodItem = {
    id: string;
    name: string;
    amount: number; // g
    nutrition: TNutrition;
    imageUrl?: string;
};

/**
 * 식사 타입
 */
export type TMealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

/**
 * 식사 기록
 */
export type TMeal = {
    id: string;
    userId: string;
    type: TMealType;
    foods: TFoodItem[];
    totalNutrition: TNutrition;
    imageUrl?: string;
    createdAt: string;
};

/**
 * 일일 식단 요약
 */
export type TDailyDietSummary = {
    date: string;
    meals: TMeal[];
    totalNutrition: TNutrition;
    targetCalories: number;
    remainingCalories: number;
};
