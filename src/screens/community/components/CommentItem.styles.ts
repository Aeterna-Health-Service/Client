import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../../styles';

/**
 * CommentItem 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[100],
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: RADIUS.full,
        backgroundColor: COLORS.gray[100],
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.sm,
    },
    avatarText: {
        fontSize: 14,
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    userName: {
        fontWeight: '600',
        marginRight: SPACING.sm,
    },
    time: {
        color: COLORS.gray[400],
    },
    text: {
        color: COLORS.gray[700],
    },
});
