import { BLACK, WHITE, DARKBLUE, PGREEN, BGRED, LIGHTGREY, NAVYBULE, GREEN, JPURPLE, ArchivoBold, ArchivoLight, GREY } from "../../shared/constants/color";
import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import TextArchivoBold from "../../shared/FontFamily/TextArchivoBold";
import { boxStyle } from "../../shared/styles/screenStyles/common-style";
import { FONT_TWENTY, FONT_TWENTYFOUR, FONT_TWENTYTWO } from "../../shared/constants/FontConstant";

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
        fontSize: FONT_TWENTYTWO,
        fontFamily: ArchivoBold,
        lineHeight: 30,
        color: BLACK,
        marginVertical: 20,
        alignSelf: 'center'
    },
    inputTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25
    },

    profileContents: {
        width: widthPercentageToDP(18),
        borderRadius: 5,
        color: LIGHTGREY,
        marginLeft: 25,
        height: 50,
        marginHorizontal: 4,
    },
    mobileText: {
        fontSize: 10,
        color: LIGHTGREY,
        lineHeight: 10,
        height: 40
    },
    mobileTexts: {
        fontSize: 10,
        color: LIGHTGREY,
        height: 40
    },
    profileContent: {
        width: widthPercentageToDP(55),
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
    formTxt: {
        alignSelf: 'center'
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
        width: 200,
        alignSelf: 'center'
    },
    imageContainer: {
        borderWidth: 0.2,
        flex: 1.5,
        alignSelf: 'center',
        borderRadius: 4,
        paddingVertical: 10,
        width: 200
    },

}
);