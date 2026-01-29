import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '../../../components';
import { styles } from './AvatarSection.styles';
import type { AvatarStats, DailyProgress } from '../types';

export interface AvatarSectionProps {
    stats: AvatarStats;
    dailyProgress: DailyProgress;
    pageHeight: number;
}

/**
 * 아바타 섹션 컴포넌트
 * 아바타, 스탯 바, 일일 진행 상황을 표시합니다.
 * @author 김동현
 */
export const AvatarSection = ({
    stats,
    dailyProgress,
    pageHeight,
}: AvatarSectionProps) => {
    return (
        <View style={[styles.section, { height: pageHeight }]}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text variant="bodyMedium" style={styles.greeting}>
                            좋은 하루에요! 👋
                        </Text>
                        <Text variant="h1">내 아바타</Text>
                    </View>
                    <View style={styles.levelBadge}>
                        <Text variant="labelSmall" style={styles.levelText}>
                            Lv.{stats.level}
                        </Text>
                    </View>
                </View>

                {/* Avatar Area */}
                <View style={styles.avatarSection}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarEmoji}>🧙‍♂️</Text>
                    </View>

                    {/* XP Bar */}
                    <View style={styles.xpContainer}>
                        <View style={styles.xpBar}>
                            <View
                                style={[
                                    styles.xpFill,
                                    { width: `${(stats.xp / stats.nextLevelXp) * 100}%` },
                                ]}
                            />
                        </View>
                        <Text variant="labelSmall" style={styles.xpText}>
                            {stats.xp} / {stats.nextLevelXp} XP
                        </Text>
                    </View>
                </View>

                {/* Stats Bars */}
                <View style={styles.statsSection}>
                    <Text variant="h3" style={styles.sectionTitle}>
                        스탯
                    </Text>

                    {/* HP (탄수화물) */}
                    <View style={styles.statRow}>
                        <View style={styles.statLabel}>
                            <Text style={styles.statEmoji}>❤️</Text>
                            <Text variant="labelMedium">HP (탄수화물)</Text>
                        </View>
                        <View style={styles.statBarContainer}>
                            <View style={[styles.statBar, styles.hpBar]}>
                                <View style={[styles.statFill, styles.hpFill, { width: `${stats.hp}%` }]} />
                            </View>
                            <Text variant="labelSmall" style={styles.statValue}>{stats.hp}%</Text>
                        </View>
                    </View>

                    {/* MP (단백질) */}
                    <View style={styles.statRow}>
                        <View style={styles.statLabel}>
                            <Text style={styles.statEmoji}>💙</Text>
                            <Text variant="labelMedium">MP (단백질)</Text>
                        </View>
                        <View style={styles.statBarContainer}>
                            <View style={[styles.statBar, styles.mpBar]}>
                                <View style={[styles.statFill, styles.mpFill, { width: `${stats.mp}%` }]} />
                            </View>
                            <Text variant="labelSmall" style={styles.statValue}>{stats.mp}%</Text>
                        </View>
                    </View>

                    {/* Stamina (지방) */}
                    <View style={styles.statRow}>
                        <View style={styles.statLabel}>
                            <Text style={styles.statEmoji}>💛</Text>
                            <Text variant="labelMedium">스태미나 (지방)</Text>
                        </View>
                        <View style={styles.statBarContainer}>
                            <View style={[styles.statBar, styles.staminaBar]}>
                                <View style={[styles.statFill, styles.staminaFill, { width: `${stats.stamina}%` }]} />
                            </View>
                            <Text variant="labelSmall" style={styles.statValue}>{stats.stamina}%</Text>
                        </View>
                    </View>
                </View>

                {/* Daily Progress */}
                <View style={styles.progressSection}>
                    <Text variant="h3" style={styles.sectionTitle}>
                        오늘의 진행
                    </Text>

                    <View style={styles.calorieCard}>
                        <Text variant="displaySmall" style={styles.calorieValue}>
                            {dailyProgress.calories.current}
                        </Text>
                        <Text variant="bodySmall" style={styles.calorieLabel}>
                            / {dailyProgress.calories.target} kcal
                        </Text>
                    </View>

                    <View style={styles.macroRow}>
                        <View style={styles.macroCard}>
                            <Text variant="labelSmall" style={styles.macroLabel}>탄수화물</Text>
                            <Text variant="labelLarge">{dailyProgress.carbs.current}g</Text>
                            <Text variant="labelSmall" style={styles.macroTarget}>
                                / {dailyProgress.carbs.target}g
                            </Text>
                        </View>
                        <View style={styles.macroCard}>
                            <Text variant="labelSmall" style={styles.macroLabel}>단백질</Text>
                            <Text variant="labelLarge">{dailyProgress.protein.current}g</Text>
                            <Text variant="labelSmall" style={styles.macroTarget}>
                                / {dailyProgress.protein.target}g
                            </Text>
                        </View>
                        <View style={styles.macroCard}>
                            <Text variant="labelSmall" style={styles.macroLabel}>지방</Text>
                            <Text variant="labelLarge">{dailyProgress.fat.current}g</Text>
                            <Text variant="labelSmall" style={styles.macroTarget}>
                                / {dailyProgress.fat.target}g
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
