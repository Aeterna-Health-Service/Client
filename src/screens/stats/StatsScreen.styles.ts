import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

/**
 * StatsScreen 스타일 (컨테이너 레벨만 유지)
 * 개별 컴포넌트 스타일은 components/에 분리됨
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
    },
    scrollView: {
        flex: 1,
    },
});
