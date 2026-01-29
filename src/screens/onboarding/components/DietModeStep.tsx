import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SPACING, RADIUS } from '../../../styles';
import type { TOnboardingData, TDietMode } from '../../../types';

type DietModeStepProps = {
    data: TOnboardingData;
    onUpdate: (data: TOnboardingData) => void;
};

type TDietModeOption = {
    value: TDietMode;
    emoji: string;
    label: string;
    description: string;
    carbRatio: number;
    proteinRatio: number;
    fatRatio: number;
};

const DIET_MODE_OPTIONS: TDietModeOption[] = [
    {
        value: 'balanced',
        emoji: '⚖️',
        label: '균형 식단',
        description: '일반적인 영양 균형',
        carbRatio: 50,
        proteinRatio: 30,
        fatRatio: 20,
    },
    {
        value: 'protein',
        emoji: '🥩',
        label: '고단백 식단',
        description: '근육 성장에 초점',
        carbRatio: 40,
        proteinRatio: 40,
        fatRatio: 20,
    },
    {
        value: 'keto',
        emoji: '🥑',
        label: '저탄고지 (키토)',
        description: '탄수화물 최소화',
        carbRatio: 10,
        proteinRatio: 25,
        fatRatio: 65,
    },
    {
        value: 'vegan',
        emoji: '🥗',
        label: '비건 식단',
        description: '식물성 단백질 위주',
        carbRatio: 55,
        proteinRatio: 25,
        fatRatio: 20,
    },
];

/**
 * 온보딩 Step 4: 식단 모드 선택
 * 균형/단백/키토/비건
 * @author 김동현
 */
export const DietModeStep = ({ data, onUpdate }: DietModeStepProps) => {
    const handleSelect = (option: TDietModeOption) => {
        onUpdate({
            ...data,
            dietMode: option.value,
            carbRatio: option.carbRatio,
            proteinRatio: option.proteinRatio,
            fatRatio: option.fatRatio,
        });
    };

    const selectedOption = DIET_MODE_OPTIONS.find((o) => o.value === data.dietMode);

    return (
        <View style={styles.container}>
            <Text variant="bodyMedium" style={styles.subtitle}>
                선호하는 식단 스타일을 선택하세요.
            </Text>

            <View style={styles.optionGrid}>
                {DIET_MODE_OPTIONS.map((option) => (
                    <Pressable
                        key={option.value}
                        style={[
                            styles.optionCard,
                            data.dietMode === option.value && styles.optionSelected,
                        ]}
                        onPress={() => handleSelect(option)}
                    >
                        <Text style={styles.emoji}>{option.emoji}</Text>
                        <Text
                            variant="labelMedium"
                            style={[
                                styles.optionLabel,
                                data.dietMode === option.value && styles.optionLabelSelected,
                            ]}
                        >
                            {option.label}
                        </Text>
                        <Text variant="labelSmall" style={styles.optionDescription}>
                            {option.description}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Ratio Preview */}
            {selectedOption && (
                <View style={styles.ratioPreview}>
                    <Text variant="labelLarge" style={styles.ratioTitle}>
                        영양소 비율
                    </Text>
                    <View style={styles.ratioBar}>
                        <View style={[styles.ratioSegment, styles.carbSegment, { flex: selectedOption.carbRatio }]}>
                            <Text variant="labelSmall" style={styles.ratioText}>
                                탄 {selectedOption.carbRatio}%
                            </Text>
                        </View>
                        <View style={[styles.ratioSegment, styles.proteinSegment, { flex: selectedOption.proteinRatio }]}>
                            <Text variant="labelSmall" style={styles.ratioText}>
                                단 {selectedOption.proteinRatio}%
                            </Text>
                        </View>
                        <View style={[styles.ratioSegment, styles.fatSegment, { flex: selectedOption.fatRatio }]}>
                            <Text variant="labelSmall" style={styles.ratioText}>
                                지 {selectedOption.fatRatio}%
                            </Text>
                        </View>
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
    optionGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
    },
    optionCard: {
        width: '48%',
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
        marginBottom: SPACING.xs,
    },
    optionLabel: {
        color: COLORS.gray[800],
        marginBottom: 2,
    },
    optionLabelSelected: {
        color: COLORS.primary[500],
    },
    optionDescription: {
        color: COLORS.gray[500],
        textAlign: 'center',
    },
    ratioPreview: {
        marginTop: SPACING.xl,
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
    },
    ratioTitle: {
        color: COLORS.gray[700],
        marginBottom: SPACING.sm,
    },
    ratioBar: {
        flexDirection: 'row',
        height: 40,
        borderRadius: RADIUS.md,
        overflow: 'hidden',
    },
    ratioSegment: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    carbSegment: {
        backgroundColor: COLORS.info.main,
    },
    proteinSegment: {
        backgroundColor: COLORS.error.main,
    },
    fatSegment: {
        backgroundColor: COLORS.warning.main,
    },
    ratioText: {
        color: COLORS.white,
        fontWeight: '600',
    },
});
