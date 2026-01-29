import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../../styles';

/**
 * CreatePostScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
        paddingBottom: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    backButton: {
        padding: SPACING.xs,
    },
    backText: {
        fontSize: 24,
    },
    headerTitle: {
        fontWeight: '600',
    },
    submitButton: {
        backgroundColor: COLORS.primary[300],
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.lg,
    },
    submitButtonDisabled: {
        backgroundColor: COLORS.gray[200],
    },
    submitButtonText: {
        fontWeight: '600',
        color: COLORS.gray[900],
    },
    submitButtonTextDisabled: {
        color: COLORS.gray[400],
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: SPACING.lg,
    },
    categorySection: {
        marginBottom: SPACING.lg,
    },
    label: {
        marginBottom: SPACING.sm,
        fontWeight: '600',
    },
    categoryOptions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
    },
    categoryOption: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.full,
        backgroundColor: COLORS.gray[100],
        borderWidth: 1,
        borderColor: COLORS.gray[200],
    },
    categoryOptionActive: {
        backgroundColor: COLORS.primary[300],
        borderColor: COLORS.primary[400],
    },
    categoryOptionText: {
        color: COLORS.gray[600],
    },
    categoryOptionTextActive: {
        color: COLORS.gray[900],
        fontWeight: '600',
    },
    inputSection: {
        marginBottom: SPACING.lg,
    },
    textInput: {
        borderWidth: 1,
        borderColor: COLORS.gray[200],
        borderRadius: RADIUS.lg,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        fontSize: 16,
        color: COLORS.gray[900],
    },
    contentInput: {
        height: 200,
        textAlignVertical: 'top',
    },
});
