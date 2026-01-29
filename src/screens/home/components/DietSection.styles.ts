import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * DietSection 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    section: {
        paddingTop: SPACING.md,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.sm,
    },
    date: {
        color: COLORS.gray[500],
    },
    summaryCard: {
        marginHorizontal: SPACING.lg,
        marginVertical: SPACING.md,
        padding: SPACING.lg,
        backgroundColor: COLORS.gray[900],
        borderRadius: RADIUS.lg,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryValue: {
        color: COLORS.primary[300],
    },
    summaryLabel: {
        color: COLORS.gray[400],
        marginTop: SPACING.xs,
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: COLORS.gray[700],
    },
    mealSection: {
        paddingHorizontal: SPACING.lg,
    },
    sectionTitle: {
        marginBottom: SPACING.md,
    },
    mealCard: {
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
        marginBottom: SPACING.sm,
    },
    mealHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    mealTypeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
    },
    mealTime: {
        color: COLORS.gray[400],
    },
    mealCalories: {
        color: COLORS.primary[500],
    },
    mealFoods: {
        color: COLORS.gray[600],
        marginTop: SPACING.xs,
    },
    emptyMeal: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.gray[200],
        borderStyle: 'dashed',
        backgroundColor: COLORS.white,
        paddingVertical: SPACING.lg,
    },
    emptyLabel: {
        color: COLORS.gray[400],
    },
    fabRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: SPACING.lg,
        gap: SPACING.sm,
    },
    fabSecondary: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.gray[100],
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabPrimary: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.lg,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.primary[400],
        justifyContent: 'center',
        alignItems: 'center',
        gap: SPACING.xs,
    },
    fabIcon: {
        fontSize: 20,
    },
    fabText: {
        color: COLORS.gray[900],
        fontWeight: '600',
    },
});
