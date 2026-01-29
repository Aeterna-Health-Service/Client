import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    backButton: {
        padding: SPACING.xs,
        marginRight: SPACING.sm,
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.gray[800],
    },
    title: {
        ...TYPOGRAPHY.heading.h3,
        flex: 1,
    },
    content: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        padding: SPACING.md,
        gap: SPACING.sm,
    },
    tabButton: {
        flex: 1,
        paddingVertical: SPACING.sm,
        borderRadius: 8,
        backgroundColor: COLORS.gray[100],
        alignItems: 'center',
    },
    activeTabButton: {
        backgroundColor: COLORS.primary[50],
        borderWidth: 1,
        borderColor: COLORS.primary[200],
    },
    tabText: {
        ...TYPOGRAPHY.label.medium,
        color: COLORS.gray[600],
    },
    activeTabText: {
        color: COLORS.primary[500],
        fontWeight: '600',
    },
    scrollContent: {
        padding: SPACING.md,
        gap: SPACING.lg,
    },
    photoSection: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.md,
        paddingVertical: SPACING.xl,
    },
    photoPlaceholder: {
        width: 200,
        height: 200,
        borderRadius: 12,
        backgroundColor: COLORS.gray[100],
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.gray[200],
        borderStyle: 'dashed',
    },
    photoIcon: {
        fontSize: 48,
        marginBottom: SPACING.sm,
    },
    photoText: {
        ...TYPOGRAPHY.label.medium,
        color: COLORS.gray[500],
    },
    previewImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: SPACING.md,
        width: '100%',
        justifyContent: 'center',
    },
    formSection: {
        gap: SPACING.md,
    },
    inputGroup: {
        gap: SPACING.sm,
    },
    label: {
        ...TYPOGRAPHY.label.large,
        color: COLORS.gray[800],
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.gray[300],
        borderRadius: 8,
        padding: SPACING.sm,
        ...TYPOGRAPHY.body.medium,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
    },
    chip: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: 100,
        backgroundColor: COLORS.gray[100],
        borderWidth: 1,
        borderColor: COLORS.gray[200],
    },
    activeChip: {
        backgroundColor: COLORS.primary[50],
        borderColor: COLORS.primary[200],
    },
    chipText: {
        ...TYPOGRAPHY.label.small,
        color: COLORS.gray[600],
    },
    activeChipText: {
        color: COLORS.primary[500],
        fontWeight: '600',
    },
    submitButton: {
        marginTop: SPACING.xl,
    },
});
