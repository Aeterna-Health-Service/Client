/**
 * 사용자 타입 변환 유틸리티
 * 온보딩 데이터 ↔ API DTO 변환
 * @author 김동현
 */

import type {
    TOnboardingData,
    TGender,
    TActivityLevel,
    TGoalType,
    TDietMode,
    TGenderApi,
    TActivityLevelApi,
    TGoalTypeApi,
    TDietType,
} from '../types/user';
import type { TUserRequestDto } from '../services/user/types';

// ============================================================
// Enum 변환: 앱 타입 → API 타입
// ============================================================

/**
 * 성별 변환 (앱 → API)
 */
export const toGenderApi = (gender: TGender | null): TGenderApi | undefined => {
    if (!gender) return undefined;
    const map: Record<TGender, TGenderApi> = {
        male: 'MALE',
        female: 'FEMALE',
    };
    return map[gender];
};

/**
 * 활동량 변환 (앱 → API)
 */
export const toActivityLevelApi = (
    level: TActivityLevel | null
): TActivityLevelApi | undefined => {
    if (!level) return undefined;
    const map: Record<TActivityLevel, TActivityLevelApi> = {
        sedentary: 'VERY_LOW',
        light: 'LOW',
        moderate: 'NORMAL',
        active: 'HIGH',
    };
    return map[level];
};

/**
 * 목표 타입 변환 (앱 → API)
 */
export const toGoalTypeApi = (goal: TGoalType | null): TGoalTypeApi | undefined => {
    if (!goal) return undefined;
    const map: Record<TGoalType, TGoalTypeApi> = {
        diet: 'DIET',
        bulk: 'BULK',
        maintain: 'MAINTAIN',
    };
    return map[goal];
};

/**
 * 식단 모드 변환 (앱 → API)
 */
export const toDietTypeApi = (mode: TDietMode | null): TDietType | undefined => {
    if (!mode) return undefined;
    const map: Record<TDietMode, TDietType> = {
        balanced: 'BALANCE',
        protein: 'HIGH_PROTEIN',
        keto: 'KETO',
        vegan: 'VEGAN',
    };
    return map[mode];
};

// ============================================================
// Enum 변환: API 타입 → 앱 타입
// ============================================================

/**
 * 성별 변환 (API → 앱)
 */
export const fromGenderApi = (gender: TGenderApi | null): TGender | null => {
    if (!gender) return null;
    const map: Record<TGenderApi, TGender> = {
        MALE: 'male',
        FEMALE: 'female',
    };
    return map[gender];
};

/**
 * 활동량 변환 (API → 앱)
 */
export const fromActivityLevelApi = (
    level: TActivityLevelApi | null
): TActivityLevel | null => {
    if (!level) return null;
    const map: Record<TActivityLevelApi, TActivityLevel> = {
        VERY_LOW: 'sedentary',
        LOW: 'light',
        NORMAL: 'moderate',
        HIGH: 'active',
    };
    return map[level];
};

/**
 * 목표 타입 변환 (API → 앱)
 */
export const fromGoalTypeApi = (goal: TGoalTypeApi | null): TGoalType | null => {
    if (!goal) return null;
    const map: Record<TGoalTypeApi, TGoalType> = {
        DIET: 'diet',
        BULK: 'bulk',
        MAINTAIN: 'maintain',
    };
    return map[goal];
};

/**
 * 식단 모드 변환 (API → 앱)
 */
export const fromDietTypeApi = (type: TDietType | null): TDietMode | null => {
    if (!type) return null;
    const map: Record<TDietType, TDietMode> = {
        BALANCE: 'balanced',
        HIGH_PROTEIN: 'protein',
        KETO: 'keto',
        VEGAN: 'vegan',
    };
    return map[type];
};

// ============================================================
// DTO 변환
// ============================================================

/**
 * 온보딩 데이터 → API 요청 DTO 변환
 */
export const toUserRequestDto = (data: TOnboardingData): TUserRequestDto => {
    return {
        gender: toGenderApi(data.gender),
        age: data.age ?? undefined,
        height: data.height ?? undefined,
        weight: data.weight ?? undefined,
        activityLevel: toActivityLevelApi(data.activityLevel),
        goalType: toGoalTypeApi(data.goalType),
        targetWeight: data.targetWeight ?? undefined,
        dietType: toDietTypeApi(data.dietMode),
    };
};
