import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DietUploadScreen } from '../screens/home/DietUploadScreen';
import { ExerciseUploadScreen } from '../screens/home/ExerciseUploadScreen';
import type { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * 홈 스택 네비게이터
 * 홈 메인 화면과 업로드 상세 화면들을 관리합니다.
 * @author 김동현
 */
export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
            initialRouteName="HomeMain"
        >
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="DietUpload" component={DietUploadScreen} />
            <Stack.Screen name="ExerciseUpload" component={ExerciseUploadScreen} />
        </Stack.Navigator>
    );
};
