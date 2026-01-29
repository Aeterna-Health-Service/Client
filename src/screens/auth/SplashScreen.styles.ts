import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

/**
 * SplashScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray[900],
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        color: COLORS.primary[300],
        letterSpacing: 8,
    },
    tagline: {
        color: COLORS.gray[400],
        marginTop: SPACING.xs,
    },
    loader: {
        position: 'absolute',
        bottom: 100,
    },
});
