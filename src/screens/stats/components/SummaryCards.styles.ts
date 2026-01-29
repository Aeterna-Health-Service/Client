import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * SummaryCards 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.lg,
        gap: SPACING.sm,
        marginBottom: SPACING.md,
    },
    card: {
        flex: 1,
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
        alignItems: 'center',
    },
    label: {
        color: COLORS.gray[500],
        marginBottom: SPACING.xs,
    },
    value: {
        color: COLORS.gray[900],
    },
    unit: {
        color: COLORS.gray[400],
    },
});
