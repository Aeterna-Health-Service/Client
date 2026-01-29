import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * ChallengeChips 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    challengeRow: {
        flexDirection: 'row',
        gap: SPACING.sm,
        marginBottom: SPACING.lg,
    },
    challengeChip: {
        backgroundColor: COLORS.primary[50],
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.full,
    },
});
