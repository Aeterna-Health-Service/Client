import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { Text } from '../../../components';
import { DateSelector } from './DateSelector';
import { styles } from './DietSection.styles';
import type { Meal } from '../types';

export interface DietSectionProps {
    meals: Meal[];
    date: Date;
    onDateChange: (date: Date) => void;
    onAICamera: () => void;
    onManualInput: () => void;
    onMealPress: (meal: Meal) => void;
    pageHeight: number;
}

/**
 * 식단 섹션 컴포넌트
 * 일일 요약, 식사 목록, AI 카메라 버튼을 표시합니다.
 * @author 김동현
 */
export const DietSection = ({
    meals,
    date,
    onDateChange,
    onAICamera,
    onManualInput,
    onMealPress,
    pageHeight,
}: DietSectionProps) => {
    // 총 섭취 칼로리 계산
    const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
    const targetCalories = 2000;
    const remainingCalories = targetCalories - totalCalories;

    return (
        <View style={[styles.section, { height: pageHeight }]}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <View style={styles.sectionHeader}>
                    <Text variant="h1">식단 기록</Text>
                    <DateSelector date={date} onDateChange={onDateChange} />
                </View>

                {/* Daily Summary */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryItem}>
                            <Text variant="displaySmall" style={styles.summaryValue}>
                                {totalCalories}
                            </Text>
                            <Text variant="labelSmall" style={styles.summaryLabel}>
                                섭취 kcal
                            </Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryItem}>
                            <Text variant="displaySmall" style={styles.summaryValue}>
                                {remainingCalories.toLocaleString()}
                            </Text>
                            <Text variant="labelSmall" style={styles.summaryLabel}>
                                남은 kcal
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Meal List */}
                <View style={styles.mealSection}>
                    <Text variant="h3" style={styles.sectionTitle}>
                        오늘의 식사
                    </Text>

                    {meals.map((meal) => (
                        <Pressable
                            key={meal.id}
                            style={styles.mealCard}
                            onPress={() => onMealPress(meal)}
                        >
                            <View style={styles.mealHeader}>
                                <View style={styles.mealTypeContainer}>
                                    <Text variant="labelLarge">{meal.label}</Text>
                                    <Text variant="labelSmall" style={styles.mealTime}>
                                        {meal.time}
                                    </Text>
                                </View>
                                <Text variant="labelLarge" style={styles.mealCalories}>
                                    {meal.calories} kcal
                                </Text>
                            </View>
                            <Text variant="bodySmall" style={styles.mealFoods}>
                                {meal.foods.join(', ')}
                            </Text>
                        </Pressable>
                    ))}

                    {/* Empty Meal Slots */}
                    <Pressable style={[styles.mealCard, styles.emptyMeal]}>
                        <Text variant="labelMedium" style={styles.emptyLabel}>
                            🍽️ 저녁 추가하기
                        </Text>
                    </Pressable>

                    <Pressable style={[styles.mealCard, styles.emptyMeal]}>
                        <Text variant="labelMedium" style={styles.emptyLabel}>
                            🍿 간식 추가하기
                        </Text>
                    </Pressable>
                </View>

                {/* AI Camera Buttons */}
                <View style={styles.fabRow}>
                    <Pressable style={styles.fabSecondary} onPress={onManualInput}>
                        <Text style={styles.fabIcon}>✏️</Text>
                    </Pressable>
                    <Pressable style={styles.fabPrimary} onPress={onAICamera}>
                        <Text style={styles.fabIcon}>📷</Text>
                        <Text variant="labelMedium" style={styles.fabText}>
                            AI 촬영
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};
