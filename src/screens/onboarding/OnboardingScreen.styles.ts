import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

/**
 * OnboardingScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
        paddingBottom: SPACING.lg,
    },
    stepIndicator: {
        color: COLORS.primary[400],
        marginBottom: SPACING.xs,
    },
    title: {
        color: COLORS.gray[900],
        marginBottom: SPACING.md,
    },
    progressBar: {
        height: 4,
        backgroundColor: COLORS.gray[200],
        borderRadius: 2,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: COLORS.primary[400],
    },
    contentWrapper: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.lg,
    },
    contentContainer: {
        paddingBottom: SPACING.xl,
    },
    footerSafeArea: {
        backgroundColor: COLORS.white,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.gray[100],
    },
});
