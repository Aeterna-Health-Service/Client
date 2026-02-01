/**
 * 소셜 로그인 서비스
 * Google 및 Apple 로그인 SDK 래퍼
 * @author 김동현
 */

import { Platform } from 'react-native';
import {
    GoogleSignin,
    statusCodes,
    type SignInResponse,
} from '@react-native-google-signin/google-signin';
import appleAuth, {
    AppleRequestOperation,
    AppleRequestScope,
} from '@invertase/react-native-apple-authentication';
import Config from 'react-native-config';

/**
 * Google Sign In 초기화
 * 앱 시작 시 한 번 호출
 */
export const configureGoogleSignIn = (): void => {
    GoogleSignin.configure({
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        forceCodeForRefreshToken: true,
    });
};

/**
 * Google 로그인
 * @returns Google ID Token
 * @throws Error - 로그인 실패 시
 */
export const signInWithGoogle = async (): Promise<string> => {
    try {
        // Google Play Services 확인
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        // 로그인 수행
        const response: SignInResponse = await GoogleSignin.signIn();

        // ID Token 반환
        if (response.data?.idToken) {
            return response.data.idToken;
        }

        throw new Error('Google ID Token을 받지 못했습니다.');
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            throw new Error('로그인이 취소되었습니다.');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            throw new Error('로그인이 이미 진행 중입니다.');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            throw new Error('Google Play Services를 사용할 수 없습니다.');
        } else {
            throw new Error(error.message || 'Google 로그인에 실패했습니다.');
        }
    }
};

/**
 * Google 로그아웃
 */
export const signOutFromGoogle = async (): Promise<void> => {
    try {
        await GoogleSignin.signOut();
    } catch (error) {
        console.error('Google sign out error:', error);
    }
};

/**
 * Apple 로그인 지원 여부 확인
 * iOS 13+ 에서만 지원
 */
export const isAppleSignInSupported = (): boolean => {
    if (Platform.OS !== 'ios') {
        return false;
    }
    return appleAuth.isSupported;
};

/**
 * Apple 로그인
 * @returns Apple Identity Token
 * @throws Error - 로그인 실패 시
 */
export const signInWithApple = async (): Promise<string> => {
    if (!isAppleSignInSupported()) {
        throw new Error('이 기기에서는 Apple 로그인을 사용할 수 없습니다.');
    }

    try {
        // Apple 로그인 요청
        const appleAuthResponse = await appleAuth.performRequest({
            requestedOperation: AppleRequestOperation.LOGIN,
            requestedScopes: [AppleRequestScope.EMAIL, AppleRequestScope.FULL_NAME],
        });

        // 인증 상태 확인
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthResponse.user);

        if (credentialState !== appleAuth.State.AUTHORIZED) {
            throw new Error('Apple 로그인이 승인되지 않았습니다.');
        }

        // Identity Token 반환
        if (appleAuthResponse.identityToken) {
            return appleAuthResponse.identityToken;
        }

        throw new Error('Apple Identity Token을 받지 못했습니다.');
    } catch (error: any) {
        if (error.code === appleAuth.Error.CANCELED) {
            throw new Error('로그인이 취소되었습니다.');
        }
        throw new Error(error.message || 'Apple 로그인에 실패했습니다.');
    }
};
