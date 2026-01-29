import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    backButton: {
        padding: SPACING.xs,
        marginRight: SPACING.sm,
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.gray[800],
    },
    title: {
        ...TYPOGRAPHY.heading.h3,
        flex: 1,
    },
    content: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        padding: SPACING.md,
        gap: SPACING.sm,
    },
    tabButton: {
        flex: 1,
        paddingVertical: SPACING.sm,
        borderRadius: 8,
        backgroundColor: COLORS.gray[100],
        alignItems: 'center',
    },
    activeTabButton: {
        backgroundColor: COLORS.primary[50],
        borderWidth: 1,
        borderColor: COLORS.primary[200],
    },
    tabText: {
        ...TYPOGRAPHY.label.medium,
        color: COLORS.gray[600],
    },
    activeTabText: {
        color: COLORS.primary[500],
        fontWeight: '600',
    },
    scrollContent: {
        padding: SPACING.md,
        gap: SPACING.lg,
    },
    syncSection: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.md,
        paddingVertical: SPACING.xl,
        backgroundColor: COLORS.gray[50],
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.gray[200],
    },
    watchIcon: {
        fontSize: 64,
        marginBottom: SPACING.sm,
    },
    syncTitle: {
        ...TYPOGRAPHY.heading.h3,
        color: COLORS.gray[900],
    },
    syncDesc: {
        ...TYPOGRAPHY.body.medium,
        color: COLORS.gray[600],
        textAlign: 'center',
        lineHeight: 24,
    },
    syncButton: {
        marginTop: SPACING.md,
        paddingHorizontal: SPACING.xl,
    },
    formSection: {
        gap: SPACING.md,
    },
    inputGroup: {
        gap: SPACING.sm,
    },
    label: {
        ...TYPOGRAPHY.label.large,
        color: COLORS.gray[800],
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.gray[300],
        borderRadius: 8,
        padding: SPACING.sm,
        ...TYPOGRAPHY.body.medium,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        marginTop: SPACING.xl,
    },
    workoutList: {
        marginTop: SPACING.md,
        width: '100%',
        paddingHorizontal: SPACING.md,
        gap: SPACING.sm,
    },
    workoutItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.md,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.gray[200],
        gap: SPACING.sm,
    },
    workoutIcon: {
        fontSize: 24,
    },
    workoutInfo: {
        flex: 1,
    },
    workoutName: {
        ...TYPOGRAPHY.label.large,
        color: COLORS.gray[900],
    },
    workoutDetail: {
        ...TYPOGRAPHY.label.small,
        color: COLORS.gray[500],
    },
    workoutValue: {
        ...TYPOGRAPHY.label.medium,
        color: COLORS.primary[500],
        fontWeight: '600',
    },
});
