import React, { useState } from 'react';
import { View, Pressable, Alert, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { Text, Button, ScreenLayout } from '../../components';
import {
    isLoggedInAtom,
    isOnboardingCompleteAtom,
    userIdAtom,
    userInfoAtom,
    isNewUserAtom,
} from '../../store';
import { socialLogin } from '../../services/auth';
import {
    signInWithGoogle,
    signInWithApple,
    isAppleSignInSupported,
} from '../../services/auth/socialAuth';
import { styles } from './LoginScreen.styles';
import type { AuthStackScreenProps } from '../../navigation/types';

export type LoginScreenProps = AuthStackScreenProps<'Login'>;

/**
 * 로그인 화면
 * 소셜 로그인 (Google, Apple) 옵션을 제공합니다.
 * @author 김동현
 */
export const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenProps['navigation']>();
    const setIsLoggedIn = useSetAtom(isLoggedInAtom);
    const setIsOnboardingComplete = useSetAtom(isOnboardingCompleteAtom);
    const setUserId = useSetAtom(userIdAtom);
    const setUserInfo = useSetAtom(userInfoAtom);
    const setIsNewUser = useSetAtom(isNewUserAtom);

    const [isLoading, setIsLoading] = useState(false);

    const handleSocialLogin = async (provider: 'google' | 'apple') => {
        setIsLoading(true);

        try {
            // 실제 소셜 로그인 SDK 호출
            let socialToken: string;

            if (provider === 'google') {
                socialToken = await signInWithGoogle();
            } else {
                // Apple 로그인 지원 확인
                if (!isAppleSignInSupported()) {
                    Alert.alert('알림', 'Apple 로그인은 iOS 기기에서만 사용 가능합니다.');
                    return;
                }
                socialToken = await signInWithApple();
            }

            // 서버에 소셜 로그인 요청
            const response = await socialLogin(provider, socialToken);

            if (!response) {
                Alert.alert('오류', '로그인에 실패했습니다. 다시 시도해주세요.');
                return;
            }

            // userId 저장
            setUserId(response.userId);
            setIsNewUser(response.isNewUser);

            if (response.isNewUser) {
                // 신규 회원 → 온보딩 화면으로
                navigation.navigate('Onboarding');
            } else {
                // 기존 회원 → 사용자 정보 저장 후 메인으로
                if (response.user) {
                    setUserInfo(response.user);
                }
                setIsOnboardingComplete(true);
                setIsLoggedIn(true);
            }
        } catch (error: any) {
            console.error('Login error:', error);
            // 취소된 경우가 아니면 에러 표시
            if (!error.message?.includes('취소')) {
                Alert.alert('오류', error.message || '로그인 중 문제가 발생했습니다.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => handleSocialLogin('google');
    const handleAppleLogin = () => handleSocialLogin('apple');

    const handleSkipLogin = () => {
        // 개발용: 로그인 없이 진행
        navigation.navigate('Onboarding');
    };

    return (
        <ScreenLayout style={styles.container} scrollable>
            <View style={styles.content}>
                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <Text variant="displayLarge" style={styles.title}>
                        AETERNA
                    </Text>
                    <Text variant="h2" style={styles.subtitle}>
                        Life is a Game
                    </Text>
                    <Text variant="bodyMedium" style={styles.description}>
                        나의 신체 데이터로 육성하는{'\n'}
                        진짜 나의 아바타
                    </Text>
                </View>

                {/* Avatar Preview Placeholder */}
                <View style={styles.avatarPlaceholder}>
                    <View style={styles.avatarCircle}>
                        <Text variant="displayLarge" style={styles.avatarEmoji}>
                            🎮
                        </Text>
                    </View>
                </View>

                {/* Login Buttons */}
                <View style={styles.buttonSection}>
                    <Pressable
                        style={[styles.socialButton, isLoading && styles.socialButtonDisabled]}
                        onPress={handleGoogleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#333" />
                        ) : (
                            <>
                                <View style={styles.socialIconPlaceholder}>
                                    <Text>G</Text>
                                </View>
                                <Text variant="labelLarge" style={styles.socialButtonText}>
                                    Google로 계속하기
                                </Text>
                            </>
                        )}
                    </Pressable>

                    <Pressable
                        style={[styles.socialButton, styles.appleButton, isLoading && styles.socialButtonDisabled]}
                        onPress={handleAppleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <>
                                <View style={styles.socialIconPlaceholder}>
                                    <Text style={styles.appleIcon}>🍎</Text>
                                </View>
                                <Text variant="labelLarge" style={styles.appleButtonText}>
                                    Apple로 계속하기
                                </Text>
                            </>
                        )}
                    </Pressable>

                    <Pressable style={styles.skipButton} onPress={handleSkipLogin}>
                        <Text variant="bodySmall" style={styles.skipText}>
                            개발 모드: 로그인 건너뛰기
                        </Text>
                    </Pressable>
                </View>

                {/* Terms */}
                <Text variant="labelSmall" style={styles.terms}>
                    계속 진행하면 서비스 이용약관 및{'\n'}
                    개인정보 처리방침에 동의하게 됩니다.
                </Text>
            </View>
        </ScreenLayout>
    );
};
