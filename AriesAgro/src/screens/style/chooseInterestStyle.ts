import { StyleSheet } from 'react-native';
import { ArchivoBold, BGRED, BLACK, LIGHTGREY, WHITE } from '../../shared/constants/color';
import { FONT_FIFTEEN, FONT_SIXTENN, FONT_TEN, FONT_THIRTEEN, FONT_TWENTY, FONT_TWENTYFIVE, FONT_TWENTYFOUR } from '../../shared/constants/FontConstant';

export const chooseInterestStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top: 0,
    },
    parentView: {
        flex: 1,
        marginHorizontal: 20,
    },
    txtInterest: {
        fontSize: 27,
        fontFamily: ArchivoBold,
        lineHeight: 27,
        color: BLACK,
        marginTop: 5,
        fontWeight: 500,
        alignSelf: 'center'
    },
    txtSelectFavourite: {
        fontSize: FONT_TEN,
        fontFamily: ArchivoBold,
        lineHeight: 25,
        color: BLACK,
        marginTop: 5,
        fontWeight: 600,
        textAlign: 'center',
        marginHorizontal: 20
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnOrganicBio: {
        width: 180, marginHorizontal: 30,
    },
    btnFertilizer: {
        width: 140, right: 20
    },
    btnContinue: {
        width: 350,
        alignSelf: 'flex-end'
    }
})