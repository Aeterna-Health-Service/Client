import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../../styles';

/**
 * DetailList 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl,
    },
    title: {
        marginBottom: SPACING.md,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    label: {
        width: 50,
        color: COLORS.gray[700],
    },
    stats: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    statItem: {
        color: COLORS.gray[600],
    },
});
