import React from 'react';
import { View, StyleSheet, Pressable, TextInput } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SPACING, RADIUS } from '../../../styles';
import type { TOnboardingData, TGender } from '../../../types';

type BasicInfoStepProps = {
    data: TOnboardingData;
    onUpdate: (data: TOnboardingData) => void;
};

/**
 * 온보딩 Step 1: 기본 정보
 * 성별, 나이, 키, 몸무게 입력
 * @author 김동현
 */
export const BasicInfoStep = ({ data, onUpdate }: BasicInfoStepProps) => {
    const handleGenderSelect = (gender: TGender) => {
        onUpdate({ ...data, gender });
    };

    const handleInputChange = (field: keyof TOnboardingData, value: string) => {
        const numValue = value ? parseInt(value, 10) : null;
        onUpdate({ ...data, [field]: numValue });
    };

    return (
        <View style={styles.container}>
            {/* Gender Selection */}
            <View style={styles.section}>
                <Text variant="labelLarge" style={styles.label}>
                    성별
                </Text>
                <View style={styles.genderRow}>
                    <Pressable
                        style={[styles.genderButton, data.gender === 'male' && styles.genderSelected]}
                        onPress={() => handleGenderSelect('male')}
                    >
                        <Text style={styles.genderEmoji}>👨</Text>
                        <Text
                            variant="labelMedium"
                            style={[styles.genderText, data.gender === 'male' && styles.genderTextSelected]}
                        >
                            남성
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[styles.genderButton, data.gender === 'female' && styles.genderSelected]}
                        onPress={() => handleGenderSelect('female')}
                    >
                        <Text style={styles.genderEmoji}>👩</Text>
                        <Text
                            variant="labelMedium"
                            style={[styles.genderText, data.gender === 'female' && styles.genderTextSelected]}
                        >
                            여성
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* Age Input */}
            <View style={styles.section}>
                <Text variant="labelLarge" style={styles.label}>
                    나이
                </Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={data.age?.toString() || ''}
                        onChangeText={(v) => handleInputChange('age', v)}
                        keyboardType="numeric"
                        placeholder="25"
                        placeholderTextColor={COLORS.gray[300]}
                    />
                    <Text variant="bodyMedium" style={styles.unit}>
                        세
                    </Text>
                </View>
            </View>

            {/* Height Input */}
            <View style={styles.section}>
                <Text variant="labelLarge" style={styles.label}>
                    키
                </Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={data.height?.toString() || ''}
                        onChangeText={(v) => handleInputChange('height', v)}
                        keyboardType="numeric"
                        placeholder="175"
                        placeholderTextColor={COLORS.gray[300]}
                    />
                    <Text variant="bodyMedium" style={styles.unit}>
                        cm
                    </Text>
                </View>
            </View>

            {/* Weight Input */}
            <View style={styles.section}>
                <Text variant="labelLarge" style={styles.label}>
                    몸무게
                </Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={data.weight?.toString() || ''}
                        onChangeText={(v) => handleInputChange('weight', v)}
                        keyboardType="numeric"
                        placeholder="70"
                        placeholderTextColor={COLORS.gray[300]}
                    />
                    <Text variant="bodyMedium" style={styles.unit}>
                        kg
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SPACING.md,
    },
    section: {
        marginBottom: SPACING.lg,
    },
    label: {
        color: COLORS.gray[700],
        marginBottom: SPACING.sm,
    },
    genderRow: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    genderButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: SPACING.lg,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
        borderWidth: 2,
        borderColor: COLORS.gray[200],
    },
    genderSelected: {
        borderColor: COLORS.primary[400],
        backgroundColor: COLORS.primary[50],
    },
    genderEmoji: {
        fontSize: 32,
        marginBottom: SPACING.xs,
    },
    genderText: {
        color: COLORS.gray[600],
    },
    genderTextSelected: {
        color: COLORS.primary[500],
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
