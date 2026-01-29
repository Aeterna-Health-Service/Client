import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './ActionButtons.styles';

type ActionButtonsProps = {
    onPostPress?: () => void;
    onNewStoryPress?: () => void;
};

/**
 * 액션 버튼 컴포넌트 (내가 작성한 게시글, 새 스토리)
 * @author 김동현
 */
export const ActionButtons = ({ onPostPress, onNewStoryPress }: ActionButtonsProps) => {
    return (
        <View style={styles.actionRow}>
            <Pressable style={styles.actionButton} onPress={onPostPress}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text variant="labelMedium" style={styles.actionText}>
                    내가 작성한 게시글
                </Text>
            </Pressable>
            <View style={styles.divider} />
            <Pressable style={styles.actionButton} onPress={onNewStoryPress}>
                <Text style={styles.actionIcon}>➕</Text>
                <Text variant="labelMedium" style={styles.actionText}>
                    새 스토리
                </Text>
            </Pressable>
        </View>
    );
};
