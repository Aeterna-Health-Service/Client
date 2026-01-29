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
    label: {
        marginBottom: SPACING.xs,
        color: COLORS.gray[700],
        fontWeight: '600',
    },
    inputContainer: {
        marginBottom: SPACING.lg,
    },
    input: {
        backgroundColor: COLORS.gray[50],
        padding: SPACING.md,
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: COLORS.gray[200],
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: COLORS.primary[300],
        paddingVertical: SPACING.md,
        alignItems: 'center',
        borderRadius: RADIUS.md,
        marginTop: SPACING.md,
    },
    saveButtonText: {
        color: COLORS.gray[900],
        fontWeight: '700',
        fontSize: 16,
    },
});
