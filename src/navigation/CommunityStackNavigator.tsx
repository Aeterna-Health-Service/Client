import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommunityScreen } from '../screens/community/CommunityScreen';
import { PostDetailScreen } from '../screens/community/PostDetailScreen';
import { CreatePostScreen } from '../screens/community/CreatePostScreen';
import type { CommunityStackParamList } from './types';

const Stack = createNativeStackNavigator<CommunityStackParamList>();

/**
 * 커뮤니티 스택 네비게이터
 * 커뮤니티 목록, 상세, 글쓰기 화면을 관리합니다.
 * @author 김동현
 */
export const CommunityStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CommunityList" component={CommunityScreen} />
            <Stack.Screen name="PostDetail" component={PostDetailScreen} />
            <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        </Stack.Navigator>
    );
};
