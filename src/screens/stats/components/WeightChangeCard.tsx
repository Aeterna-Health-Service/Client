import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components';
import { styles } from './WeightChangeCard.styles';
import type { TStatsSummary } from '../types';

export interface WeightChangeCardProps {
    summary: TStatsSummary;
}

/**
 * 체중 변화 카드 컴포넌트
 * @author 김동현
 */
export const WeightChangeCard = ({ summary }: WeightChangeCardProps) => {
    const isPositive = summary.weightChange < 0;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text variant="labelLarge">체중 변화</Text>
                <View style={[styles.badge, isPositive && styles.badgePositive]}>
                    <Text variant="labelSmall" style={styles.badgeText}>
                        {summary.weightChange > 0 ? '+' : ''}{summary.weightChange} kg
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Text variant="labelSmall" style={styles.label}>
                        시작
                    </Text>
                    <Text variant="h3">{summary.startWeight} kg</Text>
                </View>
                <Text style={styles.arrow}>→</Text>
                <View style={styles.item}>
                    <Text variant="labelSmall" style={styles.label}>
                        현재
                    </Text>
                    <Text variant="h3" style={styles.currentWeight}>
                        {summary.currentWeight} kg
                    </Text>
                </View>
            </View>
        </View>
    );
};
