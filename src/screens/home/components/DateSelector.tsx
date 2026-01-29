import React, { useCallback, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from '../../../components';
import { COLORS, SPACING } from '../../../styles';

interface DateSelectorProps {
    date: Date;
    onDateChange: (date: Date) => void;
}

export const DateSelector = ({ date, onDateChange }: DateSelectorProps) => {
    const [showPicker, setShowPicker] = useState(false);

    const handlePrevDay = useCallback(() => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - 1);
        onDateChange(newDate);
    }, [date, onDateChange]);

    const handleNextDay = useCallback(() => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + 1);
        onDateChange(newDate);
    }, [date, onDateChange]);

    const handleDatePress = useCallback(() => {
        setShowPicker(true);
    }, []);

    const handlePickerChange = useCallback((event: any, selectedDate?: Date) => {
        setShowPicker(false);
        if (selectedDate) {
            onDateChange(selectedDate);
        }
    }, [onDateChange]);

    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

    const isToday = new Date().toDateString() === date.toDateString();

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePrevDay} hitSlop={10} style={styles.arrowButton}>
                <Text style={styles.arrowText}>‹</Text>
            </Pressable>

            <Pressable onPress={handleDatePress} style={styles.dateContainer}>
                <Text variant="labelLarge" style={styles.dateText}>
                    {formattedDate}
                </Text>
                {isToday && (
                    <View style={styles.todayBadge}>
                        <Text variant="labelSmall" style={styles.todayText}>오늘</Text>
                    </View>
                )}
            </Pressable>

            <Pressable
                onPress={handleNextDay}
                hitSlop={10}
                style={[styles.arrowButton, isToday && styles.disabledButton]}
                disabled={isToday}
            >
                <Text style={[styles.arrowText, isToday && styles.disabledText]}>›</Text>
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handlePickerChange}
                    maximumDate={new Date()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SPACING.xs,
        gap: SPACING.md,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.xs,
    },
    dateText: {
        color: COLORS.gray[900],
    },
    todayBadge: {
        backgroundColor: COLORS.primary[100],
        paddingHorizontal: SPACING.xs,
        paddingVertical: 2,
        borderRadius: 4,
    },
    todayText: {
        color: COLORS.primary[500],
        fontSize: 10,
        fontWeight: '600',
    },
    arrowButton: {
        padding: SPACING.xs,
    },
    arrowText: {
        fontSize: 24,
        color: COLORS.gray[600],
        lineHeight: 24,
    },
    disabledButton: {
        opacity: 0.5,
    },
    disabledText: {
        color: COLORS.gray[300],
    },
});
