import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

/**
 * MyPostsScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray[50],
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    backButton: {
        padding: SPACING.xs,
    },
    backText: {
        fontSize: 16,
        color: COLORS.primary[400],
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
    },
    headerSpacer: {
        width: 60,
    },
    listContent: {
        padding: SPACING.md,
    },
    postCard: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: SPACING.md,
        shadowColor: COLORS.gray[900],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.sm,
    },
    postBadge: {
        backgroundColor: COLORS.primary[100],
        paddingHorizontal: SPACING.sm,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: SPACING.xs,
    },
    postBadgeText: {
        fontSize: 12,
        color: COLORS.primary[500],
        fontWeight: '600',
    },
    postCategory: {
        fontSize: 12,
        color: COLORS.gray[500],
        flex: 1,
    },
    postTime: {
        fontSize: 12,
        color: COLORS.gray[400],
    },
    postContent: {
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.gray[800],
        marginBottom: SPACING.sm,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postStats: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    postStat: {
        fontSize: 12,
        color: COLORS.gray[500],
    },
    postActions: {
        flexDirection: 'row',
        gap: SPACING.sm,
    },
    actionBtn: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: 6,
        backgroundColor: COLORS.gray[100],
    },
    editBtnText: {
        fontSize: 12,
        color: COLORS.primary[500],
        fontWeight: '500',
    },
    deleteBtnStyle: {
        backgroundColor: COLORS.error.light,
    },
    deleteBtnText: {
        fontSize: 12,
        color: COLORS.error.main,
        fontWeight: '500',
    },
    separator: {
        height: SPACING.sm,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SPACING.xl,
    },
    emptyText: {
        fontSize: 14,
        color: COLORS.gray[400],
    },
});
