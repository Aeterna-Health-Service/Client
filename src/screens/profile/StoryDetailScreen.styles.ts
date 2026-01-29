import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SPACING } from '../../styles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * StoryDetailScreen 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: SPACING.md,
        paddingTop: SPACING.md,
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
