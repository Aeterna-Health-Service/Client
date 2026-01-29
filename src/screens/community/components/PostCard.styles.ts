
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * PostCard 스타일
 * @author 김동현
 */
export const styles = {
    postCard: {
        padding: SPACING.md,
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.lg,
        marginBottom: SPACING.sm,
    },
    postHeader: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: SPACING.sm,
    },
    postUserInfo: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: SPACING.sm,
    },
    postAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLORS.gray[200],
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
    },
    postTime: {
        color: COLORS.gray[400],
    },
    postTypeBadge: (color: string) => ({
        backgroundColor: color + '20',
        paddingHorizontal: SPACING.sm,
        paddingVertical: 2,
        borderRadius: RADIUS.xs,
    }),
    postTypeText: (color: string) => ({
        color: color,
    }),
    postContent: {
        marginBottom: SPACING.sm,
    },
    postFooter: {
        flexDirection: 'row' as const,
        gap: SPACING.md,
    },
    postLikes: {
        color: COLORS.gray[500],
    },
    postComments: {
        color: COLORS.gray[500],
    },
};
