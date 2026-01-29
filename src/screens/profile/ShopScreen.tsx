import React, { useState } from 'react';
import { View, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { styles } from './ShopScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type ShopScreenProps = ProfileStackScreenProps<'Shop'>;

type ShopItem = {
    id: string;
    name: string;
    emoji: string;
    price: number;
};

const SAMPLE_ITEMS: ShopItem[] = [
    { id: '1', name: '마법사 모자', emoji: '🧙‍♂️', price: 500 },
    { id: '2', name: '전사 투구', emoji: '🪖', price: 500 },
    { id: '3', name: '왕관', emoji: '👑', price: 1000 },
    { id: '4', name: '선글라스', emoji: '🕶️', price: 300 },
    { id: '5', name: '운동화', emoji: '👟', price: 400 },
    { id: '6', name: '메달', emoji: '🥇', price: 800 },
];

/**
 * 상점 화면
 * 업적 포인트로 아이템을 교환합니다.
 * @author 김동현
 */
export const ShopScreen = ({ navigation }: ShopScreenProps) => {
    const [points, setPoints] = useState(1250);

    const handleBack = () => {
        navigation.goBack();
    };

    const handleBuy = (item: ShopItem) => {
        if (points >= item.price) {
            Alert.alert('구매 확인', `${item.name}을(를) 구매하시겠습니까?`, [
                { text: '취소', style: 'cancel' },
                {
                    text: '구매',
                    onPress: () => {
                        setPoints(prev => prev - item.price);
                        Alert.alert('구매 성공', '아이템이 보관함에 추가되었습니다.');
                    }
                }
            ]);
        } else {
            Alert.alert('포인트 부족', '보유 포인트가 부족합니다.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </Pressable>
                <Text variant="h2">업적 상점</Text>
            </View>

            <View style={styles.pointContainer}>
                <Text style={styles.pointLabel}>보유 포인트</Text>
                <Text style={styles.pointValue}>{points.toLocaleString()} P</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.itemsGrid}>
                    {SAMPLE_ITEMS.map((item) => (
                        <View key={item.id} style={styles.itemCard}>
                            <Text style={styles.itemEmoji}>{item.emoji}</Text>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>{item.price} P</Text>
                            <Pressable
                                style={styles.buyButton}
                                onPress={() => handleBuy(item)}
                            >
                                <Text style={styles.buyButtonText}>구매</Text>
                            </Pressable>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
