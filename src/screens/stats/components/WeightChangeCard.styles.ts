import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * WeightChangeCard 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: SPACING.lg,
        padding: SPACING.md,
        backgroundColor: COLORS.primary[50],
        borderRadius: RADIUS.lg,
        marginBottom: SPACING.lg,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.sm,
    },
    badge: {
        backgroundColor: COLORS.error.light,
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.full,
    },
    badgePositive: {
        backgroundColor: COLORS.success.light,
    },
    badgeText: {
        color: COLORS.success.dark,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.lg,
    },
    item: {
        alignItems: 'center',
    },
    label: {
        color: COLORS.gray[500],
        marginBottom: SPACING.xs,
    },
    arrow: {
        fontSize: 24,
        color: COLORS.gray[400],
    },
    currentWeight: {
        color: COLORS.primary[500],
    },
});
