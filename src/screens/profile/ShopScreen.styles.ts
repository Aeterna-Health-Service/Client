import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
        paddingBottom: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    backButton: {
        paddingRight: SPACING.md,
    },
    backButtonText: {
        fontSize: 24,
    },
    pointContainer: {
        backgroundColor: COLORS.primary[50],
        padding: SPACING.md,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    pointLabel: {
        color: COLORS.gray[600],
        fontSize: 14,
        marginBottom: 4,
    },
    pointValue: {
        color: COLORS.primary[500],
        fontSize: 24,
        fontWeight: '700',
    },
    content: {
        padding: SPACING.md,
    },
    itemsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemCard: {
        width: '48%',
        backgroundColor: COLORS.gray[50],
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray[200],
    },
    itemEmoji: {
        fontSize: 40,
        marginBottom: SPACING.sm,
    },
    itemName: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.gray[900],
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 12,
        color: COLORS.primary[500],
        fontWeight: '700',
        marginBottom: SPACING.sm,
    },
    buyButton: {
        backgroundColor: COLORS.primary[300],
        paddingVertical: SPACING.xs,
        paddingHorizontal: SPACING.md,
        borderRadius: RADIUS.sm,
    },
    buyButtonText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.gray[900],
    },
});
