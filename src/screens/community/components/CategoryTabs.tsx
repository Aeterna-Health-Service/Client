import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './CategoryTabs.styles';

export type TCategory = '전체' | '운동꿀팁' | '식단추천' | '자유게시판' | '스토리';
export const CATEGORY_COLORS: Record<TCategory, string> = {
    전체: '#333333',
    운동꿀팁: '#2196F3',
    식단추천: '#4CAF50',
    자유게시판: '#FF9800',
    스토리: '#9C27B0',
};

type CategoryTabsProps = {
    selectedCategory: TCategory;
    onSelectCategory: (category: TCategory) => void;
};

const CATEGORIES: TCategory[] = ['전체', '운동꿀팁', '식단추천', '자유게시판', '스토리'];

/**
 * 카테고리 탭 컴포넌트
 * @author 김동현
 */
export const CategoryTabs = ({ selectedCategory, onSelectCategory }: CategoryTabsProps) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {CATEGORIES.map((category) => (
                    <Pressable
                        key={category}
                        style={[
                            styles.tab,
                            selectedCategory === category &&
                            styles.tabActive(CATEGORY_COLORS[category]),
                        ]}
                        onPress={() => onSelectCategory(category)}
                    >
                        <Text
                            variant="labelMedium"
                            style={[
                                styles.tabText,
                                selectedCategory === category &&
                                styles.tabTextActive(CATEGORY_COLORS[category]),
                            ]}
                        >
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};
