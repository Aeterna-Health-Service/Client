import React from 'react';
import { View, StyleSheet, Pressable, TextInput } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SPACING, RADIUS } from '../../../styles';
import type { TOnboardingData, TGoalType } from '../../../types';

type GoalSettingStepProps = {
    data: TOnboardingData;
    onUpdate: (data: TOnboardingData) => void;
};

type TGoalOption = {
    value: TGoalType;
    emoji: string;
    label: string;
    description: string;
};

const GOAL_OPTIONS: TGoalOption[] = [
    {
        value: 'diet',
        emoji: '🔥',
        label: '다이어트',
        description: '체중 감량, 체지방 감소',
    },
    {
        value: 'maintain',
        emoji: '⚖️',
        label: '유지',
        description: '현재 체형 유지',
    },
    {
        value: 'bulk',
        emoji: '💪',
        label: '벌크업',
        description: '근육량 증가, 체중 증가',
    },
];

/**
 * 온보딩 Step 3: 목표 설정
 * 다이어트 vs 벌크업
 * @author 김동현
 */
export const GoalSettingStep = ({ data, onUpdate }: GoalSettingStepProps) => {
    const handleSelect = (goalType: TGoalType) => {
        onUpdate({ ...data, goalType });
    };

    const handleTargetWeight = (value: string) => {
        const numValue = value ? parseInt(value, 10) : null;
        onUpdate({ ...data, targetWeight: numValue });
    };

    return (
        <View style={styles.container}>
            <Text variant="bodyMedium" style={styles.subtitle}>
                목표에 맞게 일일 칼로리와 영양소 비율이 조정됩니다.
            </Text>

            <View style={styles.optionList}>
                {GOAL_OPTIONS.map((option) => (
                    <Pressable
                        key={option.value}
                        style={[
                            styles.optionCard,
                            data.goalType === option.value && styles.optionSelected,
                        ]}
                        onPress={() => handleSelect(option.value)}
                    >
                        <Text style={styles.emoji}>{option.emoji}</Text>
                        <View style={styles.optionContent}>
                            <Text
                                variant="labelLarge"
                                style={[
                                    styles.optionLabel,
                                    data.goalType === option.value && styles.optionLabelSelected,
                                ]}
                            >
                                {option.label}
                            </Text>
                            <Text variant="bodySmall" style={styles.optionDescription}>
                                {option.description}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </View>

            {/* Target Weight (Optional) */}
            {data.goalType && data.goalType !== 'maintain' && (
                <View style={styles.targetSection}>
                    <Text variant="labelLarge" style={styles.label}>
                        목표 체중 (선택)
                    </Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            value={data.targetWeight?.toString() || ''}
                            onChangeText={handleTargetWeight}
                            keyboardType="numeric"
                            placeholder={data.goalType === 'diet' ? '65' : '75'}
                            placeholderTextColor={COLORS.gray[300]}
                        />
                        <Text variant="bodyMedium" style={styles.unit}>
                            kg
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SPACING.md,
    },
    subtitle: {
        color: COLORS.gray[500],
        marginBottom: SPACING.lg,
    },
    optionList: {
        flexDirection: 'row',
        gap: SPACING.sm,
    },
    optionCard: {
        flex: 1,
        alignItems: 'center',
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
        borderWidth: 2,
        borderColor: COLORS.gray[200],
    },
    optionSelected: {
        borderColor: COLORS.primary[400],
        backgroundColor: COLORS.primary[50],
    },
    emoji: {
        fontSize: 32,
        marginBottom: SPACING.sm,
    },
    optionContent: {
        alignItems: 'center',
    },
    optionLabel: {
        color: COLORS.gray[800],
    },
    optionLabelSelected: {
        color: COLORS.primary[500],
    },
    optionDescription: {
        color: COLORS.gray[500],
        textAlign: 'center',
        marginTop: 4,
    },
    targetSection: {
        marginTop: SPACING.xl,
    },
    label: {
        color: COLORS.gray[700],
        marginBottom: SPACING.sm,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: COLORS.gray[200],
        paddingHorizontal: SPACING.md,
        fontSize: 18,
        color: COLORS.gray[900],
    },
    unit: {
        color: COLORS.gray[500],
        width: 30,
    },
});
