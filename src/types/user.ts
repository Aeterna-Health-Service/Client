/**
 * 사용자 관련 타입 정의
 * @author 김동현
 */

/**
 * 성별 타입
 */
export type TGender = 'male' | 'female';

/**
 * 성별 타입 (API 스펙)
 */
export type TGenderApi = 'MALE' | 'FEMALE';

/**
 * 활동량 레벨
 */
export type TActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active';

/**
 * 활동량 레벨 (API 스펙)
 * VERY_LOW: 거의 운동 안 함
 * LOW: 주 1~2회 가벼운 활동
 * NORMAL: 주 3~5회 일반 운동
 * HIGH: 거의 매일 고강도 운동
 */
export type TActivityLevelApi = 'VERY_LOW' | 'LOW' | 'NORMAL' | 'HIGH';

/**
 * 목표 타입
 */
export type TGoalType = 'diet' | 'bulk' | 'maintain';

/**
 * 목표 타입 (API 스펙)
 * DIET: 감량
 * BULK: 증량
 * MAINTAIN: 유지
 */
export type TGoalTypeApi = 'DIET' | 'BULK' | 'MAINTAIN';

/**
 * 식단 모드
 */
export type TDietMode = 'balanced' | 'protein' | 'keto' | 'vegan';

/**
 * 식단 타입 (API 스펙)
 * BALANCE: 균형 식단
 * HIGH_PROTEIN: 고단백
 * KETO: 키토제닉
 * VEGAN: 비건
 */
export type TDietType = 'BALANCE' | 'HIGH_PROTEIN' | 'KETO' | 'VEGAN';

/**
 * 사용자 상태 (API 스펙)
 * ACTIVE: 정상
 * SUSPENDED: 정지
 * DELETED: 탈퇴
 */
export type TUserStatus = 'ACTIVE' | 'SUSPENDED' | 'DELETED';

/**
 * 온보딩 데이터
 */
export type TOnboardingData = {
    // Step 1: 기본 정보
    gender: TGender | null;
    age: number | null;
    height: number | null; // cm
    weight: number | null; // kg

    // Step 2: 활동량
    activityLevel: TActivityLevel | null;

    // Step 3: 목표
    goalType: TGoalType | null;
    targetWeight: number | null; // kg

    // Step 4: 식단 모드
    dietMode: TDietMode | null;
    carbRatio: number; // %
    proteinRatio: number; // %
    fatRatio: number; // %
};

/**
 * 사용자 스탯 (게이미피케이션)
 */
export type TUserStats = {
    hp: number; // 탄수화물 (0-100)
    mp: number; // 단백질 (0-100)
    stamina: number; // 지방 (0-100)
    xp: number; // 경험치
    level: number; // 레벨
};

/**
 * 사용자 타입
 */
export type TUser = {
    id: string;
    email: string;
    name: string;
    profileImage: string | null;

    // 신체 정보
    gender: TGender;
    age: number;
    height: number;
    weight: number;

    // 목표 정보
    activityLevel: TActivityLevel;
    goalType: TGoalType;
    targetWeight: number;
    dietMode: TDietMode;

    // 영양소 비율
    carbRatio: number;
    proteinRatio: number;
    fatRatio: number;

    // 산출 값
    bmr: number; // 기초 대사량
    tdee: number; // 총 일일 에너지 소비량
    targetCalories: number; // 목표 칼로리

    // 게이미피케이션
    stats: TUserStats;

    // 메타
    createdAt: string;
    updatedAt: string;
};

/**
 * 인증 응답 타입
 */
export type TAuthResponse = {
    accessToken: string;
    refreshToken: string;
    user: TUser;
};

/**
 * 소셜 로그인 제공자
 */
export type TSocialProvider = 'google' | 'apple';
