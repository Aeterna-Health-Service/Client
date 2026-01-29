import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * AvatarSection 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    section: {
        paddingTop: SPACING.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
    },
    greeting: {
        color: COLORS.gray[500],
    },
    levelBadge: {
        backgroundColor: COLORS.primary[400],
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.full,
    },
    levelText: {
        color: COLORS.gray[900],
        fontWeight: '700',
    },
    avatarSection: {
        alignItems: 'center',
        paddingVertical: SPACING.lg,
    },
    avatarCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: COLORS.gray[100],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: COLORS.primary[300],
    },
    avatarEmoji: {
        fontSize: 50,
    },
    xpContainer: {
        alignItems: 'center',
        marginTop: SPACING.md,
    },
    xpBar: {
        width: 200,
        height: 8,
        backgroundColor: COLORS.gray[200],
        borderRadius: 4,
        overflow: 'hidden',
    },
    xpFill: {
        height: '100%',
        backgroundColor: COLORS.primary[400],
    },
    xpText: {
        color: COLORS.gray[500],
        marginTop: SPACING.xs,
    },
    statsSection: {
        paddingHorizontal: SPACING.lg,
        marginBottom: SPACING.lg,
    },
    sectionTitle: {
        marginBottom: SPACING.md,
    },
    statRow: {
        marginBottom: SPACING.sm,
    },
    statLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    statEmoji: {
        marginRight: SPACING.xs,
    },
    statBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statBar: {
        flex: 1,
        height: 12,
        borderRadius: 6,
        overflow: 'hidden',
        marginRight: SPACING.sm,
    },
    hpBar: { backgroundColor: COLORS.error.light },
    mpBar: { backgroundColor: COLORS.info.light },
    staminaBar: { backgroundColor: COLORS.warning.light },
    statFill: {
        height: '100%',
    },
    hpFill: { backgroundColor: COLORS.error.main },
    mpFill: { backgroundColor: COLORS.info.main },
    staminaFill: { backgroundColor: COLORS.warning.main },
    statValue: {
        width: 40,
        color: COLORS.gray[600],
    },
    progressSection: {
        paddingHorizontal: SPACING.lg,
        marginBottom: SPACING.lg,
    },
    calorieCard: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        marginBottom: SPACING.md,
    },
    calorieValue: {
        color: COLORS.primary[500],
    },
    calorieLabel: {
        color: COLORS.gray[500],
        marginLeft: SPACING.xs,
    },
    macroRow: {
        flexDirection: 'row',
        gap: SPACING.sm,
    },
    macroCard: {
        flex: 1,
        alignItems: 'center',
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
    },
    macroLabel: {
        color: COLORS.gray[500],
        marginBottom: SPACING.xs,
    },
    macroTarget: {
        color: COLORS.gray[400],
    },
});
