import React from 'react';
import { View, Image, FlatList, Dimensions, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './StoryGrid.styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const GRID_GAP = 2;
const NUM_COLUMNS = 3;
const ITEM_SIZE = (SCREEN_WIDTH - GRID_GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS;

export type TStory = {
    id: string;
    imageUrl: string;
    userId?: string;
    userName?: string;
    userAvatar?: string;
};

type StoryGridProps = {
    stories: TStory[];
    onStoryPress?: (story: TStory) => void;
    isEditMode?: boolean;
    onDeleteStory?: (storyId: string) => void;
};

/**
 * 스토리 그리드 컴포넌트
 * 3열 정사각형 그리드 레이아웃
 * 편집 모드에서 삭제 가능
 * @author 김동현
 */
export const StoryGrid = ({
    stories,
    onStoryPress,
    isEditMode = false,
    onDeleteStory,
}: StoryGridProps) => {
    const handleDeletePress = (storyId: string, e: any) => {
        e.stopPropagation();
        onDeleteStory?.(storyId);
    };

    const renderItem = ({ item }: { item: TStory }) => (
        <Pressable
            style={[styles.gridItem, { width: ITEM_SIZE, height: ITEM_SIZE }]}
            onPress={() => !isEditMode && onStoryPress?.(item)}
        >
            <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
            {(item.userAvatar || item.userName) && (
                <View style={styles.userInfoOverlay}>
                    {item.userAvatar && (
                        <View style={styles.avatarContainer}>
                            <Text style={styles.avatarText}>{item.userAvatar}</Text>
                        </View>
                    )}
                    {item.userName && (
                        <Text style={styles.userNameText} numberOfLines={1}>
                            {item.userName}
                        </Text>
                    )}
                </View>
            )}
            {isEditMode && (
                <Pressable
                    style={styles.deleteButton}
                    onPress={(e) => handleDeletePress(item.id, e)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Text style={styles.deleteButtonText}>✕</Text>
                </Pressable>
            )}
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={NUM_COLUMNS}
                scrollEnabled={false}
                columnWrapperStyle={styles.columnWrapper}
                ItemSeparatorComponent={() => <View style={{ height: GRID_GAP }} />}
            />
        </View>
    );
};
