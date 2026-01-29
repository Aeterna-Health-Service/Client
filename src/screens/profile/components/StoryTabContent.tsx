import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { StoryHero, ActionButtons, StoryGrid, type TStory } from '.';
import { styles as profileStyles } from '../ProfileScreen.styles';

// Note: storing styles here for now, or importing from ProfileScreen.styles if compatible
// Ideally ProfileScreen.styles should be split too, but for now we'll reuse or duplicate the container styles needed.

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
}: StoryTabContentProps) => {
    return (
        <ScrollView style={styles.scrollView} bounces={false}>
            {/* Story Hero Section */}
            <StoryHero
                userName={user.name}
                avatarEmoji={user.avatarEmoji}
                avatarImageUrl={user.avatarImageUrl}
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

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Or inherit from theme
    }
});
