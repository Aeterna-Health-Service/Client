import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components';
import { styles } from './SummaryCards.styles';
import type { TStatsSummary } from '../types';

export interface SummaryCardsProps {
    summary: TStatsSummary;
}

/**
 * 평균 섭취/소모 칼로리 요약 카드
 * @author 김동현
 */
export const SummaryCards = ({ summary }: SummaryCardsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text variant="labelSmall" style={styles.label}>
                    평균 섭취
                </Text>
                <Text variant="h2" style={styles.value}>
                    {summary.avgIntake.toLocaleString()}
                </Text>
                <Text variant="labelSmall" style={styles.unit}>
                    kcal
                </Text>
            </View>
            <View style={styles.card}>
                <Text variant="labelSmall" style={styles.label}>
                    평균 소모
                </Text>
                <Text variant="h2" style={styles.value}>
                    {summary.avgBurned.toLocaleString()}
                </Text>
                <Text variant="labelSmall" style={styles.unit}>
                    kcal
                </Text>
            </View>
        </View>
    );
};
