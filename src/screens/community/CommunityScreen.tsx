import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { CategoryTabs, PostCard, FloatingButton, type TPost, type TCategory } from './components';
import { StoryGrid, type TStory } from '../profile/components';
import { styles } from './CommunityScreen.styles';
import type { CommunityStackScreenProps } from '../../navigation/types';

export type CommunityScreenProps = CommunityStackScreenProps<'CommunityList'>;

// Mock 데이터 - 게시글
const mockPosts: TPost[] = [
    {
        id: '1',
        user: '헬스왕',
        avatarEmoji: '💪',
        type: '오운완',
        category: '운동꿀팁',
        content: '오늘 가슴 운동 완료! 💪',
        likes: 24,
        comments: 3,
        userLiked: false,
        time: '2시간 전',
    },
    {
        id: '2',
        user: '다이어터',
        avatarEmoji: '🥗',
        type: '식단공유',
        category: '식단추천',
        content: '고단백 저탄고지 점심 - 닭가슴살 샐러드 추천드려요!',
        likes: 18,
        comments: 5,
        userLiked: true,
        time: '4시간 전',
    },
    {
        id: '3',
        user: '러닝맨',
        avatarEmoji: '🏃',
        type: '오운완',
        category: '운동꿀팁',
        content: '아침 10km 러닝 🏃 새벽 공기가 너무 좋았어요',
        likes: 45,
        comments: 8,
        userLiked: false,
        time: '6시간 전',
    },
    {
        id: '4',
        user: '초보헬린이',
        avatarEmoji: '🐣',
        type: '질문',
        category: '자유게시판',
        content: '헬스장 처음 가는데 어떤 운동부터 해야 할까요?',
        likes: 12,
        comments: 15,
        userLiked: false,
        time: '8시간 전',
    },
    {
        id: '5',
        user: '영양사언니',
        avatarEmoji: '👩‍⚕️',
        type: '정보',
        category: '식단추천',
        content: '다이어트 식단에 좋은 단백질 급원 TOP 5를 알려드릴게요!',
        likes: 67,
        comments: 22,
        userLiked: true,
        time: '1일 전',
    },
];

// Mock 데이터 - 랜덤 스토리
const mockStories: TStory[] = Array.from({ length: 15 }).map((_, i) => ({
    id: `story-${i}`,
    imageUrl: `https://picsum.photos/400/800?random=${i + 100}`,
    userId: `user-${i}`,
    userName: `유저${i + 1}`,
    userAvatar: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'][i % 10],
}));

/**
 * 커뮤니티 화면 (목록)
 * 카테고리 탭 + 소셜 피드 + 새글 작성 FAB
 * @author 김동현
 */
export const CommunityScreen = ({ navigation }: CommunityScreenProps) => {
    const [selectedCategory, setSelectedCategory] = useState<TCategory>('전체');

    const filteredPosts = selectedCategory === '전체'
        ? mockPosts
        : mockPosts.filter((post) => post.category === selectedCategory);

    const handlePostPress = (postId: string) => {
        navigation.navigate('PostDetail', { postId });
    };

    const handleStoryPress = (story: TStory) => {
        navigation.navigate('StoryDetail', {
            storyId: story.id,
            imageUrl: story.imageUrl,
        });
    };

    const handleCreatePost = () => {
        navigation.navigate('CreatePost', {
            category: selectedCategory !== '전체' && selectedCategory !== '스토리' ? selectedCategory : undefined,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text variant="h1">커뮤니티</Text>
            </View>

            {/* Category Tabs */}
            <CategoryTabs
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <ScrollView style={styles.scrollView}>
                {selectedCategory === '스토리' ? (
                    <View>
                        <View style={{ paddingHorizontal: 16, paddingTop: 16, marginBottom: 16 }}>
                            <Text variant="h3">스토리</Text>
                        </View>
                        <StoryGrid
                            stories={mockStories}
                            onStoryPress={handleStoryPress}
                        />
                    </View>
                ) : (
                    <View style={styles.feedSection}>
                        {filteredPosts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onPress={() => handlePostPress(post.id)}
                                onUserPress={() =>
                                    navigation.navigate('UserStory', {
                                        userId: post.user, // Using username as ID for mock
                                        userName: post.user,
                                        userAvatar: post.avatarEmoji,
                                    })
                                }
                            />
                        ))}
                    </View>
                )}
            </ScrollView>

            {/* Floating Action Button */}
            {selectedCategory !== '스토리' && <FloatingButton onPress={handleCreatePost} />}
        </SafeAreaView>
    );
};
