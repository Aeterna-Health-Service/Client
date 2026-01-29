import React, { useState } from 'react';
import { View, TextInput, Pressable, Image, Alert, ScrollView } from 'react-native';
import { Text, ScreenLayout } from '../../components';
import { styles } from './AddStoryScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type AddStoryScreenProps = ProfileStackScreenProps<'AddStory'>;

/**
 * 새 스토리 추가 화면
 * 이미지 선택 + 캡션 입력
 * @author 김동현
 */
export const AddStoryScreen = ({ navigation }: AddStoryScreenProps) => {
    const [caption, setCaption] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSelectImage = () => {
        // TODO: 실제 구현 시 이미지 피커 라이브러리 사용
        // 임시로 placeholder 이미지 설정
        setImageUri('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800');
        Alert.alert('이미지 선택', '갤러리에서 이미지를 선택합니다. (데모)');
    };

    const handleSave = () => {
        if (!imageUri) {
            Alert.alert('알림', '이미지를 선택해주세요.');
            return;
        }
        // TODO: 스토리 저장 로직
        Alert.alert('스토리 저장', '새 스토리가 추가되었습니다!', [
            { text: '확인', onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <ScreenLayout style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={handleGoBack} style={styles.headerButton}>
                    <Text style={styles.cancelText}>취소</Text>
                </Pressable>
                <Text variant="h2" style={styles.headerTitle}>
                    새 스토리
                </Text>
                <Pressable onPress={handleSave} style={styles.headerButton}>
                    <Text style={styles.saveText}>저장</Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Image Selection */}
                <Pressable style={styles.imageContainer} onPress={handleSelectImage}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri || undefined }} style={styles.selectedImage} />
                    ) : (
                        <View style={styles.imagePlaceholder}>
                            <Text style={styles.imagePlaceholderIcon}>📷</Text>
                            <Text style={styles.imagePlaceholderText}>
                                탭하여 이미지 선택
                            </Text>
                        </View>
                    )}
                </Pressable>

                {/* Caption Input */}
                <View style={styles.captionContainer}>
                    <TextInput
                        style={styles.captionInput}
                        placeholder="캡션을 입력하세요... (선택사항)"
                        placeholderTextColor="#999"
                        value={caption}
                        onChangeText={setCaption}
                        multiline
                        maxLength={200}
                    />
                    <Text style={styles.charCount}>{caption.length}/200</Text>
                </View>
            </ScrollView>
        </ScreenLayout>
    );
};
