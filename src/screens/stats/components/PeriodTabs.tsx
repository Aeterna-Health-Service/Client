import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './PeriodTabs.styles';
import type { TPeriod } from '../types';

export interface PeriodTabsProps {
    selectedPeriod: TPeriod;
    onPeriodChange: (period: TPeriod) => void;
}

const PERIOD_LABELS: Record<TPeriod, string> = {
    day: '일간',
    week: '주간',
    month: '월간',
};

/**
 * 기간 선택 탭 컴포넌트
 * @author 김동현
 */
export const PeriodTabs = ({ selectedPeriod, onPeriodChange }: PeriodTabsProps) => {
    const periods: TPeriod[] = ['day', 'week', 'month'];

    return (
        <View style={styles.container}>
            {periods.map((period) => (
                <Pressable
                    key={period}
                    style={[styles.tab, selectedPeriod === period && styles.tabActive]}
                    onPress={() => onPeriodChange(period)}
                >
                    <Text
                        variant="labelMedium"
                        style={[styles.tabText, selectedPeriod === period && styles.tabTextActive]}
                    >
                        {PERIOD_LABELS[period]}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};
