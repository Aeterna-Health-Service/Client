import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../styles';

/**
 * ProfileScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
    },
    editButton: {
        padding: SPACING.xs,
    },
    editButtonText: {
        fontSize: 14,
        color: COLORS.primary[400],
        fontWeight: '600',
    },
    tabButtons: {
        flexDirection: 'row',
        marginHorizontal: SPACING.lg,
        marginVertical: SPACING.md,
        backgroundColor: COLORS.gray[100],
        borderRadius: RADIUS.md,
        padding: 4,
    },
    tabButton: {
        flex: 1,
        paddingVertical: SPACING.sm,
        alignItems: 'center',
        borderRadius: RADIUS.sm,
    },
    tabButtonActive: {
        backgroundColor: COLORS.white,
    },
    tabText: {
        color: COLORS.gray[500],
    },
    tabTextActive: {
        color: COLORS.gray[900],
    },
    scrollView: {
        flex: 1,
    },
    profileCard: {
        alignItems: 'center',
        paddingVertical: SPACING.lg,
        marginHorizontal: SPACING.lg,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
        marginBottom: SPACING.lg,
    },
    avatarLarge: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.gray[200],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: COLORS.primary[300],
        marginBottom: SPACING.sm,
    },
    avatarEmoji: {
        fontSize: 40,
    },
    userName: {
        marginBottom: SPACING.xs,
    },
    levelBadgeLarge: {
        backgroundColor: COLORS.primary[400],
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.full,
        marginBottom: SPACING.md,
    },
    levelText: {
        color: COLORS.gray[900],
        fontWeight: '700',
    },
    socialStats: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialStatItem: {
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
    },
    socialStatLabel: {
        color: COLORS.gray[500],
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: COLORS.gray[200],
    },
    menuSection: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl,
    },
    menuItem: {
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    logoutText: {
        color: COLORS.error.main,
    },
});
