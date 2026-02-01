import React, { useState, useEffect } from 'react';
import { View, Pressable, TextInput, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAtomValue } from 'jotai';
import { Text } from '../../components';
import { userIdAtom, userInfoAtom } from '../../store';
import { useGetUserQuery } from '../../services/user/useUserQuery';
import { useUpdateUserMutation } from '../../services/user/useUserMutation';
import { styles } from './EditGoalScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type EditGoalScreenProps = ProfileStackScreenProps<'EditGoal'>;

/**
 * 목표 수정 화면
 * 사용자의 체중 및 운동 목표를 수정합니다.
 * @author 김동현
 */
export const EditGoalScreen = ({ navigation }: EditGoalScreenProps) => {
    const userId = useAtomValue(userIdAtom);
    const cachedUserInfo = useAtomValue(userInfoAtom);

    // 서버에서 최신 사용자 정보 조회
    const { data: userResponse, isLoading: isLoadingUser } = useGetUserQuery(userId ?? 0);
    const userInfo = userResponse?.data || cachedUserInfo;

    // 수정 API
    const { mutateAsync: updateUser, isPending: isUpdating } = useUpdateUserMutation(userId ?? 0);

    // 폼 상태
    const [currentWeight, setCurrentWeight] = useState('');
    const [targetWeight, setTargetWeight] = useState('');
    const [goalKcal, setGoalKcal] = useState('');

    // 사용자 정보 로드 시 폼 초기화
    useEffect(() => {
        if (userInfo) {
            setCurrentWeight(userInfo.targetWeight?.toString() || '');
            setTargetWeight(userInfo.targetWeight?.toString() || '');
            setGoalKcal(userInfo.goalKcal?.toString() || '');
        }
    }, [userInfo]);

    const handleBack = () => {
        navigation.goBack();
    };

    const handleSave = async () => {
        if (!userId) {
            Alert.alert('오류', '사용자 정보를 찾을 수 없습니다.');
            return;
        }

        try {
            const response = await updateUser({
                weight: currentWeight ? parseFloat(currentWeight) : undefined,
                targetWeight: targetWeight ? parseFloat(targetWeight) : undefined,
                goalKcal: goalKcal ? parseInt(goalKcal, 10) : undefined,
            });

            if (response.success) {
                Alert.alert('저장 완료', '목표가 성공적으로 수정되었습니다.', [
                    { text: '확인', onPress: () => navigation.goBack() },
                ]);
            } else {
                Alert.alert('오류', '저장에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Update error:', error);
            Alert.alert('오류', '저장 중 문제가 발생했습니다.');
        }
    };

    if (isLoadingUser && !cachedUserInfo) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" />
                <Text style={{ marginTop: 16 }}>로딩 중...</Text>
            </SafeAreaView>
        );
    }

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
                        editable={!isUpdating}
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
                        editable={!isUpdating}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>목표 칼로리 (kcal)</Text>
                    <TextInput
                        style={styles.input}
                        value={goalKcal}
                        onChangeText={setGoalKcal}
                        keyboardType="number-pad"
                        placeholder="0"
                        editable={!isUpdating}
                    />
                </View>

                <Pressable
                    onPress={handleSave}
                    style={[styles.saveButton, isUpdating && { opacity: 0.6 }]}
                    disabled={isUpdating}
                >
                    {isUpdating ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.saveButtonText}>저장하기</Text>
                    )}
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};
