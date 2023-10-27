import { BLACK, WHITE, DARKBLUE, PGREEN, BGRED, LIGHTGREY, NAVYBULE, GREEN, JPURPLE, ArchivoBold, ArchivoLight, GREY } from "../../shared/constants/color";
import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import TextArchivoBold from "../../shared/FontFamily/TextArchivoBold";
import { boxStyle } from "../../shared/styles/screenStyles/common-style";

export const signInStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    parentView: {
        flex: 1,
    },
    mainSection: {
        marginTop: 10,
    },
    headerWrapper: {
        marginHorizontal: 14,
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
        fontSize: 15,
        lineHeight: 30,
        color: LIGHTGREY,
        marginHorizontal: 8
    },
    inputTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    profileContents: {
        width: widthPercentageToDP(18),
        borderWidth: 1,
        borderRadius:5,
        color: LIGHTGREY,
        marginLeft: 25,
        height: 35,
        marginHorizontal: 4,
    },
    mobileText: {
        fontSize: 10,
        color: LIGHTGREY,
        justifyContent: 'center',
        lineHeight: 10,
        alignSelf: 'center',
        height: 34
    },
    mobileTexts: {
        fontSize: 10,
        color: LIGHTGREY,
        height: 34
    },
    profileContent: {
        width: widthPercentageToDP(55),
        borderWidth: 1,
        color: LIGHTGREY,
        height: 35,
        marginRight: 60,
        borderRadius:5,
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
        marginHorizontal: 30,
        marginTop: 5
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
        fontWeight: 'bold'
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
        top: 0,
        marginBottom: 20
    }

}
);