import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { Text, Button } from '../../../components';
import { DateSelector } from './DateSelector';
import { styles } from './ExerciseSection.styles';
import type { Workout, Routine } from '../types';

export interface ExerciseSectionProps {
    workouts: Workout[];
    routines: Routine[];
    date: Date;
    onDateChange: (date: Date) => void;
    onSyncWatch: () => void;
    onManualInput: () => void;
    onStartRoutine: (id: string) => void;
    onWorkoutPress: (workout: Workout) => void;
    pageHeight: number;
}

/**
 * 운동 섹션 컴포넌트
 * 일일 요약, 운동 목록, 루틴, 워치 동기화 기능을 표시합니다.
 * @author 김동현
 */
export const ExerciseSection = ({
    workouts,
    routines,
    date,
    onDateChange,
    onSyncWatch,
    onManualInput,
    onStartRoutine,
    onWorkoutPress,
    pageHeight,
}: ExerciseSectionProps) => {
    // 총 운동 통계 계산
    const totalDuration = workouts.reduce((sum, w) => sum + w.duration, 0);
    const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);
    const totalXp = workouts.reduce((sum, w) => sum + w.xp, 0);

    return (
        <View style={[styles.section, { height: pageHeight }]}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <View style={styles.sectionHeader}>
                    <Text variant="h1">운동 기록</Text>
                    <Pressable style={styles.syncButton} onPress={onSyncWatch}>
                        <Text style={styles.syncIcon}>⌚</Text>
                        <Text variant="labelSmall" style={styles.syncText}>
                            동기화
                        </Text>
                    </Pressable>
                </View>
                <DateSelector date={date} onDateChange={onDateChange} />

                {/* Today Summary */}
                <View style={styles.exerciseSummaryCard}>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryItem}>
                            <Text variant="displaySmall" style={styles.exerciseSummaryValue}>
                                {totalDuration}
                            </Text>
                            <Text variant="labelSmall" style={styles.exerciseSummaryLabel}>
                                분
                            </Text>
                        </View>
                        <View style={styles.summaryItem}>
                            <Text variant="displaySmall" style={styles.exerciseSummaryValue}>
                                {totalCalories}
                            </Text>
                            <Text variant="labelSmall" style={styles.exerciseSummaryLabel}>
                                kcal
                            </Text>
                        </View>
                        <View style={styles.summaryItem}>
                            <Text variant="displaySmall" style={styles.exerciseSummaryValue}>
                                +{totalXp}
                            </Text>
                            <Text variant="labelSmall" style={styles.exerciseSummaryLabel}>
                                XP
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Today's Workouts */}
                <View style={styles.exerciseSection}>
                    <Text variant="h3" style={styles.sectionTitle}>
                        오늘의 운동
                    </Text>

                    {workouts.length > 0 ? (
                        workouts.map((workout) => (
                            <Pressable
                                key={workout.id}
                                style={styles.workoutCard}
                                onPress={() => onWorkoutPress(workout)}
                            >
                                <View style={styles.workoutHeader}>
                                    <View style={styles.workoutInfo}>
                                        <Text variant="labelLarge">{workout.name}</Text>
                                        {workout.isFromWatch ? (
                                            <View style={styles.watchBadge}>
                                                <Text variant="labelSmall" style={styles.watchBadgeText}>
                                                    ⌚ 워치
                                                </Text>
                                            </View>
                                        ) : null}
                                    </View>
                                    <Text variant="labelSmall" style={styles.workoutTime}>
                                        {workout.time}
                                    </Text>
                                </View>
                                <View style={styles.workoutStats}>
                                    <Text variant="bodySmall" style={styles.workoutStat}>
                                        ⏱️ {workout.duration}분
                                    </Text>
                                    <Text variant="bodySmall" style={styles.workoutStat}>
                                        🔥 {workout.calories} kcal
                                    </Text>
                                    <Text variant="bodySmall" style={styles.xpStat}>
                                        ⭐ +{workout.xp} XP
                                    </Text>
                                </View>
                            </Pressable>
                        ))
                    ) : (
                        <View style={styles.emptyCard}>
                            <Text variant="bodyMedium" style={styles.emptyText}>
                                아직 운동 기록이 없어요
                            </Text>
                        </View>
                    )}

                    <Button variant="primary" size="fullWidth" onPress={onManualInput}>
                        ➕ 운동 직접 추가하기
                    </Button>
                </View>

                {/* Routine Presets */}
                <View style={styles.exerciseSection}>
                    <Text variant="h3" style={styles.sectionTitle}>
                        운동 루틴
                    </Text>

                    <View style={styles.routineGrid}>
                        {routines.map((routine) => (
                            <Pressable
                                key={routine.id}
                                style={styles.routineCard}
                                onPress={() => onStartRoutine(routine.id)}
                            >
                                <Text style={styles.routineEmoji}>{routine.emoji}</Text>
                                <Text variant="labelMedium">{routine.name}</Text>
                                <Text variant="labelSmall" style={styles.routineInfo}>
                                    {routine.duration} · {routine.exercises}개
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
