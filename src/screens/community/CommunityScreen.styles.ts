import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

/**
 * CommunityScreen 스타일
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
        paddingBottom: SPACING.sm,
    },
    scrollView: {
        flex: 1,
    },
    feedSection: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl,
    },
});
