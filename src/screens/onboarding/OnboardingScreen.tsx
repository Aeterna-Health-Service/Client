import React, { useCallback } from 'react';
import { View, ScrollView, Keyboard, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAtom, useSetAtom } from 'jotai';
import { Text, Button } from '../../components';
import { onboardingStepAtom, onboardingDataAtom, isOnboardingCompleteAtom, isLoggedInAtom } from '../../store';
import { BasicInfoStep } from './components/BasicInfoStep';
import { ActivityLevelStep } from './components/ActivityLevelStep';
import { GoalSettingStep } from './components/GoalSettingStep';
import { DietModeStep } from './components/DietModeStep';
import { styles } from './OnboardingScreen.styles';
import type { AuthStackScreenProps } from '../../navigation/types';

export type OnboardingScreenProps = AuthStackScreenProps<'Onboarding'>;

const TOTAL_STEPS = 4;

/**
 * 온보딩 화면
 * 4단계 사용자 정보 설정
 * @author 김동현
 */
export const OnboardingScreen = () => {
    const navigation = useNavigation<OnboardingScreenProps['navigation']>();
    const [step, setStep] = useAtom(onboardingStepAtom);
    const [data, setData] = useAtom(onboardingDataAtom);
    const setIsOnboardingComplete = useSetAtom(isOnboardingCompleteAtom);
    const setIsLoggedIn = useSetAtom(isLoggedInAtom);

    /**
     * 현재 단계의 필수 값 검증
     */
    const isStepValid = useCallback((): boolean => {
        switch (step) {
            case 1:
                // 기본 정보: 성별, 나이, 키, 몸무게 필수
                return !!(data.gender && data.age && data.height && data.weight);
            case 2:
                // 활동량: 반드시 선택
                return !!data.activityLevel;
            case 3:
                // 목표 설정: 목표 타입 필수 (목표 체중은 선택)
                return !!data.goalType;
            case 4:
                // 식단 모드: 반드시 선택
                return !!data.dietMode;
            default:
                return false;
        }
    }, [step, data]);

    const handleNext = () => {
        Keyboard.dismiss();
        if (!isStepValid()) return;

        if (step < TOTAL_STEPS) {
            setStep(step + 1);
        } else {
            // 온보딩 완료
            handleComplete();
        }
    };

    const handleBack = () => {
        Keyboard.dismiss();
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigation.goBack();
        }
    };

    const handleComplete = async () => {
        // TODO: 서버에 온보딩 데이터 전송
        console.log('Onboarding data:', data);

        setIsOnboardingComplete(true);
        setIsLoggedIn(true);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <BasicInfoStep data={data} onUpdate={setData} />;
            case 2:
                return <ActivityLevelStep data={data} onUpdate={setData} />;
            case 3:
                return <GoalSettingStep data={data} onUpdate={setData} />;
            case 4:
                return <DietModeStep data={data} onUpdate={setData} />;
            default:
                return null;
        }
    };

    const getStepTitle = () => {
        switch (step) {
            case 1:
                return '기본 정보';
            case 2:
                return '활동량 설정';
            case 3:
                return '목표 설정';
            case 4:
                return '식단 모드';
            default:
                return '';
        }
    };

    const stepValid = isStepValid();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <Text variant="labelMedium" style={styles.stepIndicator}>
                    {step} / {TOTAL_STEPS}
                </Text>
                <Text variant="h2" style={styles.title}>
                    {getStepTitle()}
                </Text>
                {/* Progress Bar */}
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${(step / TOTAL_STEPS) * 100}%` }]} />
                </View>
            </View>

            {/* Content - Scrollable, dismisses keyboard on tap */}
            <Pressable style={styles.contentWrapper} onPress={Keyboard.dismiss}>
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {renderStep()}
                </ScrollView>
            </Pressable>

            {/* Footer - Fixed at bottom, not affected by keyboard */}
            <SafeAreaView edges={['bottom']} style={styles.footerSafeArea}>
                <View style={styles.footer}>
                    <Button variant="ghost" size="medium" onPress={handleBack}>
                        {step === 1 ? '취소' : '이전'}
                    </Button>
                    <Button
                        variant="primary"
                        size="large"
                        onPress={handleNext}
                        disabled={!stepValid}
                    >
                        {step === TOTAL_STEPS ? '완료' : '다음'}
                    </Button>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    );
};
