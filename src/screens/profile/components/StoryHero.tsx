import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './StoryHero.styles';

type StoryHeroProps = {
    userName: string;
    avatarEmoji?: string;
    avatarImageUrl?: string;
    showFollowButton?: boolean;
    isFollowing?: boolean;
    onFollowPress?: () => void;
};

/**
 * 스토리 히어로 섹션 컴포넌트
 * 메인 아바타 이미지 + 사용자 정보 오버레이
 * 회색 배경에 아바타 전신이 표시됨
 * @author 김동현
 */
export const StoryHero = ({
    userName,
    avatarEmoji = '🧙‍♂️',
    avatarImageUrl,
    showFollowButton = false,
    isFollowing = false,
    onFollowPress,
}: StoryHeroProps) => {
    return (
        <View style={styles.heroSection}>
            <View style={styles.heroImage}>
                {/* Full Body Avatar Frame */}
                <View style={styles.avatarFrameContainer}>
                    <View style={styles.avatarFrame}>
                        {avatarImageUrl ? (
                            <Image
                                source={{ uri: avatarImageUrl }}
                                style={styles.avatarFullBody}
                                resizeMode="contain"
                            />
                        ) : (
                            <Text style={styles.avatarPlaceholderEmoji}>{avatarEmoji}</Text>
                        )}
                    </View>
                </View>

                {/* Bottom User Info Overlay */}
                <View style={styles.userInfoOverlay}>
                    {/* <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarEmoji}>{avatarEmoji}</Text>
                        </View>
                    </View> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text variant="h2" style={styles.userName}>
                            {userName}
                        </Text>

                        {showFollowButton && (
                            <Pressable
                                onPress={onFollowPress}
                                style={[
                                    styles.followButton,
                                    isFollowing && styles.followingButton
                                ]}
                            >
                                <Text style={[
                                    styles.followButtonText,
                                    isFollowing && styles.followingButtonText
                                ]}>
                                    {isFollowing ? '팔로잉' : '팔로우'}
                                </Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};
