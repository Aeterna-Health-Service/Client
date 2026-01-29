import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './FloatingButton.styles';

type FloatingButtonProps = {
    onPress: () => void;
};

/**
 * 플로팅 액션 버튼 (새 글 작성용)
 * @author 김동현
 */
export const FloatingButton = ({ onPress }: FloatingButtonProps) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>✏️</Text>
            </Pressable>
        </View>
    );
};
