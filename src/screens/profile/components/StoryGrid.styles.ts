import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles';

/**
 * StoryGrid 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridItem: {
        position: 'relative',
    },
    gridImage: {
        width: '100%',
        height: '100%',
    },
    columnWrapper: {
        gap: 2,
    },
    deleteButton: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    userInfoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        // Actually, just a simple background for now, or use a view with opacity.
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    avatarContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    avatarText: {
        fontSize: 12,
    },
    userNameText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: '600',
        flex: 1,
    },
});
