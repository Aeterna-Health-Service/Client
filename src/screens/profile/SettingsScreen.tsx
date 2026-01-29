import React, { useState } from 'react';
import { View, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { styles } from './SettingsScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type SettingsScreenProps = ProfileStackScreenProps<'Settings'>;

/**
 * 설정 화면
 * 알림 설정 및 앱 정보를 표시합니다.
 * @author 김동현
 */
export const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </Pressable>
                <Text variant="h2">설정</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.section}>
                    <Text variant="labelMedium" style={styles.sectionTitle}>앱 설정</Text>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>푸시 알림</Text>
                        <Switch
                            value={isNotificationEnabled}
                            onValueChange={setIsNotificationEnabled}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>효과음</Text>
                        <Switch
                            value={isSoundEnabled}
                            onValueChange={setIsSoundEnabled}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text variant="labelMedium" style={styles.sectionTitle}>기기 연동</Text>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>워치 연동</Text>
                        <Switch
                            value={true} // TODO: 실제 연동 상태로 교체
                            onValueChange={() => { }} // TODO: 연동 로직 구현
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text variant="labelMedium" style={styles.sectionTitle}>정보</Text>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>버전 정보</Text>
                        <Text style={styles.versionText}>1.0.0</Text>
                    </View>
                    <Pressable style={styles.item}>
                        <Text style={styles.itemText}>이용약관</Text>
                        <Text style={styles.versionText}>→</Text>
                    </Pressable>
                    <Pressable style={styles.item}>
                        <Text style={styles.itemText}>개인정보 처리방침</Text>
                        <Text style={styles.versionText}>→</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
