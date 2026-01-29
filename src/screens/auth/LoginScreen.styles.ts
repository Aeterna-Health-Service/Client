import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../styles';

/**
 * LoginScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray[900],
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.lg,
        justifyContent: 'space-between',
        paddingVertical: SPACING.xl,
    },
    heroSection: {
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    title: {
        color: COLORS.primary[300],
        letterSpacing: 6,
    },
    subtitle: {
        color: COLORS.white,
        marginTop: SPACING.xs,
    },
    description: {
        color: COLORS.gray[400],
        textAlign: 'center',
        marginTop: SPACING.md,
        lineHeight: 22,
    },
    avatarPlaceholder: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarCircle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: COLORS.gray[800],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: COLORS.primary[400],
    },
    avatarEmoji: {
        fontSize: 60,
    },
    buttonSection: {
        gap: SPACING.sm,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingVertical: SPACING.md,
        borderRadius: RADIUS.md,
        gap: SPACING.sm,
    },
    socialIconPlaceholder: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialButtonText: {
        color: COLORS.gray[900],
    },
    appleButton: {
        backgroundColor: COLORS.black,
    },
    appleIcon: {
        fontSize: 18,
    },
    appleButtonText: {
        color: COLORS.white,
    },
    skipButton: {
        alignItems: 'center',
        paddingVertical: SPACING.sm,
    },
    skipText: {
        color: COLORS.gray[500],
        textDecorationLine: 'underline',
    },
    terms: {
        color: COLORS.gray[500],
        textAlign: 'center',
        lineHeight: 18,
    },
});
