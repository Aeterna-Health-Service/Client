import React from 'react';
import { ScrollView } from 'react-native';
import { StoryHero, ActionButtons, StoryGrid, type TStory } from '.';
import { styles } from './StoryTabContent.styles';

type TUser = {
    name: string;
    avatarEmoji?: string;
    avatarImageUrl?: string;
};

type StoryTabContentProps = {
    user: TUser;
    stories: TStory[];
    isMyProfile?: boolean;
    isEditMode?: boolean;
    onPostPress?: () => void;
    onNewStoryPress?: () => void;
    onDeleteStory?: (storyId: string) => void;
    onStoryPress?: (story: TStory) => void;
    // Follow functionality
    isFollowing?: boolean;
    onFollowPress?: () => void;
};

/**
 * 스토리 탭/화면 공통 컨텐츠
 * @author 김동현
 */
export const StoryTabContent = ({
    user,
    stories,
    isMyProfile = false,
    isEditMode = false,
    onPostPress,
    onNewStoryPress,
    onDeleteStory,
    onStoryPress,
    isFollowing,
    onFollowPress,
}: StoryTabContentProps) => {
    return (
        <ScrollView style={styles.scrollView} bounces={false}>
            {/* Story Hero Section */}
            <StoryHero
                userName={user.name}
                avatarEmoji={user.avatarEmoji}
                avatarImageUrl={user.avatarImageUrl}
                showFollowButton={!isMyProfile}
                isFollowing={isFollowing}
                onFollowPress={onFollowPress}
            />

            {/* Action Buttons - Only for My Profile */}
            {isMyProfile && (
                <ActionButtons
                    onPostPress={onPostPress}
                    onNewStoryPress={onNewStoryPress}
                />
            )}

            {/* Story Grid */}
            <StoryGrid
                stories={stories}
                isEditMode={isEditMode}
                onDeleteStory={onDeleteStory}
                onStoryPress={onStoryPress}
            />
        </ScrollView>
    );
};

