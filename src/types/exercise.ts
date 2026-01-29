/**
 * 운동 관련 타입 정의
 * @author 김동현
 */

/**
 * 운동 부위
 */
export type TExercisePart = 'chest' | 'back' | 'shoulder' | 'arm' | 'leg' | 'core' | 'cardio';

/**
 * 운동 강도
 */
export type TExerciseIntensity = 'low' | 'medium' | 'high';

/**
 * 운동 아이템
 */
export type TExercise = {
    id: string;
    name: string;
    part: TExercisePart;
    sets?: number;
    reps?: number;
    weight?: number; // kg
    duration?: number; // 분
    caloriesBurned: number;
};

/**
 * 워크아웃 세션
 */
export type TWorkout = {
    id: string;
    userId: string;
    exercises: TExercise[];
    totalDuration: number; // 분
    totalCaloriesBurned: number;
    intensity: TExerciseIntensity;
    xpEarned: number;
    isFromWatch: boolean;
    createdAt: string;
};

/**
 * 일일 운동 요약
 */
export type TDailyExerciseSummary = {
    date: string;
    workouts: TWorkout[];
    totalDuration: number;
    totalCaloriesBurned: number;
    totalXpEarned: number;
};

/**
 * 운동 루틴 프리셋
 */
export type TExerciseRoutine = {
    id: string;
    name: string;
    description: string;
    parts: TExercisePart[];
    exercises: Omit<TExercise, 'id' | 'caloriesBurned'>[];
};
