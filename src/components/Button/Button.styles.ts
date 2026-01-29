import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: SPACING.xs,
    },
    disabled: {
        opacity: 0.5,
    },
});

export const variantStyles = {
    primary: StyleSheet.create({
        container: {
            backgroundColor: COLORS.primary[300],
        },
        text: {
            color: COLORS.gray[900],
            fontWeight: '600',
        },
        pressed: {
            backgroundColor: COLORS.primary[400],
        },
    }),
    secondary: StyleSheet.create({
        container: {
            backgroundColor: COLORS.gray[100],
        },
        text: {
            color: COLORS.gray[700],
            fontWeight: '600',
        },
        pressed: {
            backgroundColor: COLORS.gray[200],
        },
    }),
    outline: StyleSheet.create({
        container: {
            backgroundColor: COLORS.transparent,
            borderWidth: 1,
            borderColor: COLORS.primary[300],
        },
        text: {
            color: COLORS.primary[400],
            fontWeight: '600',
        },
        pressed: {
            backgroundColor: COLORS.primary[50],
        },
    }),
    ghost: StyleSheet.create({
        container: {
            backgroundColor: COLORS.transparent,
        },
        text: {
            color: COLORS.gray[700],
            fontWeight: '500',
        },
        pressed: {
            backgroundColor: COLORS.gray[100],
        },
    }),
};

export const sizeStyles = {
    small: StyleSheet.create({
        container: {
            paddingVertical: SPACING.xs,
            paddingHorizontal: SPACING.sm,
            borderRadius: RADIUS.sm,
            minHeight: 32,
        },
        text: {
            fontSize: 12,
        },
    }),
    medium: StyleSheet.create({
        container: {
            paddingVertical: SPACING.sm,
            paddingHorizontal: SPACING.md,
            borderRadius: RADIUS.md,
            minHeight: 44,
        },
        text: {
            fontSize: 14,
        },
    }),
    large: StyleSheet.create({
        container: {
            paddingVertical: SPACING.md,
            paddingHorizontal: SPACING.lg,
            borderRadius: RADIUS.md,
            minHeight: 56,
        },
        text: {
            fontSize: 16,
        },
    }),
    fullWidth: StyleSheet.create({
        container: {
            width: '100%',
            paddingVertical: SPACING.md,
            paddingHorizontal: SPACING.lg,
            borderRadius: RADIUS.md,
            minHeight: 56,
        },
        text: {
            fontSize: 16,
        },
    }),
};
