import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components';
import { styles } from './CommentItem.styles';

export type TComment = {
    id: string;
    userName: string;
    avatarEmoji: string;
    content: string;
    time: string;
};

type CommentItemProps = {
    comment: TComment;
};

/**
 * 댓글 아이템 컴포넌트
 * @author 김동현
 */
export const CommentItem = ({ comment }: CommentItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{comment.avatarEmoji}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text variant="labelMedium" style={styles.userName}>
                        {comment.userName}
                    </Text>
                    <Text variant="labelSmall" style={styles.time}>
                        {comment.time}
                    </Text>
                </View>
                <Text variant="bodySmall" style={styles.text}>
                    {comment.content}
                </Text>
            </View>
        </View>
    );
};
