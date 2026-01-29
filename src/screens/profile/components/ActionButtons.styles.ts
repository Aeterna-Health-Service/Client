import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * ActionButtons 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    actionRow: {
        flexDirection: 'row',
        marginHorizontal: SPACING.lg,
        marginVertical: SPACING.md,
        backgroundColor: COLORS.gray[100],
        borderRadius: RADIUS.lg,
        overflow: 'hidden',
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SPACING.md,
        gap: SPACING.xs,
    },
    actionIcon: {
        fontSize: 16,
    },
    actionText: {
        color: COLORS.gray[800],
    },
    divider: {
        width: 1,
        backgroundColor: COLORS.gray[200],
        marginVertical: SPACING.sm,
    },
});
