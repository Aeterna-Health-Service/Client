/**
 * 색상 토큰
 * @author 김동현
 */
export const COLORS = {
    // Primary
    primary: {
        50: '#FFF9E6',
        100: '#FFF3CC',
        200: '#FFE799',
        300: '#FFE54F', // Main
        400: '#FFD700',
        500: '#E6C200',
    },

    // Gray
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#191C28', // Text
    },

    // Success
    success: {
        light: '#D1FAE5',
        main: '#10B981',
        dark: '#059669',
    },

    // Error
    error: {
        light: '#FEE2E2',
        main: '#EF4444',
        dark: '#DC2626',
    },

    // Warning
    warning: {
        light: '#FEF3C7',
        main: '#F59E0B',
        dark: '#D97706',
    },

    // Info
    info: {
        light: '#DBEAFE',
        main: '#3B82F6',
        dark: '#2563EB',
    },

    // Common
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
} as const;

export type TColors = typeof COLORS;
