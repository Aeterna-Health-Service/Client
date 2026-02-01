import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from '../../../components';
import { useGetUserQuery } from '../../../services/user/useUserQuery';
import { COLORS } from '../../../styles';

type UserAvatarProps = {
    userId: number;
    size?: 'small' | 'medium' | 'large';
    fallbackEmoji?: string;
};

const SIZE_MAP = {
    small: 28,
    medium: 36,
    large: 48,
};

const FONT_SIZE_MAP = {
    small: 14,
    medium: 18,
    large: 24,
};

/**
 * 사용자 아바타 컴포넌트
 * userId로 사용자 정보를 조회하여 프로필 이미지를 표시합니다.
 * @author 김동현
 */
export const UserAvatar = ({ userId, size = 'medium', fallbackEmoji = '👤' }: UserAvatarProps) => {
    const { data } = useGetUserQuery(userId);

    const avatarSize = SIZE_MAP[size];
    const fontSize = FONT_SIZE_MAP[size];

    const user = data?.success ? data.data : null;
    const profileImageUrl = user?.profileImageUrl;

    return (
        <View style={[styles.container, { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 }]}>
            {profileImageUrl ? (
                <Image
                    source={{ uri: profileImageUrl }}
                    style={[styles.image, { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 }]}
                />
            ) : (
                <Text style={[styles.emoji, { fontSize }]}>{fallbackEmoji}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray[100],
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        resizeMode: 'cover',
    },
    emoji: {
        textAlign: 'center',
    },
});
