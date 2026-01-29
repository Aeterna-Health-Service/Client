/**
 * HomeScreen 관련 타입 정의
 * @author 김동현
 */

export type TabKey = 'avatar' | 'diet' | 'exercise';

export interface Tab {
    key: TabKey;
    label: string;
}

export interface AvatarStats {
    hp: number;
    mp: number;
    stamina: number;
    xp: number;
    level: number;
    nextLevelXp: number;
}

export interface NutrientProgress {
    current: number;
    target: number;
}

export interface DailyProgress {
    calories: NutrientProgress;
    carbs: NutrientProgress;
    protein: NutrientProgress;
    fat: NutrientProgress;
}

export interface Meal {
    id: string;
    type: string;
    label: string;
    foods: string[];
    calories: number;
    time: string;
}

export interface Workout {
    id: string;
    name: string;
    duration: number;
    calories: number;
    xp: number;
    time: string;
    isFromWatch: boolean;
}

export interface Routine {
    id: string;
    emoji: string;
    name: string;
    duration: string;
    exercises: number;
}
