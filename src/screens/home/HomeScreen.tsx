import React, { useRef, useState, useCallback, useMemo } from 'react';
import { ScrollView, NativeSyntheticEvent, NativeScrollEvent, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { styles } from './HomeScreen.styles';
import type { MainTabParamList, HomeStackParamList } from '../../navigation/types';
import type { TabKey, Tab, AvatarStats, DailyProgress, Meal, Workout, Routine } from './types';
import {
    SectionTabHeader,
    AvatarSection,
    DietSection,
    ExerciseSection,
} from './components';

const TAB_HEADER_HEIGHT = 48;

export type HomeScreenProps = CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, 'HomeMain'>,
    BottomTabScreenProps<MainTabParamList>
>;

const TABS: Tab[] = [
    { key: 'avatar', label: '아바타' },
    { key: 'diet', label: '식단' },
    { key: 'exercise', label: '운동' },
];

// 임시 데이터 - 아바타
const MOCK_STATS: AvatarStats = {
    hp: 75,
    mp: 60,
    stamina: 45,
    xp: 1250,
    level: 5,
    nextLevelXp: 2000,
};

const MOCK_DAILY_PROGRESS: DailyProgress = {
    calories: { current: 1450, target: 2000 },
    carbs: { current: 180, target: 250 },
    protein: { current: 95, target: 150 },
    fat: { current: 45, target: 65 },
};

// 임시 데이터 - 식단
const MOCK_TODAY_MEALS: Meal[] = [
    {
        id: '1',
        type: 'breakfast',
        label: '아침',
        foods: ['토스트', '삶은 계란'],
        calories: 350,
        time: '08:30',
    },
    {
        id: '2',
        type: 'lunch',
        label: '점심',
        foods: ['닭가슴살 샐러드', '현미밥'],
        calories: 520,
        time: '12:30',
    },
];

// 임시 데이터 - 운동
const MOCK_TODAY_WORKOUTS: Workout[] = [
    {
        id: '1',
        name: '모닝 러닝',
        duration: 30,
        calories: 280,
        xp: 50,
        time: '07:00',
        isFromWatch: true,
    },
];

const MOCK_ROUTINES: Routine[] = [
    { id: '1', emoji: '🏋️', name: '가슴 운동', duration: '45분', exercises: 6 },
    { id: '2', emoji: '💪', name: '등 운동', duration: '50분', exercises: 7 },
    { id: '3', emoji: '🦵', name: '하체 운동', duration: '55분', exercises: 8 },
    { id: '4', emoji: '🏃', name: '유산소', duration: '30분', exercises: 1 },
];

/**
 * 통합 홈 화면
 * 아바타, 식단, 운동 섹션을 탭으로 구분하여 표시
 * @author 김동현
 */
export const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [activeTab, setActiveTab] = useState<TabKey>('avatar');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { height: windowHeight } = useWindowDimensions();
    const insets = useSafeAreaInsets();

    // Calculate page height (screen - safe areas - tab header)
    const pageHeight = windowHeight - insets.top - insets.bottom - TAB_HEADER_HEIGHT - 60; // 60 = bottom tab bar height

    // Snap offsets for each section
    const snapOffsets = useMemo(() => [
        0,
        pageHeight,
        pageHeight * 2,
    ], [pageHeight]);

    // Filter data based on selected date (Mock implementation)
    const currentMeals = useMemo(() => {
        const isToday = selectedDate.toDateString() === new Date().toDateString();
        return isToday ? MOCK_TODAY_MEALS : [];
    }, [selectedDate]);

    const currentWorkouts = useMemo(() => {
        const isToday = selectedDate.toDateString() === new Date().toDateString();
        return isToday ? MOCK_TODAY_WORKOUTS : [];
    }, [selectedDate]);

    const handleAICamera = useCallback(() => {
        navigation.navigate('DietUpload', { mode: 'photo', date: selectedDate.toISOString() });
    }, [navigation, selectedDate]);

    const handleManualInput = useCallback(() => {
        navigation.navigate('DietUpload', { mode: 'manual', date: selectedDate.toISOString() });
    }, [navigation, selectedDate]);

    const handleSyncWatch = useCallback(() => {
        navigation.navigate('ExerciseUpload', { mode: 'sync', date: selectedDate.toISOString() });
    }, [navigation, selectedDate]);

    const handleExerciseManualInput = useCallback(() => {
        navigation.navigate('ExerciseUpload', { mode: 'manual', date: selectedDate.toISOString() });
    }, [navigation, selectedDate]);

    const handleMealPress = useCallback((meal: Meal) => {
        navigation.navigate('DietUpload', { mode: 'manual', date: selectedDate.toISOString(), initialData: meal });
    }, [navigation, selectedDate]);

    const handleWorkoutPress = useCallback((workout: Workout) => {
        navigation.navigate('ExerciseUpload', { mode: 'manual', date: selectedDate.toISOString(), initialData: workout });
    }, [navigation, selectedDate]);

    const handleStartRoutine = useCallback((routineId: string) => {
        console.log('Start routine:', routineId);
        // Might navigate to routine start screen
    }, []);

    const handleTabPress = useCallback((tab: TabKey) => {
        setActiveTab(tab);
        const tabIndex = TABS.findIndex(t => t.key === tab);
        scrollViewRef.current?.scrollTo({ y: tabIndex * pageHeight, animated: true });
    }, [pageHeight]);

    const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        const pageIndex = Math.round(scrollY / pageHeight);
        const tabKeys: TabKey[] = ['avatar', 'diet', 'exercise'];
        if (tabKeys[pageIndex] && tabKeys[pageIndex] !== activeTab) {
            setActiveTab(tabKeys[pageIndex]);
        }
    }, [pageHeight, activeTab]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Tab Header */}
            <SectionTabHeader
                tabs={TABS}
                activeTab={activeTab}
                onTabPress={handleTabPress}
            />

            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                snapToOffsets={snapOffsets}
                snapToAlignment="start"
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
            >
                {/* 아바타 섹션 */}
                <AvatarSection
                    stats={MOCK_STATS}
                    dailyProgress={MOCK_DAILY_PROGRESS}
                    pageHeight={pageHeight}
                />

                {/* 식단 섹션 */}
                <DietSection
                    meals={currentMeals}
                    date={selectedDate}
                    onDateChange={setSelectedDate}
                    onAICamera={handleAICamera}
                    onManualInput={handleManualInput}
                    onMealPress={handleMealPress}
                    pageHeight={pageHeight}
                />

                {/* 운동 섹션 */}
                <ExerciseSection
                    workouts={currentWorkouts}
                    routines={MOCK_ROUTINES}
                    date={selectedDate}
                    onDateChange={setSelectedDate}
                    onSyncWatch={handleSyncWatch}
                    onManualInput={handleExerciseManualInput}
                    onStartRoutine={handleStartRoutine}
                    onWorkoutPress={handleWorkoutPress}
                    pageHeight={pageHeight}
                />
            </ScrollView>
        </SafeAreaView>
    );
};
