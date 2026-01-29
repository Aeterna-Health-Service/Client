import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './ChartTypeSelector.styles';
import type { TChartType, TChartSelection } from '../types';

export interface ChartTypeSelectorProps {
    selection: TChartSelection;
    onToggle: (type: TChartType) => void;
}

interface ChartOption {
    type: TChartType;
    label: string;
    indicatorStyle: object;
}

const CHART_OPTIONS: ChartOption[] = [
    { type: 'intake', label: '섭취량', indicatorStyle: styles.indicatorIntake },
    { type: 'burned', label: '소모량', indicatorStyle: styles.indicatorBurned },
    { type: 'weight', label: '체중', indicatorStyle: styles.indicatorWeight },
];

/**
 * 차트 유형 선택 컴포넌트
 * @author 김동현
 */
export const ChartTypeSelector = ({ selection, onToggle }: ChartTypeSelectorProps) => {
    return (
        <View style={styles.container}>
            {CHART_OPTIONS.map((option) => {
                const isSelected = selection[option.type];
                return (
                    <Pressable
                        key={option.type}
                        style={[styles.button, isSelected && styles.buttonSelected]}
                        onPress={() => onToggle(option.type)}
                    >
                        <View style={[styles.indicator, option.indicatorStyle]} />
                        <Text
                            variant="labelSmall"
                            style={[styles.label, isSelected && styles.labelSelected]}
                        >
                            {option.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};
