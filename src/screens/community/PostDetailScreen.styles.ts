
import { COLORS, SPACING, RADIUS, SHADOWS } from '../../styles';

/**
 * PostDetailScreen 스타일
 * @author 김동현
 */
export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
        paddingBottom: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    backButton: {
        marginRight: SPACING.md,
    },
    backText: {
        fontSize: 24,
    },
    headerTitle: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    postSection: {
        padding: SPACING.lg,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    authorInfo: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        marginBottom: SPACING.md,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: RADIUS.full,
        backgroundColor: COLORS.gray[100],
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        marginRight: SPACING.md,
    },
    avatarEmoji: {
        fontSize: 24,
    },
    authorDetails: {
        flex: 1,
    },
    authorName: {
        fontWeight: '600' as const,
    },
    postTime: {
        color: COLORS.gray[400],
    },
    categoryBadge: (color: string) => ({
        backgroundColor: color + '20',
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.sm,
    }),
    categoryText: (color: string) => ({
        color: color,
        fontWeight: '600' as const,
    }),
    postContent: {
        marginVertical: SPACING.md,
        lineHeight: 24,
    },
    actions: {
        flexDirection: 'row' as const,
        gap: SPACING.lg,
        paddingTop: SPACING.md,
    },
    actionButton: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: SPACING.xs,
    },
    actionText: {
        color: COLORS.gray[500],
    },
    actionTextActive: {
        color: COLORS.error.main,
    },
    commentsSection: {
        padding: SPACING.lg,
    },
    commentsHeader: {
        marginBottom: SPACING.md,
    },
    commentInputContainer: {
        flexDirection: 'row' as const,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.gray[100],
        backgroundColor: COLORS.white,
        ...SHADOWS.sm,
    },
    commentInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.gray[200],
        borderRadius: RADIUS.lg,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        marginRight: SPACING.sm,
        fontSize: 14,
    },
    submitButton: {
        backgroundColor: COLORS.primary[300],
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.lg,
        justifyContent: 'center' as const,
    },
    submitButtonText: {
        fontWeight: '600' as const,
        color: COLORS.gray[900],
    },
    emptyComments: {
        textAlign: 'center' as const,
        color: COLORS.gray[400],
        paddingVertical: SPACING.xl,
    },
};
