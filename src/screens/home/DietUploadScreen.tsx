import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Button, ScreenLayout } from '../../components';
import { styles } from './DietUploadScreen.styles';
import { COLORS } from '../../styles';

type UploadMode = 'photo' | 'manual';
type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

const MEAL_TYPES: { id: MealType; label: string }[] = [
    { id: 'breakfast', label: '아침' },
    { id: 'lunch', label: '점심' },
    { id: 'dinner', label: '저녁' },
    { id: 'snack', label: '간식' },
];

/**
 * 식단 업로드 화면
 * @author 김동현
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'DietUpload'>;

// ... imports

/**
 * 식단 업로드 화면
 * @author 김동현
 */
export const DietUploadScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    const { mode: initialMode, date: dateParam, initialData } = route.params || {};

    // Date Formatting
    const dateObj = dateParam ? new Date(dateParam) : new Date();
    const formattedDate = `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;

    const [mode, setMode] = useState<UploadMode>(initialMode || 'photo');
    const [selectedMealType, setSelectedMealType] = useState<MealType>((initialData?.type as MealType) || 'breakfast');
    const [foodName, setFoodName] = useState(initialData?.foods?.join(', ') || '');
    const [calories, setCalories] = useState(initialData?.calories ? String(initialData.calories) : '');
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const handleTakePhoto = () => {
        // Mock Camera
        Alert.alert('카메라 열기', '카메라 기능이 실행됩니다.', [
            {
                text: '찰칵 (Mock)',
                onPress: () => setPhotoUri('https://via.placeholder.com/300'),
            },
        ]);
    };

    const handlePickImage = () => {
        // Mock Gallery
        Alert.alert('갤러리 열기', '갤러리가 행됩니다.', [
            {
                text: '선택 (Mock)',
                onPress: () => setPhotoUri('https://via.placeholder.com/300'),
            },
        ]);
    };

    const handleSubmit = () => {
        if (mode === 'manual') {
            if (!foodName || !calories) {
                Alert.alert('알림', '음식 이름과 칼로리를 입력해주세요.');
                return;
            }
        } else {
            if (!photoUri) {
                Alert.alert('알림', '사진을 촬영하거나 선택해주세요.');
                return;
            }
        }

        // TODO: Save logic here
        console.log('Saving diet entry:', {
            mode,
            mealType: selectedMealType,
            foodName,
            calories,
            photoUri,
        });

        Alert.alert('저장 완료', '식단이 저장되었습니다.', [
            { text: '확인', onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <ScreenLayout style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </Pressable>
                <View style={{ flex: 1 }}>
                    <Text variant="h3">식단 기록</Text>
                    <Text variant="bodySmall" style={{ color: COLORS.gray[500] }}>
                        {formattedDate}
                    </Text>
                </View>
            </View>

            {/* Mode Tabs */}
            <View style={styles.tabContainer}>
                <Pressable
                    style={[styles.tabButton, mode === 'photo' && styles.activeTabButton]}
                    onPress={() => setMode('photo')}
                >
                    <Text style={[styles.tabText, mode === 'photo' && styles.activeTabText]}>
                        AI 촬영
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.tabButton, mode === 'manual' && styles.activeTabButton]}
                    onPress={() => setMode('manual')}
                >
                    <Text style={[styles.tabText, mode === 'manual' && styles.activeTabText]}>
                        직접 입력
                    </Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Meal Type Selector */}
                <View style={styles.formSection}>
                    <Text style={styles.label}>식사 구분</Text>
                    <View style={styles.chipContainer}>
                        {MEAL_TYPES.map((type) => (
                            <Pressable
                                key={type.id}
                                style={[
                                    styles.chip,
                                    selectedMealType === type.id && styles.activeChip,
                                ]}
                                onPress={() => setSelectedMealType(type.id)}
                            >
                                <Text
                                    style={[
                                        styles.chipText,
                                        selectedMealType === type.id && styles.activeChipText,
                                    ]}
                                >
                                    {type.label}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                {mode === 'photo' ? (
                    <View style={styles.photoSection}>
                        {photoUri ? (
                            <View style={styles.photoPlaceholder}>
                                <Image source={{ uri: photoUri || undefined }} style={styles.previewImage} resizeMode="cover" />
                            </View>
                        ) : (
                            <View style={styles.photoPlaceholder}>
                                <Text style={styles.photoIcon}>📷</Text>
                                <Text style={styles.photoText}>음식 사진을 올려주세요</Text>
                            </View>
                        )}

                        <View style={styles.buttonRow}>
                            <Button variant="secondary" onPress={handlePickImage}>
                                갤러리
                            </Button>
                            <Button variant="primary" onPress={handleTakePhoto}>
                                촬영하기
                            </Button>
                        </View>
                    </View>
                ) : (
                    <View style={styles.formSection}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>음식 이름</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="예: 닭가슴살 샐러드"
                                placeholderTextColor={COLORS.gray[400]}
                                value={foodName}
                                onChangeText={setFoodName}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>칼로리 (kcal)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor={COLORS.gray[400]}
                                keyboardType="numeric"
                                value={calories}
                                onChangeText={setCalories}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>메모 (선택)</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="식사에 대한 메모를 남겨주세요"
                                placeholderTextColor={COLORS.gray[400]}
                                multiline
                                numberOfLines={4}
                            />
                        </View>
                    </View>
                )}

                <Button
                    variant="primary"
                    size="large"
                    style={styles.submitButton}
                    onPress={handleSubmit}
                >
                    저장하기
                </Button>
            </ScrollView>
        </ScreenLayout>
    );
};
