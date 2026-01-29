import React from 'react';
import { View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { StoryTabContent, type TStory } from './components';
import { styles } from './UserStoryScreen.styles';
import { type RootStackScreenProps } from '../../navigation/types';

export type UserStoryScreenProps = RootStackScreenProps<'UserStory'>;

/**
 * 사용자 스토리 화면 (타인 프로필 보기)
 * @author 김동현
 */
export const UserStoryScreen = ({ navigation, route }: UserStoryScreenProps) => {
    const { userId, userName, userAvatar } = route.params;
    const [isFollowing, setIsFollowing] = React.useState(false);

    // Mock Stories for other users
    const stories: TStory[] = [
        { id: '1', imageUrl: `https://picsum.photos/400/800?random=${userId}1` },
        { id: '2', imageUrl: `https://picsum.photos/400/800?random=${userId}2` },
        { id: '3', imageUrl: `https://picsum.photos/400/800?random=${userId}3` },
        { id: '4', imageUrl: `https://picsum.photos/400/800?random=${userId}4` },
    ];

    const handleStoryPress = (story: TStory) => {
        navigation.navigate('StoryDetail', {
            storyId: story.id,
            imageUrl: story.imageUrl,
        });
    };

    const handleFollowPress = () => {
        setIsFollowing(prev => !prev);
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </Pressable>
                <Text style={styles.headerTitle}>{userName}</Text>
            </View>

            {/* Content */}
            <StoryTabContent
                user={{
                    name: userName || '사용자',
                    avatarEmoji: userAvatar,
                }}
                stories={stories}
                isMyProfile={false}
                onStoryPress={handleStoryPress}
                isFollowing={isFollowing}
                onFollowPress={handleFollowPress}
            />
        </SafeAreaView>
    );
};
