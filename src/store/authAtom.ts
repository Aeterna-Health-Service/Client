/**
 * 인증 상태 Atom
 * @author 김동현
 */

import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { TUser } from '../types';
import type { TUserResponseDto } from '../services/user/types';

// AsyncStorage 기반 영속 저장소
const storage = createJSONStorage<any>(() => AsyncStorage);

/**
 * 로그인 여부
 */
export const isLoggedInAtom = atom<boolean>(false);

/**
 * 온보딩 완료 여부
 */
export const isOnboardingCompleteAtom = atom<boolean>(false);

/**
 * 서버에서 발급받은 사용자 ID (영속)
 */
export const userIdAtom = atomWithStorage<number | null>('aeterna_user_id', null, storage);

/**
 * 캐시된 사용자 정보 - API 응답 (영속)
 */
export const userInfoAtom = atomWithStorage<TUserResponseDto | null>('aeterna_user_info', null, storage);

/**
 * 현재 사용자 정보 (레거시 - 기존 코드 호환용)
 * @deprecated userInfoAtom 사용 권장
 */
export const userAtom = atom<TUser | null>(null);

/**
 * 신규 회원 여부 (온보딩 필요 여부)
 */
export const isNewUserAtom = atom<boolean>(false);

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
