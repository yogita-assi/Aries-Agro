import { StyleSheet } from 'react-native';
import { ArchivoBold, BGRED, BLACK, WHITE } from '../../shared/constants/color';
import { FONT_SIXTENN } from '../../shared/constants/FontConstant';

export const dealerStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top: 0,
    },
    parentView: {
        flex: 1,
        marginHorizontal: 20,
    },
    txtHeader: {
        fontSize: FONT_SIXTENN,
        fontFamily: ArchivoBold,
        lineHeight: 20,
        color: BLACK,
        marginTop: 5,
        fontWeight: 700,
        marginHorizontal: 10
    },
    btnPendingApproval: {
        width: 200,
        alignSelf: 'center'
    },
    btnContinue: {
        width: 350,
        alignSelf: 'flex-end'
    }
})