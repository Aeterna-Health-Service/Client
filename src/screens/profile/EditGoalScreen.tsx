import React, { useState } from 'react';
import { View, Pressable, TextInput, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { styles } from './EditGoalScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type EditGoalScreenProps = ProfileStackScreenProps<'EditGoal'>;

/**
 * 목표 수정 화면
 * 사용자의 체중 및 운동 목표를 수정합니다.
 * @author 김동현
 */
export const EditGoalScreen = ({ navigation }: EditGoalScreenProps) => {
    const [currentWeight, setCurrentWeight] = useState('75.5');
    const [targetWeight, setTargetWeight] = useState('70.0');
    const [weeklyGoal, setWeeklyGoal] = useState('3');

    const handleBack = () => {
        navigation.goBack();
    };

    const handleSave = () => {
        // TODO: API 연동
        Alert.alert('저장 완료', '목표가 성공적으로 수정되었습니다.', [
            { text: '확인', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </Pressable>
                <Text variant="h2">목표 수정</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>현재 체중 (kg)</Text>
                    <TextInput
                        style={styles.input}
                        value={currentWeight}
                        onChangeText={setCurrentWeight}
                        keyboardType="numeric"
                        placeholder="0.0"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>목표 체중 (kg)</Text>
                    <TextInput
                        style={styles.input}
                        value={targetWeight}
                        onChangeText={setTargetWeight}
                        keyboardType="numeric"
                        placeholder="0.0"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>주간 운동 목표 (회)</Text>
                    <TextInput
                        style={styles.input}
                        value={weeklyGoal}
                        onChangeText={setWeeklyGoal}
                        keyboardType="number-pad"
                        placeholder="0"
                    />
                </View>

                <Pressable onPress={handleSave} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>저장하기</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};
