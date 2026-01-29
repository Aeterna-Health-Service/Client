import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * ExerciseSection 스타일
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
    syncButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.gray[100],
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.full,
        gap: SPACING.xs,
    },
    syncIcon: {
        fontSize: 16,
    },
    syncText: {
        color: COLORS.gray[700],
    },
    exerciseSummaryCard: {
        marginHorizontal: SPACING.lg,
        marginVertical: SPACING.md,
        padding: SPACING.lg,
        backgroundColor: COLORS.success.main,
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
    exerciseSummaryValue: {
        color: COLORS.white,
    },
    exerciseSummaryLabel: {
        color: COLORS.white,
        opacity: 0.8,
    },
    exerciseSection: {
        paddingHorizontal: SPACING.lg,
        marginBottom: SPACING.lg,
    },
    sectionTitle: {
        marginBottom: SPACING.md,
    },
    workoutCard: {
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
        marginBottom: SPACING.sm,
    },
    workoutHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    workoutInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
    },
    watchBadge: {
        backgroundColor: COLORS.info.light,
        paddingHorizontal: SPACING.xs,
        paddingVertical: 2,
        borderRadius: RADIUS.xs,
    },
    watchBadgeText: {
        color: COLORS.info.main,
        fontSize: 10,
    },
    workoutTime: {
        color: COLORS.gray[400],
    },
    workoutStats: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    workoutStat: {
        color: COLORS.gray[600],
    },
    xpStat: {
        color: COLORS.primary[500],
    },
    emptyCard: {
        padding: SPACING.xl,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
        alignItems: 'center',
        marginBottom: SPACING.sm,
    },
    emptyText: {
        color: COLORS.gray[400],
    },
    routineGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
    },
    routineCard: {
        width: '48%',
        alignItems: 'center',
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
    },
    routineEmoji: {
        fontSize: 32,
        marginBottom: SPACING.xs,
    },
    routineInfo: {
        color: COLORS.gray[500],
        marginTop: 2,
    },
});
