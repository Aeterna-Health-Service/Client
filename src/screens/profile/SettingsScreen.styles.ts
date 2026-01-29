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
    content: {
        padding: SPACING.lg,
    },
    section: {
        marginBottom: SPACING.xl,
    },
    sectionTitle: {
        marginBottom: SPACING.md,
        color: COLORS.gray[500],
        fontWeight: '600',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    itemText: {
        color: COLORS.gray[900],
        fontSize: 16,
    },
    versionText: {
        color: COLORS.gray[500],
        fontSize: 14,
    },
});
