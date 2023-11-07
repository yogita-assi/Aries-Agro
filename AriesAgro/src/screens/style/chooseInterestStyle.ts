import { StyleSheet } from 'react-native';
import { ArchivoBold, BGRED, BLACK, GREY_LIGHT, LIGHTGREY, MDBLUE, WHITE } from '../../shared/constants/color';
import { FONT_FIFTEEN, FONT_SIXTENN, FONT_TEN, FONT_THIRTEEN, FONT_TWENTY, FONT_TWENTYFIVE, FONT_TWENTYFOUR } from '../../shared/constants/FontConstant';
import { widthPercentageToDP } from 'react-native-responsive-screen';

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
        justifyContent: 'space-around',
        marginHorizontal: 25
    },
    btnOrganicBio: {
        width: 165
    },
    btnContinue: {
        width: 350,
        alignSelf: 'flex-end'
    },
    btnButtonStyle: {
        backgroundColor: GREY_LIGHT
    },
    txtOragnic: {
        color: BLACK,
        fontSize: 14
    },
    skipView: {
        alignSelf: "flex-end",
        width: widthPercentageToDP(20),
        left: 15
    },
    skipBtn: {
        color: BLACK,
        marginTop: 30,
        marginRight: 30,
        fontWeight: 'bold'
    },
})