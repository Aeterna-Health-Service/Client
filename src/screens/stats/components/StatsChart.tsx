import React, { useMemo } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { Text } from '../../../components';
import { COLORS } from '../../../styles';
import type { TDataPoint, TChartSelection } from '../types';

// 스타일 정의
const internalStyles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        paddingVertical: 16,
        marginHorizontal: 20,
        // [핵심 3] 점선이나 그래프가 박스 밖으로 튀어나가지 않도록 자르기
        overflow: 'hidden',
    },
});

export interface StatsChartProps {
    data: TDataPoint[];
    selection: TChartSelection;
}

export const StatsChart = ({ data, selection }: StatsChartProps) => {
    const { width: screenWidth } = useWindowDimensions();
    const chartWidth = screenWidth - 80;

    const hasAnySelection = selection.intake || selection.burned || selection.weight;

    // 데이터 가공
    const { barData, lineData, maxCalorie, weightRange } = useMemo(() => {
        const bars: any[] = [];
        const lines: any[] = [];
        let maxVal = 0;
        const weightValues: number[] = [];

        data.forEach((item) => {
            if (selection.intake || selection.burned) {
                maxVal = Math.max(maxVal, item.intake, item.burned);
            }
            if (selection.weight) {
                weightValues.push(item.weight);
            }

            // [핵심 2] X축 라벨 정렬: labelWidth를 설정하여 라벨이 그룹 중앙에 오도록 함
            const labelStyle = { color: COLORS.gray[500], fontSize: 10, textAlign: 'center' };
            const commonBarProps = { labelTextStyle: labelStyle, labelWidth: 35 };

            if (selection.intake && selection.burned) {
                // 1) 섭취 막대
                bars.push({
                    value: item.intake,
                    label: item.label,
                    spacing: 4,
                    frontColor: COLORS.primary[500],
                    gradientColor: COLORS.primary[300],
                    ...commonBarProps,
                });
                // 2) 소모 막대
                bars.push({
                    value: item.burned,
                    frontColor: COLORS.info.main,
                    gradientColor: COLORS.info.light,
                    spacing: 24,
                });
            } else if (selection.intake) {
                bars.push({
                    value: item.intake,
                    label: item.label,
                    spacing: 24,
                    frontColor: COLORS.primary[500],
                    gradientColor: COLORS.primary[300],
                    ...commonBarProps,
                });
            } else if (selection.burned) {
                bars.push({
                    value: item.burned,
                    label: item.label,
                    spacing: 24,
                    frontColor: COLORS.info.main,
                    gradientColor: COLORS.info.light,
                    ...commonBarProps,
                });
            } else if (selection.weight) {
                bars.push({
                    value: 0,
                    label: item.label,
                    spacing: 24,
                    frontColor: 'transparent',
                    gradientColor: 'transparent',
                    ...commonBarProps,
                });
            }

            // --- 꺾은선 데이터 구성 ---
            if (selection.weight) {
                const linePoint = {
                    value: item.weight,
                    dataPointText: String(item.weight),
                    textColor: COLORS.success.main,
                    textShiftY: -10,
                    textFontSize: 10,
                    dataPointColor: COLORS.success.main,
                };

                if (selection.intake && selection.burned) {
                    lines.push(linePoint);
                    lines.push({ value: item.weight, hideDataPoint: true });
                } else {
                    lines.push(linePoint);
                }
            }
        });

        // 체중 Y축 범위 계산
        let minW = 0;
        let maxW = 100;
        if (weightValues.length > 0) {
            minW = Math.min(...weightValues) - 2;
            maxW = Math.max(...weightValues) + 2;
        }

        return { barData: bars, lineData: lines, maxCalorie: maxVal, weightRange: { min: minW, max: maxW } };
    }, [data, selection]);

    if (!hasAnySelection) {
        return (
            <View style={internalStyles.container}>
                <Text variant="h3" style={internalStyles.title}>통계 그래프</Text>
                <View style={[internalStyles.chartContainer, { height: 200 }]}>
                    <Text variant="bodyMedium" style={{ color: COLORS.gray[400] }}>표시할 항목을 선택하세요</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={internalStyles.container}>
            <Text variant="h3" style={internalStyles.title}>통계 그래프</Text>
            <View style={internalStyles.chartContainer}>
                <BarChart
                    data={barData}
                    width={chartWidth}
                    barWidth={16}
                    noOfSections={4}
                    maxValue={maxCalorie * 1.2 || 2000}
                    initialSpacing={16}

                    // X, Y축 스타일
                    yAxisTextStyle={{ color: COLORS.gray[400], fontSize: 10 }}
                    xAxisLabelTextStyle={{ color: COLORS.gray[400], fontSize: 10 }}
                    xAxisColor={COLORS.gray[200]}
                    yAxisThickness={0}
                    xAxisType="dashed"
                    rulesType="dashed"
                    rulesColor={COLORS.gray[200]}

                    // 꺾은선 그래프 설정
                    showLine={selection.weight}
                    lineData={selection.weight ? lineData : undefined}
                    lineConfig={{
                        color: COLORS.success.main,
                        thickness: 2,
                        curved: true,
                        hideDataPoints: false,
                        dataPointsShape: 'custom',
                        dataPointsWidth: 6,
                        dataPointsHeight: 6,
                        dataPointsColor: COLORS.success.main,
                        textShiftY: -5,
                        shiftY: 0,
                        isSecondary: true,
                    }}

                    // [수정 완료] showSecondaryYAxis를 제거하고 secondaryYAxis에 직접 객체 전달
                    secondaryYAxis={selection.weight ? {
                        maxValue: weightRange.max,
                        yAxisOffset: weightRange.min, // 여기가 핵심 수정 사항입니다
                        noOfSections: 4,
                        showFractionalValues: true,
                        roundToDigits: 1,
                        yAxisTextStyle: { color: COLORS.success.main, fontSize: 10 },
                        yAxisLabelSuffix: 'kg',
                        //yAxisAxisLinesColor: 'transparent',
                    } : undefined}
                />
            </View>
        </View>
    );
};