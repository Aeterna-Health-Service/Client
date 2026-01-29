import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { MyPostsScreen } from '../screens/profile/MyPostsScreen';
import { AddStoryScreen } from '../screens/profile/AddStoryScreen';
import { CreatePostScreen } from '../screens/community/CreatePostScreen';
import { SettingsScreen } from '../screens/profile/SettingsScreen';
import { EditGoalScreen } from '../screens/profile/EditGoalScreen';
import { ShopScreen } from '../screens/profile/ShopScreen';
import type { ProfileStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

/**
 * 프로필 스택 네비게이터
 * 프로필 메인, 내 게시글, 스토리 추가, 스토리 상세 화면을 관리합니다.
 * @author 김동현
 */
export const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ProfileMain" component={ProfileScreen} />
            <Stack.Screen name="MyPosts" component={MyPostsScreen} />
            <Stack.Screen name="AddStory" component={AddStoryScreen} />
            <Stack.Screen name="EditPost" component={CreatePostScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="EditGoal" component={EditGoalScreen} />
            <Stack.Screen name="Shop" component={ShopScreen} />
        </Stack.Navigator>
    );
};
