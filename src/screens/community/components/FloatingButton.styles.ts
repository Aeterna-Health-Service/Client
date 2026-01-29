import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../../../styles';

/**
 * FloatingButton 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: SPACING.lg,
        right: SPACING.lg,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: RADIUS.full,
        backgroundColor: COLORS.primary[300],
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.lg,
    },
    buttonText: {
        fontSize: 24,
        color: COLORS.gray[900],
    },
});
