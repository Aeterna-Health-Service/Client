import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Button, ScreenLayout } from '../../components';
import { styles } from './ExerciseUploadScreen.styles';
import { COLORS } from '../../styles';

type UploadMode = 'sync' | 'manual';

/**
 * 운동 업로드 화면
 * @author 김동현
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'ExerciseUpload'>;

// ... imports

/**
 * 운동 업로드 화면
 * @author 김동현
 */
export const ExerciseUploadScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    const { mode: initialMode, date: dateParam, initialData } = route.params || {};

    // Date Formatting
    const dateObj = dateParam ? new Date(dateParam) : new Date();
    const formattedDate = `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;

    const [mode, setMode] = useState<UploadMode>(initialMode || 'sync');
    const [workoutName, setWorkoutName] = useState(initialData?.name || '');
    const [duration, setDuration] = useState(initialData?.duration ? String(initialData.duration) : '');
    const [calories, setCalories] = useState(initialData?.calories ? String(initialData.calories) : '');
    const [syncedWorkouts, setSyncedWorkouts] = useState<any[]>([]);

    const handleSyncWatch = () => {
        // Mock Sync
        Alert.alert('워치 동기화', '워치 데이터를 불러옵니다...', [
            {
                text: '완료 (Mock)',
                onPress: () => {
                    setSyncedWorkouts([
                        { id: 1, name: '오후 러닝', duration: 30, calories: 250, time: '14:30' },
                        { id: 2, name: '걷기', duration: 15, calories: 80, time: '18:20' },
                    ]);
                },
            },
        ]);
    };

    const handleSubmit = () => {
        if (mode === 'manual') {
            if (!workoutName || !duration || !calories) {
                Alert.alert('알림', '운동 이름, 시간, 칼로리를 모두 입력해주세요.');
                return;
            }
        } else {
            if (syncedWorkouts.length === 0) {
                Alert.alert('알림', '동기화된 데이터가 없습니다.');
                return;
            }
        }

        // TODO: Save logic here
        console.log('Saving workout entry:', {
            mode,
            workoutName,
            duration,
            calories,
            syncedWorkouts,
        });

        Alert.alert('저장 완료', '운동 기록이 저장되었습니다.', [
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
                    <Text variant="h3">운동 기록</Text>
                    <Text variant="bodySmall" style={{ color: COLORS.gray[500] }}>
                        {formattedDate}
                    </Text>
                </View>
            </View>

            {/* Mode Tabs */}
            <View style={styles.tabContainer}>
                <Pressable
                    style={[styles.tabButton, mode === 'sync' && styles.activeTabButton]}
                    onPress={() => setMode('sync')}
                >
                    <Text style={[styles.tabText, mode === 'sync' && styles.activeTabText]}>
                        워치 연동
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
                {mode === 'sync' ? (
                    <View style={styles.formSection}>
                        <View style={styles.syncSection}>
                            <Text style={styles.watchIcon}>⌚</Text>
                            <Text style={styles.syncTitle}>워치 데이터 가져오기</Text>
                            <Text style={styles.syncDesc}>
                                연결된 워치에서{'\n'}오늘의 운동 기록을 가져옵니다.
                            </Text>
                            <Button
                                variant="secondary"
                                style={styles.syncButton}
                                onPress={handleSyncWatch}
                            >
                                동기화 하기
                            </Button>
                        </View>

                        {/* Synced List */}
                        {syncedWorkouts.length > 0 && (
                            <View style={styles.workoutList}>
                                <Text style={styles.label}>가져온 기록</Text>
                                {syncedWorkouts.map((workout) => (
                                    <View key={workout.id} style={styles.workoutItem}>
                                        <Text style={styles.workoutIcon}>🏃</Text>
                                        <View style={styles.workoutInfo}>
                                            <Text style={styles.workoutName}>{workout.name}</Text>
                                            <Text style={styles.workoutDetail}>{workout.time}</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={styles.workoutValue}>{workout.duration}분</Text>
                                            <Text style={styles.workoutDetail}>{workout.calories}kcal</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ) : (
                    <View style={styles.formSection}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>운동 이름</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="예: 러닝, 벤치프레스"
                                placeholderTextColor={COLORS.gray[400]}
                                value={workoutName}
                                onChangeText={setWorkoutName}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>운동 시간 (분)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor={COLORS.gray[400]}
                                keyboardType="numeric"
                                value={duration}
                                onChangeText={setDuration}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>소모 칼로리 (kcal)</Text>
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
                                placeholder="운동에 대한 메모를 남겨주세요"
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
