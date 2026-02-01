import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAtomValue } from 'jotai';
import { Text } from '../../components';
import { CategoryTabs, PostCard, FloatingButton, type TCategory } from './components';
import { StoryGrid, type TStory } from '../profile/components';
import { styles } from './CommunityScreen.styles';
import type { CommunityStackScreenProps } from '../../navigation/types';
import { useGetPostListQuery } from '../../services/post/usePostQuery';
import { categoryToBoardType, boardTypeToCategory } from '../../services/post/utils';
import type { TBoardType, TPostResponseDto } from '../../services/post/types';
import { userIdAtom } from '../../store/authAtom';
import { COLORS } from '../../styles';

export type CommunityScreenProps = CommunityStackScreenProps<'CommunityList'>;

// Mock 데이터 - 랜덤 스토리 (Story API 구현 전까지 유지)
const mockStories: TStory[] = Array.from({ length: 15 }).map((_, i) => ({
    id: `story-${i}`,
    imageUrl: `https://picsum.photos/400/800?random=${i + 100}`,
    userId: `user-${i}`,
    userName: `유저${i + 1}`,
    userAvatar: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'][i % 10],
}));

/**
 * API 응답을 PostCard 형식으로 변환
 * @author 김동현
 */
const transformPostResponse = (post: TPostResponseDto, boardType: TBoardType) => ({
    id: post.id.toString(),
    userId: post.userId,
    user: post.userName,
    avatarEmoji: '👤',
    type: post.postType,
    category: boardTypeToCategory(boardType),
    content: post.title ? `${post.title}\n${post.content}` : post.content,
    likes: post.likeCount,
    comments: post.commentCount,
    userLiked: post.isLiked,
    time: formatRelativeTime(post.createdAt),
});

/**
 * 상대적 시간 포맷
 * @author 김동현
 */
const formatRelativeTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) return '방금 전';
    if (diffMinutes < 60) return `${diffMinutes}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 7) return `${diffDays}일 전`;
    return date.toLocaleDateString('ko-KR');
};

/**
 * 커뮤니티 화면 (목록)
 * 카테고리 탭 + 소셜 피드 + 새글 작성 FAB
 * @author 김동현
 */
export const CommunityScreen = ({ navigation }: CommunityScreenProps) => {
    const [selectedCategory, setSelectedCategory] = useState<TCategory>('전체');
    const userId = useAtomValue(userIdAtom);

    // 카테고리에 따른 boardType 결정
    const boardType = categoryToBoardType(selectedCategory);

    // 전체 조회 시 FREE 게시판 기본 조회 (나중에 여러 boardType 병합 가능)
    const queryBoardType: TBoardType = boardType || 'FREE';

    const { data, isLoading, isError, refetch } = useGetPostListQuery(
        queryBoardType,
        0,
        20
    );

    const handlePostPress = (postId: string) => {
        navigation.navigate('PostDetail', { postId, boardType: queryBoardType });
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

    // 게시글 변환
    const posts = data?.success && data.data?.content
        ? data.data.content.map((post) => transformPostResponse(post, queryBoardType))
        : [];

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
                ) : isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
                        <ActivityIndicator size="large" color={COLORS.primary[300]} />
                        <Text variant="bodyMedium" style={{ marginTop: 12, color: COLORS.gray[500] }}>
                            게시글을 불러오는 중...
                        </Text>
                    </View>
                ) : isError ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
                        <Text variant="bodyMedium" style={{ color: COLORS.gray[500] }}>
                            게시글을 불러오지 못했습니다
                        </Text>
                        <Text
                            variant="labelMedium"
                            style={{ color: COLORS.primary[300], marginTop: 8 }}
                            onPress={() => refetch()}
                        >
                            다시 시도
                        </Text>
                    </View>
                ) : posts.length === 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
                        <Text variant="bodyMedium" style={{ color: COLORS.gray[500] }}>
                            아직 게시글이 없습니다
                        </Text>
                    </View>
                ) : (
                    <View style={styles.feedSection}>
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onPress={() => handlePostPress(post.id)}
                                onUserPress={() =>
                                    navigation.navigate('UserStory', {
                                        userId: post.user,
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
