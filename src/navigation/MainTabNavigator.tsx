import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Text } from '../components';
import { HomeScreen } from '../screens/home/HomeScreen';
import { HomeStackNavigator } from './HomeStackNavigator';
import { StatsScreen } from '../screens/stats/StatsScreen';
import { CommunityStackNavigator } from './CommunityStackNavigator';
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { COLORS } from '../styles';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

/**
 * 메인 탭 네비게이터
 * 앱의 하단 탭 바 네비게이션을 관리합니다.
 * 4개 탭: 홈(통합), 통계, 커뮤니티, 마이
 * @author 김동현
 */
const TabIcon = ({ focused, icon }: { focused: boolean; icon: string }) => {
    return (
        <View
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? COLORS.primary[100] : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 20 }}>{icon}</Text>
        </View>
    );
};

export const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary[500],
                tabBarInactiveTintColor: COLORS.gray[400],
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.gray[200],
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '500',
                    marginTop: 4,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="🏠" />,
                }}
            />
            <Tab.Screen
                name="Stats"
                component={StatsScreen}
                options={{
                    tabBarLabel: '통계',
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="📊" />,
                }}
            />
            <Tab.Screen
                name="Community"
                component={CommunityStackNavigator}
                options={{
                    tabBarLabel: '커뮤니티',
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="💬" />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarLabel: '마이',
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="👤" />,
                }}
            />
        </Tab.Navigator>
    );
};

