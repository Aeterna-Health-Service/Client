import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

/**
 * HomeScreen 공통 스타일
 * 섹션별 스타일은 각 컴포넌트로 분리되었습니다.
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    scrollView: {
        flex: 1,
    },
});
