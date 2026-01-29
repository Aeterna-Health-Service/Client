import { atom } from 'jotai';
import type { TUser } from '../types';

/**
 * 인증 상태 Atom
 * @author 김동현
 */

/**
 * 로그인 여부
 */
export const isLoggedInAtom = atom<boolean>(false);

/**
 * 온보딩 완료 여부
 */
export const isOnboardingCompleteAtom = atom<boolean>(false);

/**
 * 현재 사용자 정보
 */
export const userAtom = atom<TUser | null>(null);

/**
 * 액세스 토큰
 */
export const accessTokenAtom = atom<string | null>(null);

/**
 * 리프레시 토큰
 */
export const refreshTokenAtom = atom<string | null>(null);

/**
 * 인증 로딩 상태
 */
export const authLoadingAtom = atom<boolean>(true);
