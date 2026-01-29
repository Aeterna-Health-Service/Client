import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * ChartTypeSelector 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.lg,
        gap: SPACING.sm,
        marginBottom: SPACING.md,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.full,
        borderWidth: 1,
        borderColor: COLORS.gray[200],
        backgroundColor: COLORS.white,
        gap: SPACING.xs,
    },
    buttonSelected: {
        borderColor: COLORS.primary[400],
        backgroundColor: COLORS.primary[50],
    },
    indicator: {
        width: 12,
        height: 12,
        borderRadius: RADIUS.full,
    },
    indicatorIntake: {
        backgroundColor: COLORS.primary[400],
    },
    indicatorBurned: {
        backgroundColor: COLORS.info.main,
    },
    indicatorWeight: {
        backgroundColor: COLORS.success.main,
    },
    label: {
        color: COLORS.gray[600],
    },
    labelSelected: {
        color: COLORS.gray[900],
        fontWeight: '600',
    },
});
