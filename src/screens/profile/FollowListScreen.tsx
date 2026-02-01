import React from 'react';
import { View, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { ProfileStackScreenProps } from '../../navigation/types';
import { styles } from './FollowListScreen.styles';

type TFollower = {
    id: string;
    name: string;
    avatarEmoji: string;
    level: number;
    description: string;
};

// Mock data
const mockFollowers: TFollower[] = Array.from({ length: 20 }).map((_, i) => ({
    id: `user-${i}`,
    name: `유저 ${i + 1}`,
    avatarEmoji: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'][i % 10] || '😀',
    level: Math.floor(Math.random() * 50) + 1,
    description: '운동을 좋아하는 헬스인입니다! 💪',
}));

/**
 * 팔로워/팔로잉 목록 화면
 * @author 김동현
 */
export const FollowListScreen = ({ navigation, route }: ProfileStackScreenProps<'FollowList'>) => {
    const { type } = route.params;
    const title = type === 'followers' ? '팔로워' : '팔로잉';

    const handleBack = () => {
        navigation.goBack();
    };

    const handleUserPress = (user: TFollower) => {
        navigation.navigate('UserStory', {
            userId: user.id,
            userName: user.name,
            userAvatar: user.avatarEmoji,
        });
    };

    const renderItem = ({ item }: { item: TFollower }) => (
        <Pressable style={styles.userItem} onPress={() => handleUserPress(item)}>
            <View style={styles.avatarContainer}>
                <Text style={styles.avatarEmoji}>{item.avatarEmoji}</Text>
            </View>
            <View style={styles.userInfo}>
                <View style={styles.nameRow}>
                    <Text variant="h3" style={styles.userName}>{item.name}</Text>
                    <View style={styles.levelBadge}>
                        <Text style={styles.levelText}>Lv.{item.level}</Text>
                    </View>
                </View>
                <Text variant="labelMedium" style={styles.description} numberOfLines={1}>
                    {item.description}
                </Text>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </Pressable>
                <Text variant="h2">{title}</Text>
                <View style={{ width: 40 }} />
            </View>

            <FlatList
                data={mockFollowers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

