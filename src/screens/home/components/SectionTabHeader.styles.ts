import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../../styles';

/**
 * SectionTabHeader 스타일
 * @author 김동현
 */
export const styles = StyleSheet.create({
    tabHeader: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray[200],
    },
    tab: {
        flex: 1,
        paddingVertical: SPACING.md,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.transparent,
    },
    activeTab: {
        borderBottomColor: COLORS.primary[400],
    },
    tabText: {
        color: COLORS.gray[500],
    },
    activeTabText: {
        color: COLORS.primary[500],
        fontWeight: '700',
    },
});
