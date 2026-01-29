import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * PeriodTabs 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: SPACING.lg,
        marginVertical: SPACING.md,
        backgroundColor: COLORS.gray[100],
        borderRadius: RADIUS.md,
        padding: 4,
    },
    tab: {
        flex: 1,
        paddingVertical: SPACING.sm,
        alignItems: 'center',
        borderRadius: RADIUS.sm,
    },
    tabActive: {
        backgroundColor: COLORS.white,
    },
    tabText: {
        color: COLORS.gray[500],
    },
    tabTextActive: {
        color: COLORS.gray[900],
    },
});
