/**
 * 사용자 서비스 타입 정의
 * @author 김동현
 */

import type {
    TGenderApi,
    TActivityLevelApi,
    TGoalTypeApi,
    TDietType,
    TUserStatus,
} from '../../types/user';

/**
 * 공통 API 응답 DTO
 */
export type TGetResponse<T> = {
    success: boolean;
    data: T;
    error?: {
        code: number;
        message: string;
    };
};

/**
 * 사용자 정보 요청 DTO (회원가입/수정)
 */
export type TUserRequestDto = {
    name?: string;
    nickname?: string;
    phone?: string;
    email?: string;
    gender?: TGenderApi;
    age?: number;
    height?: number;
    activityLevel?: TActivityLevelApi;
    goalType?: TGoalTypeApi;
    weight?: number;
    targetWeight?: number;
    dietType?: TDietType;
    goalKcal?: number;
    waterTargetMl?: number;
    exerciseKcalTarget?: number;
    stepsTarget?: number;
};

/**
 * 사용자 정보 응답 DTO
 */
export type TUserResponseDto = {
    id: number;
    name: string;
    nickname: string;
    phone: string;
    email: string;
    profileImageUrl: string | null;
    gender: TGenderApi;
    age: number;
    height: number;
    activityLevel: TActivityLevelApi;
    goalType: TGoalTypeApi;
    targetWeight: number;
    dietType: TDietType;
    bmr: number;
    tdeeKcal: number;
    status: TUserStatus;
    goalKcal: number;
    targetCarb: number;
    targetProtein: number;
    targetFatG: number;
    waterTargetMl: number;
    exerciseKcalTarget: number;
    stepsTarget: number;
    createdAt: string;
};
