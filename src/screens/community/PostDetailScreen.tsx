import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput } from 'react-native';
import { Text, ScreenLayout } from '../../components';
import { CommentItem, type TComment, CATEGORY_COLORS } from './components';
import { styles } from './PostDetailScreen.styles';
import type { CommunityStackScreenProps } from '../../navigation/types';

export type PostDetailScreenProps = CommunityStackScreenProps<'PostDetail'>;

// Mock 데이터 - 실제로는 postId로 조회
const getPostById = (postId: string) => ({
    id: postId,
    user: '헬스왕',
    avatarEmoji: '💪',
    type: '오운완',
    category: '운동꿀팁' as const,
    content: '오늘 가슴 운동 완료! 💪\n\n벤치프레스 5세트, 인클라인 덤벨프레스 4세트, 케이블 크로스오버 3세트로 마무리했습니다.\n\n운동 후에는 단백질 섭취 꼭 잊지 마세요!',
    likes: 24,
    comments: 3,
    userLiked: false,
    time: '2시간 전',
});

const mockComments: TComment[] = [
    { id: '1', userName: '런닝맨', avatarEmoji: '🏃', content: '대단하시네요! 저도 오늘 러닝 완료했어요', time: '1시간 전' },
    { id: '2', userName: '다이어터', avatarEmoji: '🥗', content: '오운완 축하드려요~', time: '30분 전' },
    { id: '3', userName: '초보헬린이', avatarEmoji: '🐣', content: '세트 구성 참고하겠습니다!', time: '10분 전' },
];

/**
 * 게시글 상세 화면
 * @author 김동현
 */
export const PostDetailScreen = ({ navigation, route }: PostDetailScreenProps) => {
    const { postId } = route.params;
    const post = getPostById(postId);

    const [liked, setLiked] = useState(post.userLiked);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState<TComment[]>(mockComments);

    const handleLikePress = () => {
        if (liked) {
            setLikeCount((prev) => prev - 1);
        } else {
            setLikeCount((prev) => prev + 1);
        }
        setLiked(!liked);
    };

    const handleSubmitComment = () => {
        if (!commentText.trim()) return;

        const newComment: TComment = {
            id: Date.now().toString(),
            userName: '나',
            avatarEmoji: '😊',
            content: commentText.trim(),
            time: '방금 전',
        };
        setComments((prev) => [...prev, newComment]);
        setCommentText('');
    };

    const handleUserPress = () => {
        // 스토리 상세 화면으로 이동
        navigation.navigate('UserStory', {
            userId: post.user, // Using username as ID for mock
            userName: post.user,
            userAvatar: post.avatarEmoji,
        });
    };

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
                            <View style={styles.avatar}>
                                <Text style={styles.avatarEmoji}>{post.avatarEmoji}</Text>
                            </View>
                            <View style={styles.authorDetails}>
                                <Text variant="labelLarge" style={styles.authorName}>
                                    {post.user}
                                </Text>
                                <Text variant="labelSmall" style={styles.postTime}>
                                    {post.time}
                                </Text>
                            </View>
                        </Pressable>
                        <View style={styles.categoryBadge(CATEGORY_COLORS[post.category])}>
                            <Text
                                variant="labelSmall"
                                style={styles.categoryText(CATEGORY_COLORS[post.category])}
                            >
                                {post.category}
                            </Text>
                        </View>
                    </View>

                    <Text variant="bodyMedium" style={styles.postContent}>
                        {post.content}
                    </Text>

                    <View style={styles.actions}>
                        <Pressable style={styles.actionButton} onPress={handleLikePress}>
                            <Text>{liked ? '❤️' : '🤍'}</Text>
                            <Text
                                variant="labelMedium"
                                style={[styles.actionText, liked && styles.actionTextActive]}
                            >
                                {likeCount}
                            </Text>
                        </Pressable>
                        <View style={styles.actionButton}>
                            <Text>💬</Text>
                            <Text variant="labelMedium" style={styles.actionText}>
                                {comments.length}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Comments Section */}
                <View style={styles.commentsSection}>
                    <Text variant="h3" style={styles.commentsHeader}>
                        댓글 {comments.length}
                    </Text>
                    {comments.length === 0 ? (
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
                <Pressable style={styles.submitButton} onPress={handleSubmitComment}>
                    <Text style={styles.submitButtonText}>등록</Text>
                </Pressable>
            </View>
        </ScreenLayout>
    );
};
