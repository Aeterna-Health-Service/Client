import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components';
import { styles } from './DetailList.styles';
import type { TDataPoint } from '../types';

export interface DetailListProps {
    data: TDataPoint[];
}

/**
 * 상세 기록 리스트 컴포넌트
 * @author 김동현
 */
export const DetailList = ({ data }: DetailListProps) => {
    return (
        <View style={styles.container}>
            <Text variant="h3" style={styles.title}>
                상세 기록
            </Text>
            {data.map((item, index) => (
                <View key={index} style={styles.row}>
                    <Text variant="labelMedium" style={styles.label}>
                        {item.label}
                    </Text>
                    <View style={styles.stats}>
                        <Text variant="bodySmall" style={styles.statItem}>
                            🍽️ {item.intake.toLocaleString()}
                        </Text>
                        <Text variant="bodySmall" style={styles.statItem}>
                            🔥 {item.burned}
                        </Text>
                        <Text variant="bodySmall" style={styles.statItem}>
                            ⚖️ {item.weight}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};
