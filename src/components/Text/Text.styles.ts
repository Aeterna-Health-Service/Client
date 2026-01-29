import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../styles';

export const styles = StyleSheet.create({
    base: {
        color: COLORS.gray[900],
    },
});

export const variantStyles = {
    // Display
    displayLarge: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.display.large,
            color: COLORS.gray[900],
        },
    }),
    displayMedium: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.display.medium,
            color: COLORS.gray[900],
        },
    }),
    displaySmall: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.display.small,
            color: COLORS.gray[900],
        },
    }),

    // Heading
    h1: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.heading.h1,
            color: COLORS.gray[900],
        },
    }),
    h2: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.heading.h2,
            color: COLORS.gray[900],
        },
    }),
    h3: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.heading.h3,
            color: COLORS.gray[900],
        },
    }),

    // Body
    bodyLarge: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.body.large,
            color: COLORS.gray[900],
        },
    }),
    bodyMedium: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.body.medium,
            color: COLORS.gray[900],
        },
    }),
    bodySmall: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.body.small,
            color: COLORS.gray[500],
        },
    }),

    // Label
    labelLarge: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.label.large,
            color: COLORS.gray[700],
        },
    }),
    labelMedium: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.label.medium,
            color: COLORS.gray[700],
        },
    }),
    labelSmall: StyleSheet.create({
        text: {
            ...TYPOGRAPHY.label.small,
            color: COLORS.gray[500],
        },
    }),
};
