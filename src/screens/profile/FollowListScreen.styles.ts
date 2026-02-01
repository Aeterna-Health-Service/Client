import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    backButton: {
        padding: SPACING.xs,
        width: 40,
    },
    backText: {
        fontSize: 24,
        color: COLORS.gray[900],
    },
    listContent: {
        padding: SPACING.md,
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[50],
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.gray[100],
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.md,
    },
    avatarEmoji: {
        fontSize: 24,
    },
    userInfo: {
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    userName: {
        marginRight: SPACING.sm,
    },
    levelBadge: {
        backgroundColor: COLORS.primary[100],
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    levelText: {
        fontSize: 10,
        color: COLORS.primary[500],
        fontWeight: 'bold',
    },
    description: {
        color: COLORS.gray[500],
    },
});
