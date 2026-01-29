import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SPACING } from '../../styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * AddStoryScreen 스타일
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
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    headerButton: {
        padding: SPACING.xs,
        minWidth: 50,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
    },
    cancelText: {
        fontSize: 16,
        color: COLORS.gray[600],
    },
    saveText: {
        fontSize: 16,
        color: COLORS.primary[500],
        fontWeight: '600',
        textAlign: 'right',
    },
    imageContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        backgroundColor: COLORS.gray[100],
    },
    selectedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imagePlaceholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePlaceholderIcon: {
        fontSize: 48,
        marginBottom: SPACING.sm,
    },
    imagePlaceholderText: {
        fontSize: 16,
        color: COLORS.gray[500],
    },
    captionContainer: {
        padding: SPACING.md,
        flex: 1,
    },
    captionInput: {
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.gray[900],
        textAlignVertical: 'top',
        minHeight: 100,
    },
    charCount: {
        fontSize: 12,
        color: COLORS.gray[400],
        textAlign: 'right',
        marginTop: SPACING.sm,
    },
});
