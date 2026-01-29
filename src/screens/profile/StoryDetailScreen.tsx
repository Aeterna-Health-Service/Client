import React from 'react';
import { View, Image, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { styles } from './StoryDetailScreen.styles';
import type { RootStackScreenProps } from '../../navigation/types';

export type StoryDetailScreenProps = RootStackScreenProps<'StoryDetail'>;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * 스토리 상세 보기 화면
 * 전체 화면으로 스토리 이미지 표시
 * @author 김동현
 */
export const StoryDetailScreen = ({ navigation, route }: StoryDetailScreenProps) => {
    const { imageUrl } = route.params;

    const handleClose = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <SafeAreaView style={styles.overlay}>
                <View style={styles.header}>
                    <Pressable onPress={handleClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>✕</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    );
};
