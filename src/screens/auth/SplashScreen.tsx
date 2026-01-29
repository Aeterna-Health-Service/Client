import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { Text } from '../../components';
import { COLORS } from '../../styles';
import { authLoadingAtom } from '../../store';
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

    useEffect(() => {
        // TODO: 저장된 토큰 확인 및 자동 로그인
        const checkAuth = async () => {
            try {
                // Simulate loading
                await new Promise<void>((resolve) => setTimeout(resolve, 1500));

                // TODO: AsyncStorage에서 토큰 확인
                // const token = await AsyncStorage.getItem('accessToken');
                // if (token) { validateToken() }

                setAuthLoading(false);
                navigation.replace('Login');
            } catch (error) {
                setAuthLoading(false);
                navigation.replace('Login');
            }
        };

        checkAuth();
    }, [navigation, setAuthLoading]);

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
