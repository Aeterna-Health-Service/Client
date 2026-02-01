import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './PostCard.styles';
import { type TCategory, CATEGORY_COLORS } from './CategoryTabs';
import { UserAvatar } from './UserAvatar';

export type TPost = {
    id: string;
    userId: number;
    user: string;
    avatarEmoji?: string;
    type: string;
    category: TCategory;
    content: string;
    likes: number;
    comments: number;
    userLiked: boolean;
    time: string;
};

type PostCardProps = {
    post: TPost;
    onPress?: () => void;
    onUserPress?: () => void;
};

/**
 * 소셜 포스트 카드 컴포넌트
 * @author 김동현
 */
export const PostCard = ({ post, onPress, onUserPress }: PostCardProps) => {
    return (
        <Pressable style={styles.postCard} onPress={onPress}>
            <View style={styles.postHeader}>
                <Pressable style={styles.postUserInfo} onPress={onUserPress}>
                    <UserAvatar
                        userId={post.userId}
                        size="medium"
                        fallbackEmoji={post.avatarEmoji || '👤'}
                    />
                    <View style={{ marginLeft: 8 }}>
                        <Text variant="labelMedium">{post.user}</Text>
                        <Text variant="labelSmall" style={styles.postTime}>
                            {post.time}
                        </Text>
                    </View>
                </Pressable>
                <View style={styles.postTypeBadge(CATEGORY_COLORS[post.category])}>
                    <Text
                        variant="labelSmall"
                        style={styles.postTypeText(CATEGORY_COLORS[post.category])}
                    >
                        {post.category === '전체' ? post.type : post.category}
                    </Text>
                </View>
            </View>
            <Text variant="bodyMedium" style={styles.postContent}>
                {post.content}
            </Text>
            <View style={styles.postFooter}>
                <Text variant="labelSmall" style={styles.postLikes}>
                    {post.userLiked ? '❤️' : '🤍'} {post.likes}
                </Text>
                <Text variant="labelSmall" style={styles.postComments}>
                    💬 {post.comments}
                </Text>
            </View>
        </Pressable>
    );
};
