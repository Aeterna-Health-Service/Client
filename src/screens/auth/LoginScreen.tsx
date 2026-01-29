import React from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { Text, Button, ScreenLayout } from '../../components';
import { isLoggedInAtom } from '../../store';
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

    const handleGoogleLogin = async () => {
        // TODO: Google 로그인 구현
        // 1. @react-native-google-signin/google-signin 설치
        // 2. Google Cloud Console에서 OAuth 설정
        // 3. 로그인 후 서버에 토큰 전송
        console.log('Google login pressed');

        // 임시: 온보딩으로 이동
        navigation.navigate('Onboarding');
    };

    const handleAppleLogin = async () => {
        // TODO: Apple 로그인 구현
        // 1. @invertase/react-native-apple-authentication 설치
        // 2. Apple Developer에서 Sign in with Apple 설정
        // 3. 로그인 후 서버에 토큰 전송
        console.log('Apple login pressed');

        // 임시: 온보딩으로 이동
        navigation.navigate('Onboarding');
    };

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
                    <Pressable style={styles.socialButton} onPress={handleGoogleLogin}>
                        <View style={styles.socialIconPlaceholder}>
                            <Text>G</Text>
                        </View>
                        <Text variant="labelLarge" style={styles.socialButtonText}>
                            Google로 계속하기
                        </Text>
                    </Pressable>

                    <Pressable style={[styles.socialButton, styles.appleButton]} onPress={handleAppleLogin}>
                        <View style={styles.socialIconPlaceholder}>
                            <Text style={styles.appleIcon}>🍎</Text>
                        </View>
                        <Text variant="labelLarge" style={styles.appleButtonText}>
                            Apple로 계속하기
                        </Text>
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
