import { BLACK, WHITE, DARKBLUE, PGREEN, BGRED, LIGHTGREY, NAVYBULE, GREEN, JPURPLE, ArchivoBold, ArchivoLight, GREY, MDBLUE } from "../../shared/constants/color";
import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import TextArchivoBold from "../../shared/FontFamily/TextArchivoBold";
import { boxStyle } from "../../shared/styles/screenStyles/common-style";
import { FONT_ELEVEN, FONT_FIFTEEN, FONT_SIXTENN, FONT_TWENTY, FONT_TWENTYFIVE, FONT_TWENTYFOUR, FONT_TWENTYTWO } from "../../shared/constants/FontConstant";

export const signInStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
    },
    imageLogo: {
        height: 80,
        width: 80,
        alignSelf: "center",
    },
    parentView: {
        flex: 1,
        marginVertical: 20,
    },
    mainSection: {
        marginTop: 20,
    },
    headerWrapper: {
        fontFamily: ArchivoBold
    },
    textHeader: {
        fontSize: 20,
        lineHeight: 45,
        color: GREY,
        marginTop: 10,
        marginHorizontal: 8
    },
    txtMobileNumber: {
        fontSize: FONT_SIXTENN,
        fontFamily: ArchivoBold,
        lineHeight: 20,
        color: BLACK,
        marginTop: 5,
        fontWeight: 700,
        marginHorizontal: 30
    },
    txtWelcome: {
        fontSize: FONT_TWENTYFOUR,
        fontFamily: ArchivoBold,
        lineHeight: 30,
        color: BLACK,
        textAlign: 'center'
    },
    txtAriesAgro: {
        fontSize: FONT_TWENTYFIVE,
        fontFamily: ArchivoBold,
        lineHeight: 30,
        color: MDBLUE,
        fontWeight: 'bold',
    },
    inputTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 20
    },

    profileContents: {
        width: widthPercentageToDP(20),
        borderRadius: 5,
        color: LIGHTGREY,
        marginLeft: 25,
        height: 50,
        marginHorizontal: 4,
    },
    mobileText: {
        fontSize: 10,
        color: BLACK,
        lineHeight: 10,
        height: 40
    },
    mobileTexts: {
        fontSize: 10,
        color: LIGHTGREY,
        height: 40
    },
    profileContent: {
        width: widthPercentageToDP(62),
        color: LIGHTGREY,
        height: 50,
        marginRight: 60,
        borderRadius: 5,
    },
    loginInformation: {
        marginHorizontal: widthPercentageToDP(7),
        marginTop: 5,
    },
    textInformation: {
        fontSize: 11,
        marginHorizontal: 2,
        lineHeight: 20,
        color: BLACK,
    },

    termAndCondition: {
        fontSize: 12,
        marginHorizontal: 2,
        lineHeight: 20,
        color: GREEN,
        textDecorationLine: 'underline'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        elevation: 3,
        width: 310,
        backgroundColor: GREEN,
        marginVertical: 20,
        marginHorizontal: widthPercentageToDP(8),
        borderRadius: 5,
        height: 50
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: WHITE,
        fontStyle: 'italic',

    },
    txtPrivacyPolicy: {
        fontSize: FONT_FIFTEEN,
        fontFamily: ArchivoBold,
        width: 280,
        lineHeight: 20,
        color: BLACK,
        textAlign: 'center',
        marginHorizontal: 15
    },
    formTxt: {
        alignSelf: 'center',
        marginBottom: 10
    },
    erroFormTxt: {
        color: BGRED,
        fontSize: 12,
        lineHeight: 13
    },
    mobileMsg: {
        color: GREY,
        marginHorizontal: 25,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    viewElement: {
        margin: 20,
        backgroundColor: WHITE,
        ...boxStyle,
        flexDirection: 'row'
    },
    searchPlace: {
        fontSize: 16,
        fontFamily: ArchivoBold,
        backgroundColor: WHITE,
    },
    searchIcon: {
        marginLeft: 5,
        marginTop: 20
    },
    btnGenerateOtp: {
        width: 350,
        alignSelf: 'flex-end',
    },
    imageContainer: {
        flex: 1.5,
        alignSelf: 'center',
        paddingVertical: 10,
    },
    txtPrivacy: {
        color: MDBLUE,
        fontWeight: 'bold',
    },
    headerTxt: {
        flexDirection: 'row', marginTop: 30, alignSelf: 'center'
    }
}
);