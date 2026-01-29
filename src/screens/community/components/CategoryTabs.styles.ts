
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * CategoryTabs 스타일
 * @author 김동현
 */
export const styles = {
    container: {
        marginBottom: SPACING.lg,
    },
    scrollContent: {
        paddingHorizontal: SPACING.lg,
        gap: SPACING.md,
    },
    tab: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.sm,
        borderBottomWidth: 2,
        borderColor: 'transparent',
    },
    tabText: {
        color: COLORS.gray[500],
    },
    tabActive: (color: string) => ({
        borderColor: color,
        borderBottomWidth: 2,
    }),
    tabTextActive: (color: string) => ({
        color: color,
        fontWeight: '700' as const,
    }),
};
