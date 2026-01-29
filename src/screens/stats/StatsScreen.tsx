import React, { useState, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { styles } from './StatsScreen.styles';
import {
    PeriodTabs,
    SummaryCards,
    WeightChangeCard,
    ChartTypeSelector,
    StatsChart,
    DetailList,
} from './components';
import type { MainTabScreenProps } from '../../navigation/types';
import type {
    TPeriod,
    TChartType,
    TChartSelection,
    TDataPoint,
    TStatsSummary,
} from './types';

export type StatsScreenProps = MainTabScreenProps<'Stats'>;

// Mock 데이터 생성 함수
const generateMockData = (period: TPeriod): TDataPoint[] => {
    switch (period) {
        case 'day':
            // 일간: 요일별 (월~일)
            return [
                { label: '월', intake: 1800, burned: 300, weight: 70.2 },
                { label: '화', intake: 2100, burned: 450, weight: 70.0 },
                { label: '수', intake: 1950, burned: 200, weight: 70.1 },
                { label: '목', intake: 1750, burned: 380, weight: 69.8 },
                { label: '금', intake: 2200, burned: 500, weight: 69.5 },
                { label: '토', intake: 2400, burned: 150, weight: 69.7 },
                { label: '일', intake: 1600, burned: 0, weight: 69.6 },
            ];
        case 'week':
            // 주간: 주차별 (1주~4주)
            return [
                { label: '1주', intake: 13500, burned: 2100, weight: 70.5 },
                { label: '2주', intake: 14200, burned: 2500, weight: 70.1 },
                { label: '3주', intake: 13800, burned: 2300, weight: 69.8 },
                { label: '4주', intake: 13000, burned: 1980, weight: 69.6 },
            ];
        case 'month':
            // 월간: 월별 (최근 6개월)
            return [
                { label: '8월', intake: 56000, burned: 8500, weight: 72.0 },
                { label: '9월', intake: 54500, burned: 9200, weight: 71.5 },
                { label: '10월', intake: 55200, burned: 9000, weight: 71.0 },
                { label: '11월', intake: 53800, burned: 9500, weight: 70.5 },
                { label: '12월', intake: 58000, burned: 7000, weight: 70.8 },
                { label: '1월', intake: 52000, burned: 8880, weight: 69.6 },
            ];
        default:
            return [];
    }
};

// 요약 데이터 계산
const calculateSummary = (data: TDataPoint[]): TStatsSummary => {
    const totalIntake = data.reduce((sum, d) => sum + d.intake, 0);
    const totalBurned = data.reduce((sum, d) => sum + d.burned, 0);
    const avgIntake = Math.round(totalIntake / data.length);
    const avgBurned = Math.round(totalBurned / data.length);
    const startWeight = data[0]?.weight ?? 0;
    const currentWeight = data[data.length - 1]?.weight ?? 0;
    const weightChange = Math.round((currentWeight - startWeight) * 10) / 10;

    return { avgIntake, avgBurned, startWeight, currentWeight, weightChange };
};

/**
 * 통계 화면
 * 일/주/월 단위 칼로리 In/Out, 체중 변화
 * @author 김동현
 */
export const StatsScreen = ({ }: StatsScreenProps) => {
    const [period, setPeriod] = useState<TPeriod>('day');
    const [chartSelection, setChartSelection] = useState<TChartSelection>({
        intake: true,
        burned: true,
        weight: true,
    });

    // 기간별 데이터
    const data = useMemo(() => generateMockData(period), [period]);

    // 요약 데이터
    const summary = useMemo(() => calculateSummary(data), [data]);

    // 차트 유형 토글
    const handleToggleChartType = (type: TChartType) => {
        setChartSelection((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text variant="h1">통계</Text>
            </View>

            {/* Period Tabs */}
            <PeriodTabs selectedPeriod={period} onPeriodChange={setPeriod} />

            <ScrollView style={styles.scrollView}>
                {/* Summary Cards */}
                <SummaryCards summary={summary} />

                {/* Weight Change Card */}
                <WeightChangeCard summary={summary} />

                {/* Chart Type Selector */}
                <ChartTypeSelector
                    selection={chartSelection}
                    onToggle={handleToggleChartType}
                />

                {/* Stats Chart */}
                <StatsChart data={data} selection={chartSelection} />

                {/* Detail List */}
                <DetailList data={data} />
            </ScrollView>
        </SafeAreaView>
    );
};
