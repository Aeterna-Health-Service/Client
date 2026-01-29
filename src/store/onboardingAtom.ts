import { atom } from 'jotai';
import type { TOnboardingData } from '../types';

/**
 * 온보딩 상태 Atom
 * @author 김동현
 */

/**
 * 온보딩 초기 데이터
 */
const initialOnboardingData: TOnboardingData = {
    gender: null,
    age: null,
    height: null,
    weight: null,
    activityLevel: null,
    goalType: null,
    targetWeight: null,
    dietMode: null,
    carbRatio: 50,
    proteinRatio: 30,
    fatRatio: 20,
};

/**
 * 현재 온보딩 단계 (1-4)
 */
export const onboardingStepAtom = atom<number>(1);

/**
 * 온보딩 데이터
 */
export const onboardingDataAtom = atom<TOnboardingData>(initialOnboardingData);

/**
 * 온보딩 데이터 리셋 액션
 */
export const resetOnboardingAtom = atom(null, (get, set) => {
    set(onboardingStepAtom, 1);
    set(onboardingDataAtom, initialOnboardingData);
});
