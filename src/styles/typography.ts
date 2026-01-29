/**
 * 타이포그래피 토큰
 * @author 김동현
 */
export const TYPOGRAPHY = {
    display: {
        large: {
            fontSize: 32,
            fontWeight: '700' as const,
            lineHeight: 44,
        },
        medium: {
            fontSize: 28,
            fontWeight: '700' as const,
            lineHeight: 40,
        },
        small: {
            fontSize: 24,
            fontWeight: '700' as const,
            lineHeight: 32,
        },
    },

    heading: {
        h1: {
            fontSize: 24,
            fontWeight: '700' as const,
            lineHeight: 32,
        },
        h2: {
            fontSize: 20,
            fontWeight: '700' as const,
            lineHeight: 28,
        },
        h3: {
            fontSize: 18,
            fontWeight: '600' as const,
            lineHeight: 26,
        },
    },

    body: {
        large: {
            fontSize: 16,
            fontWeight: '400' as const,
            lineHeight: 24,
        },
        medium: {
            fontSize: 14,
            fontWeight: '400' as const,
            lineHeight: 22,
        },
        small: {
            fontSize: 12,
            fontWeight: '400' as const,
            lineHeight: 18,
        },
    },

    label: {
        large: {
            fontSize: 14,
            fontWeight: '500' as const,
            lineHeight: 20,
        },
        medium: {
            fontSize: 12,
            fontWeight: '500' as const,
            lineHeight: 16,
        },
        small: {
            fontSize: 10,
            fontWeight: '500' as const,
            lineHeight: 14,
        },
    },
} as const;

export type TTypography = typeof TYPOGRAPHY;
