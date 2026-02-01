import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { useAtomValue } from 'jotai';
import { Text, ScreenLayout } from '../../components';
import { CommentItem, type TComment, CATEGORY_COLORS, UserAvatar } from './components';
import { styles } from './PostDetailScreen.styles';
import type { CommunityStackScreenProps } from '../../navigation/types';
import { useGetPostQuery } from '../../services/post/usePostQuery';
import { useLikePostMutation, useUnlikePostMutation } from '../../services/post/usePostMutation';
import { useGetCommentsQuery } from '../../services/comment/useCommentQuery';
import { useCreateCommentMutation } from '../../services/comment/useCommentMutation';
import { boardTypeToCategory } from '../../services/post/utils';
import type { TBoardType } from '../../services/post/types';
import { userIdAtom } from '../../store/authAtom';
import { COLORS } from '../../styles';

export type PostDetailScreenProps = CommunityStackScreenProps<'PostDetail'>;

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
 * 게시글 상세 화면
 * @author 김동현
 */
export const PostDetailScreen = ({ navigation, route }: PostDetailScreenProps) => {
    const { postId, boardType: boardTypeParam } = route.params;
    const userId = useAtomValue(userIdAtom);
    const boardType: TBoardType = (boardTypeParam as TBoardType) || 'FREE';

    // 게시글 조회
    const {
        data: postData,
        isLoading: isPostLoading,
        isError: isPostError,
    } = useGetPostQuery(boardType, Number(postId), userId || 0);

    // 댓글 목록 조회
    const {
        data: commentsData,
        isLoading: isCommentsLoading,
    } = useGetCommentsQuery(Number(postId), 0, 50);

    // 좋아요 Mutation
    const likeMutation = useLikePostMutation();
    const unlikeMutation = useUnlikePostMutation();

    // 댓글 작성 Mutation
    const createCommentMutation = useCreateCommentMutation();

    const [commentText, setCommentText] = useState('');

    const post = postData?.success ? postData.data : null;
    const comments: TComment[] = commentsData?.success && commentsData.data?.content
        ? commentsData.data.content.map((c) => ({
            id: c.id.toString(),
            userId: c.userId,
            userName: `유저${c.userId}`, // TODO: 사용자 이름 조회 필요
            avatarEmoji: '👤',
            content: c.content,
            time: formatRelativeTime(c.createdAt),
        }))
        : [];

    const handleLikePress = () => {
        if (!userId || !post) return;

        if (post.isLiked) {
            unlikeMutation.mutate({ boardType, postId: Number(postId), userId });
        } else {
            likeMutation.mutate({ boardType, postId: Number(postId), userId });
        }
    };

    const handleSubmitComment = () => {
        if (!commentText.trim() || !userId) return;

        createCommentMutation.mutate(
            {
                postId: Number(postId),
                data: {
                    userId,
                    content: commentText.trim(),
                },
            },
            {
                onSuccess: () => {
                    setCommentText('');
                },
            }
        );
    };

    const handleUserPress = () => {
        if (!post) return;
        navigation.navigate('UserStory', {
            userId: post.userId.toString(),
            userName: post.userName,
            userAvatar: '👤',
        });
    };

    // 로딩 상태
    if (isPostLoading) {
        return (
            <ScreenLayout style={styles.container} edges={['top']}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.backText}>←</Text>
                    </Pressable>
                    <Text variant="h2" style={styles.headerTitle}>
                        게시글
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={COLORS.primary[300]} />
                </View>
            </ScreenLayout>
        );
    }

    // 에러 상태
    if (isPostError || !post) {
        return (
            <ScreenLayout style={styles.container} edges={['top']}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.backText}>←</Text>
                    </Pressable>
                    <Text variant="h2" style={styles.headerTitle}>
                        게시글
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text variant="bodyMedium" style={{ color: COLORS.gray[500] }}>
                        게시글을 불러오지 못했습니다
                    </Text>
                </View>
            </ScreenLayout>
        );
    }

    const category = boardTypeToCategory(boardType);
    const categoryColor = CATEGORY_COLORS[category] || COLORS.gray[500];

    return (
        <ScreenLayout style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>←</Text>
                </Pressable>
                <Text variant="h2" style={styles.headerTitle}>
                    게시글
                </Text>
            </View>

            <ScrollView style={styles.scrollView}>
                {/* Post Content */}
                <View style={styles.postSection}>
                    <View style={styles.authorInfo}>
                        <Pressable
                            style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
                            onPress={handleUserPress}
                        >
                            <UserAvatar userId={post.userId} size="large" />
                            <View style={styles.authorDetails}>
                                <Text variant="labelLarge" style={styles.authorName}>
                                    {post.userName}
                                </Text>
                                <Text variant="labelSmall" style={styles.postTime}>
                                    {formatRelativeTime(post.createdAt)}
                                </Text>
                            </View>
                        </Pressable>
                        <View style={styles.categoryBadge(categoryColor)}>
                            <Text
                                variant="labelSmall"
                                style={styles.categoryText(categoryColor)}
                            >
                                {category}
                            </Text>
                        </View>
                    </View>

                    {post.title && (
                        <Text variant="h3" style={{ marginBottom: 8 }}>
                            {post.title}
                        </Text>
                    )}

                    <Text variant="bodyMedium" style={styles.postContent}>
                        {post.content}
                    </Text>

                    <View style={styles.actions}>
                        <Pressable
                            style={styles.actionButton}
                            onPress={handleLikePress}
                            disabled={likeMutation.isPending || unlikeMutation.isPending}
                        >
                            <Text>{post.isLiked ? '❤️' : '🤍'}</Text>
                            <Text
                                variant="labelMedium"
                                style={[styles.actionText, post.isLiked && styles.actionTextActive]}
                            >
                                {post.likeCount}
                            </Text>
                        </Pressable>
                        <View style={styles.actionButton}>
                            <Text>💬</Text>
                            <Text variant="labelMedium" style={styles.actionText}>
                                {post.commentCount}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Comments Section */}
                <View style={styles.commentsSection}>
                    <Text variant="h3" style={styles.commentsHeader}>
                        댓글 {comments.length}
                    </Text>
                    {isCommentsLoading ? (
                        <ActivityIndicator size="small" color={COLORS.primary[300]} />
                    ) : comments.length === 0 ? (
                        <Text variant="bodyMedium" style={styles.emptyComments}>
                            아직 댓글이 없습니다
                        </Text>
                    ) : (
                        comments.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))
                    )}
                </View>
            </ScrollView>

            {/* Comment Input */}
            <View style={styles.commentInputContainer}>
                <TextInput
                    style={styles.commentInput}
                    placeholder="댓글을 입력하세요..."
                    value={commentText}
                    onChangeText={setCommentText}
                    multiline
                />
                <Pressable
                    style={styles.submitButton}
                    onPress={handleSubmitComment}
                    disabled={createCommentMutation.isPending || !commentText.trim()}
                >
                    <Text style={styles.submitButtonText}>
                        {createCommentMutation.isPending ? '...' : '등록'}
                    </Text>
                </Pressable>
            </View>
        </ScreenLayout>
    );
};
