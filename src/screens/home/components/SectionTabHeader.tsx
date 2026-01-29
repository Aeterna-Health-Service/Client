import React, { useCallback } from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './SectionTabHeader.styles';
import type { Tab, TabKey } from '../types';

export interface SectionTabHeaderProps {
    tabs: Tab[];
    activeTab: TabKey;
    onTabPress: (tab: TabKey) => void;
}

/**
 * 섹션 탭 헤더 컴포넌트
 * 아바타/식단/운동 탭 전환을 담당합니다.
 * @author 김동현
 */
export const SectionTabHeader = ({
    tabs,
    activeTab,
    onTabPress,
}: SectionTabHeaderProps) => {
    const handlePress = useCallback(
        (key: TabKey) => () => onTabPress(key),
        [onTabPress]
    );

    return (
        <View style={styles.tabHeader}>
            {tabs.map((tab) => (
                <Pressable
                    key={tab.key}
                    style={[styles.tab, activeTab === tab.key && styles.activeTab]}
                    onPress={handlePress(tab.key)}
                >
                    <Text
                        variant="labelLarge"
                        style={[styles.tabText, activeTab === tab.key && styles.activeTabText]}
                    >
                        {tab.label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};
