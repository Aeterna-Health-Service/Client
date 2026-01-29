import React, { useState } from 'react';
import { View, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSetAtom } from 'jotai';
import { Text } from '../../components';
import { isLoggedInAtom, isOnboardingCompleteAtom } from '../../store';
import { StoryTabContent, type TStory } from './components';
import { styles } from './ProfileScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type ProfileScreenProps = ProfileStackScreenProps<'ProfileMain'>;

type TTab = 'profile' | 'story';

/**
 * 프로필/마이페이지 화면
 * 탭 구조: 프로필(설정) + 스토리
 * @author 김동현
 */
export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
    const [activeTab, setActiveTab] = useState<TTab>('profile');
    const [isEditMode, setIsEditMode] = useState(false);
    const [stories, setStories] = useState<TStory[]>([
        { id: '1', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
        { id: '2', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' },
        { id: '3', imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400' },
        { id: '4', imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400' },
        { id: '5', imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400' },
        { id: '6', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    ]);
    const setIsLoggedIn = useSetAtom(isLoggedInAtom);
    const setIsOnboardingComplete = useSetAtom(isOnboardingCompleteAtom);

    // 임시 사용자 데이터
    const user = {
        name: '김동현',
        level: 5,
        xp: 1250,
        achievements: 12,
        followers: 48,
        following: 32,
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsOnboardingComplete(false);
    };

    const handleNewStoryPress = () => {
        navigation.navigate('AddStory');
    };

    const handlePostPress = () => {
        navigation.navigate('MyPosts');
    };

    const handleToggleEditMode = () => {
        setIsEditMode((prev) => !prev);
    };

    const handleDeleteStory = (storyId: string) => {
        Alert.alert(
            '스토리 삭제',
            '정말 이 스토리를 삭제하시겠습니까?',
            [
                { text: '취소', style: 'cancel' },
                {
                    text: '삭제',
                    style: 'destructive',
                    onPress: () => {
                        setStories((prev) => prev.filter((s) => s.id !== storyId));
                    },
                },
            ]
        );
    };

    const handleStoryPress = (story: TStory) => {
        navigation.navigate('StoryDetail', {
            storyId: story.id,
            imageUrl: story.imageUrl,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text variant="h1">마이</Text>
                {activeTab === 'story' && (
                    <Pressable onPress={handleToggleEditMode} style={styles.editButton}>
                        <Text style={styles.editButtonText}>
                            {isEditMode ? '완료' : '편집'}
                        </Text>
                    </Pressable>
                )}
            </View>

            {/* Tab Buttons */}
            <View style={styles.tabButtons}>
                <Pressable
                    style={[styles.tabButton, activeTab === 'profile' && styles.tabButtonActive]}
                    onPress={() => { setActiveTab('profile'); setIsEditMode(false); }}
                >
                    <Text
                        variant="labelMedium"
                        style={[styles.tabText, activeTab === 'profile' && styles.tabTextActive]}
                    >
                        프로필
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.tabButton, activeTab === 'story' && styles.tabButtonActive]}
                    onPress={() => setActiveTab('story')}
                >
                    <Text
                        variant="labelMedium"
                        style={[styles.tabText, activeTab === 'story' && styles.tabTextActive]}
                    >
                        스토리
                    </Text>
                </Pressable>
            </View>

            {activeTab === 'profile' ? (
                <ScrollView style={styles.scrollView}>
                    {/* Profile Card */}
                    <View style={styles.profileCard}>
                        <View style={styles.avatarLarge}>
                            <Text style={styles.avatarEmoji}>🧙‍♂️</Text>
                        </View>
                        <Text variant="h2" style={styles.userName}>
                            {user.name}
                        </Text>
                        <View style={styles.levelBadgeLarge}>
                            <Text variant="labelMedium" style={styles.levelText}>
                                Lv.{user.level}
                            </Text>
                        </View>

                        {/* Social Stats */}
                        <View style={styles.socialStats}>
                            <View style={styles.socialStatItem}>
                                <Text variant="labelLarge">{user.achievements}</Text>
                                <Text variant="labelSmall" style={styles.socialStatLabel}>
                                    업적
                                </Text>
                            </View>
                            <View style={styles.statDivider} />
                            <View style={styles.socialStatItem}>
                                <Text variant="labelLarge">{user.followers}</Text>
                                <Text variant="labelSmall" style={styles.socialStatLabel}>
                                    팔로워
                                </Text>
                            </View>
                            <View style={styles.statDivider} />
                            <View style={styles.socialStatItem}>
                                <Text variant="labelLarge">{user.following}</Text>
                                <Text variant="labelSmall" style={styles.socialStatLabel}>
                                    팔로잉
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Menu Items */}
                    <View style={styles.menuSection}>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
                            <Text variant="bodyMedium">⚙️ 설정</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('EditGoal')}>
                            <Text variant="bodyMedium">📊 목표 수정</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Shop')}>
                            <Text variant="bodyMedium">🏆 업적 상점</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem}>
                            <Text variant="bodyMedium">❓ 도움말</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={handleLogout}>
                            <Text variant="bodyMedium" style={styles.logoutText}>
                                🚪 로그아웃
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            ) : (
                /* Story Tab Content */
                <StoryTabContent
                    user={{
                        name: user.name,
                        avatarEmoji: '🧙‍♂️',
                    }}
                    stories={stories}
                    isMyProfile={true}
                    isEditMode={isEditMode}
                    onPostPress={handlePostPress}
                    onNewStoryPress={handleNewStoryPress}
                    onDeleteStory={handleDeleteStory}
                    onStoryPress={handleStoryPress}
                />
            )
            }
        </SafeAreaView >
    );
};
