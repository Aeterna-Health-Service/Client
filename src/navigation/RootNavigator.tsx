import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai';
import { AuthStackNavigator } from './AuthStackNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import { StoryDetailScreen } from '../screens/profile/StoryDetailScreen';
import { UserStoryScreen } from '../screens/profile/UserStoryScreen';
import { isLoggedInAtom, isOnboardingCompleteAtom } from '../store';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * 루트 네비게이터
 * 인증 상태에 따라 Auth/Main 스택을 분기합니다.
 * @author 김동현
 */
export const RootNavigator = () => {
    const isLoggedIn = useAtomValue(isLoggedInAtom);
    const isOnboardingComplete = useAtomValue(isOnboardingCompleteAtom);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* 개발 모드에서는 온보딩 건너뛰기 */}
                {__DEV__ || (isLoggedIn && isOnboardingComplete) ? (
                    <>
                        <Stack.Screen name="Main" component={MainTabNavigator} />
                        <Stack.Screen
                            name="StoryDetail"
                            component={StoryDetailScreen}
                            options={{
                                presentation: 'transparentModal',
                                animation: 'fade',
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen name="UserStory" component={UserStoryScreen} />
                    </>
                ) : (
                    <Stack.Screen name="Auth" component={AuthStackNavigator} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
