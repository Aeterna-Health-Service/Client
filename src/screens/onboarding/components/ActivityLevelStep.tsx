import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SPACING, RADIUS } from '../../../styles';
import type { TOnboardingData, TActivityLevel } from '../../../types';

type ActivityLevelStepProps = {
    data: TOnboardingData;
    onUpdate: (data: TOnboardingData) => void;
};

type TActivityOption = {
    value: TActivityLevel;
    emoji: string;
    label: string;
    description: string;
    multiplier: number;
};

const ACTIVITY_OPTIONS: TActivityOption[] = [
    {
        value: 'sedentary',
        emoji: '🪑',
        label: '거의 안 움직임',
        description: '데스크 워크, 재택근무',
        multiplier: 1.2,
    },
    {
        value: 'light',
        emoji: '🚶',
        label: '가벼운 활동',
        description: '주 1-2회 가벼운 운동',
        multiplier: 1.375,
    },
    {
        value: 'moderate',
        emoji: '🏃',
        label: '적당한 활동',
        description: '주 3-5회 운동',
        multiplier: 1.55,
    },
    {
        value: 'active',
        emoji: '🏋️',
        label: '매우 활동적',
        description: '매일 운동 또는 육체 노동',
        multiplier: 1.725,
    },
];

/**
 * 온보딩 Step 2: 활동량 설정
 * TDEE 산출 기준
 * @author 김동현
 */
export const ActivityLevelStep = ({ data, onUpdate }: ActivityLevelStepProps) => {
    const handleSelect = (level: TActivityLevel) => {
        onUpdate({ ...data, activityLevel: level });
    };

    return (
        <View style={styles.container}>
            <Text variant="bodyMedium" style={styles.subtitle}>
                평소 활동량에 따라 일일 소비 칼로리가 계산됩니다.
            </Text>

            <View style={styles.optionList}>
                {ACTIVITY_OPTIONS.map((option) => (
                    <Pressable
                        key={option.value}
                        style={[
                            styles.optionCard,
                            data.activityLevel === option.value && styles.optionSelected,
                        ]}
                        onPress={() => handleSelect(option.value)}
                    >
                        <Text style={styles.emoji}>{option.emoji}</Text>
                        <View style={styles.optionContent}>
                            <Text
                                variant="labelLarge"
                                style={[
                                    styles.optionLabel,
                                    data.activityLevel === option.value && styles.optionLabelSelected,
                                ]}
                            >
                                {option.label}
                            </Text>
                            <Text variant="bodySmall" style={styles.optionDescription}>
                                {option.description}
                            </Text>
                        </View>
                        <View style={styles.radioOuter}>
                            {data.activityLevel === option.value && <View style={styles.radioInner} />}
                        </View>
                    </Pressable>
                ))}
            </View>
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
        gap: SPACING.sm,
    },
    optionCard: {
        flexDirection: 'row',
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
        fontSize: 28,
        marginRight: SPACING.md,
    },
    optionContent: {
        flex: 1,
    },
    optionLabel: {
        color: COLORS.gray[800],
    },
    optionLabelSelected: {
        color: COLORS.primary[500],
    },
    optionDescription: {
        color: COLORS.gray[500],
        marginTop: 2,
    },
    radioOuter: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.gray[300],
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.primary[400],
    },
});
