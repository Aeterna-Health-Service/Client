import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput, Alert, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Button, ScreenLayout } from '../../components';
import { styles } from './DietUploadScreen.styles';
import { COLORS } from '../../styles';
import { useCreateMealLogMutation, useUpdateMealLogMutation } from '../../services/meal/useMealMutation';
import type { TMealType } from '../../services/meal/types';

type UploadMode = 'photo' | 'manual';

const MEAL_TYPES: { id: TMealType; label: string }[] = [
    { id: 'BREAKFAST', label: '아침' },
    { id: 'LUNCH', label: '점심' },
    { id: 'DINNER', label: '저녁' },
    { id: 'SNACK', label: '간식' },
];

/**
 * 식단 업로드 화면
 * @author 김동현
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'DietUpload'>;

/**
 * 식단 업로드 화면
 * @author 김동현
 */
export const DietUploadScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    const { mode: initialMode, date: dateParam, initialData } = route.params || {};

    // TODO: 실제 userId는 인증 상태에서 가져와야 함
    const userId = 1;

    // Date Formatting
    const dateObj = dateParam ? new Date(dateParam) : new Date();
    const formattedDate = `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;
    const apiDateFormat = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;

    const [mode, setMode] = useState<UploadMode>(initialMode || 'photo');
    const [selectedMealType, setSelectedMealType] = useState<TMealType>(
        (initialData?.type?.toUpperCase() as TMealType) || 'BREAKFAST'
    );
    const [foodName, setFoodName] = useState(initialData?.foods?.join(', ') || '');
    const [calories, setCalories] = useState(initialData?.calories ? String(initialData.calories) : '');
    const [carbs, setCarbs] = useState('');
    const [protein, setProtein] = useState('');
    const [fat, setFat] = useState('');
    const [memo, setMemo] = useState('');
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    // API Mutations
    const createMutation = useCreateMealLogMutation(userId);
    const updateMutation = useUpdateMealLogMutation(initialData?.id ? Number(initialData.id) : 0);

    const isEditing = !!initialData?.id;
    const isLoading = createMutation.isPending || updateMutation.isPending;

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
        Alert.alert('갤러리 열기', '갤러리가 실행됩니다.', [
            {
                text: '선택 (Mock)',
                onPress: () => setPhotoUri('https://via.placeholder.com/300'),
            },
        ]);
    };

    const handleSubmit = async () => {
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

        const mealData = {
            name: foodName,
            eatenAt: apiDateFormat,
            mealType: selectedMealType,
            memo: memo || undefined,
            totalKcal: parseInt(calories, 10) || 0,
            totalCarbG: parseInt(carbs, 10) || 0,
            totalProteinG: parseInt(protein, 10) || 0,
            totalFatG: parseInt(fat, 10) || 0,
        };

        try {
            if (isEditing) {
                await updateMutation.mutateAsync(mealData);
                Alert.alert('수정 완료', '식단이 수정되었습니다.', [
                    { text: '확인', onPress: () => navigation.goBack() },
                ]);
            } else {
                await createMutation.mutateAsync(mealData);
                Alert.alert('저장 완료', '식단이 저장되었습니다.', [
                    { text: '확인', onPress: () => navigation.goBack() },
                ]);
            }
        } catch (error) {
            console.error('MealLog save error:', error);
            Alert.alert('오류', '식단 저장에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <ScreenLayout style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </Pressable>
                <View style={{ flex: 1 }}>
                    <Text variant="h3">{isEditing ? '식단 수정' : '식단 기록'}</Text>
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
                            <Text style={styles.label}>탄수화물 (g)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor={COLORS.gray[400]}
                                keyboardType="numeric"
                                value={carbs}
                                onChangeText={setCarbs}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>단백질 (g)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor={COLORS.gray[400]}
                                keyboardType="numeric"
                                value={protein}
                                onChangeText={setProtein}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>지방 (g)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor={COLORS.gray[400]}
                                keyboardType="numeric"
                                value={fat}
                                onChangeText={setFat}
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
                                value={memo}
                                onChangeText={setMemo}
                            />
                        </View>
                    </View>
                )}

                <Button
                    variant="primary"
                    size="large"
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color={COLORS.white} size="small" />
                    ) : (
                        isEditing ? '수정하기' : '저장하기'
                    )}
                </Button>
            </ScrollView>
        </ScreenLayout>
    );
};
