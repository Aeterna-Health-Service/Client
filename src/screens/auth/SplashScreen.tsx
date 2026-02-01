import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetAtom, useAtomValue } from 'jotai';
import { Text } from '../../components';
import { COLORS } from '../../styles';
import {
    authLoadingAtom,
    isLoggedInAtom,
    isOnboardingCompleteAtom,
    userIdAtom,
    userInfoAtom,
} from '../../store';
import { getAccessToken } from '../../services/apiClient';
import { getUser } from '../../services/user';
import { styles } from './SplashScreen.styles';
import type { AuthStackScreenProps } from '../../navigation/types';

export type SplashScreenProps = AuthStackScreenProps<'Splash'>;

/**
 * 스플래시 화면
 * 앱 시작 시 인증 상태를 확인합니다.
 * @author 김동현
 */
export const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenProps['navigation']>();
    const setAuthLoading = useSetAtom(authLoadingAtom);
    const setIsLoggedIn = useSetAtom(isLoggedInAtom);
    const setIsOnboardingComplete = useSetAtom(isOnboardingCompleteAtom);
    const setUserInfo = useSetAtom(userInfoAtom);

    // 영속 저장된 userId 가져오기
    const userId = useAtomValue(userIdAtom);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // 약간의 스플래시 표시 시간
                await new Promise<void>((resolve) => setTimeout(resolve, 1000));

                // 저장된 토큰 확인
                const token = await getAccessToken();

                if (token && userId) {
                    // 토큰과 userId가 있으면 사용자 정보 조회
                    try {
                        const userResponse = await getUser(userId);

                        if (userResponse.success && userResponse.data) {
                            // 사용자 정보 저장 및 로그인 상태로 전환
                            setUserInfo(userResponse.data);
                            setIsLoggedIn(true);
                            setIsOnboardingComplete(true);
                            setAuthLoading(false);
                            // 메인 화면은 RootNavigator에서 처리됨
                            return;
                        }
                    } catch (userError) {
                        console.error('Failed to fetch user:', userError);
                    }
                }

                // 토큰 없거나 사용자 조회 실패 → 로그인 화면
                setAuthLoading(false);
                navigation.replace('Login');
            } catch (error) {
                console.error('Auth check error:', error);
                setAuthLoading(false);
                navigation.replace('Login');
            }
        };

        checkAuth();
    }, [navigation, setAuthLoading, setIsLoggedIn, setIsOnboardingComplete, setUserInfo, userId]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text variant="displayLarge" style={styles.logo}>
                    AETERNA
                </Text>
                <Text variant="bodyMedium" style={styles.tagline}>
                    Life is a Game
                </Text>
            </View>
            <ActivityIndicator size="large" color={COLORS.primary[400]} style={styles.loader} />
        </View>
    );
};
