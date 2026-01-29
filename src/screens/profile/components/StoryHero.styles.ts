import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SPACING } from '../../../styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * StoryHero 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    heroSection: {
        height: SCREEN_HEIGHT * 0.45,
    },
    heroImage: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: COLORS.gray[400],
    },
    avatarFrameContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarFrame: {
        width: SCREEN_WIDTH * 0.55,
        height: SCREEN_HEIGHT * 0.32,
        borderRadius: 24,
        borderWidth: 4,
        borderColor: COLORS.gray[900],
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatarFullBody: {
        width: '100%',
        height: '100%',
    },
    avatarPlaceholderEmoji: {
        fontSize: 80,
    },
    userInfoOverlay: {
        paddingHorizontal: SPACING.md,
        paddingBottom: SPACING.lg,
    },
    avatarContainer: {
        marginBottom: SPACING.sm,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.gray[200],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    avatarEmoji: {
        fontSize: 28,
    },
    userName: {
        color: COLORS.white,
        fontWeight: '700',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
});
