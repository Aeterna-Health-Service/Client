import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * StatsChart 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACING.lg,
        marginBottom: SPACING.lg,
    },
    title: {
        marginBottom: SPACING.md,
    },
    chartContainer: {
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Empty state
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 150,
    },
    emptyText: {
        color: COLORS.gray[400],
    },
});
