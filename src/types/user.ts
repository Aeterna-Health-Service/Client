/**
 * 사용자 관련 타입 정의
 * @author 김동현
 */

/**
 * 성별 타입
 */
export type TGender = 'male' | 'female';

/**
 * 활동량 레벨
 */
export type TActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active';

/**
 * 목표 타입
 */
export type TGoalType = 'diet' | 'bulk' | 'maintain';

/**
 * 식단 모드
 */
export type TDietMode = 'balanced' | 'protein' | 'keto' | 'vegan';

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
