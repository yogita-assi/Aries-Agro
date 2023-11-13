import { FONT_FIFTEEN, FONT_SEVENTEEN, FONT_TWENTYFOUR } from "../../shared/constants/FontConstant";
import { BLACK, WHITE, DARKBLUE, NAVYBULE, PGREEN, BGRED, GREEN, JPURPLE, MDRED, ArchivoExtraBold, ArchivoBold, GREY, LIGHTGREY, SPANISH_GRAY, MDBLUE, GREY_SHADE, LIGHT_BLUE, BORDER_COLOR, } from "../../shared/constants/color";
import { StyleSheet } from "react-native";
import { FONT_EIGHTEEN, FONT_SIXTENN, FONT_TWELVE } from "../../shared/constants/FontConstant";

export const orderOtpStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top: 0,
    },
    parentView: {
        flex: 1,
        marginHorizontal: 0,
    },
    countDown: {
        alignSelf: "center"
    },
    contentHeaderWrapper: {
        marginHorizontal: 5,
        marginVertical: 25,
        backgroundColor: WHITE,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        color: NAVYBULE,
    },
    otpInformation: {
        fontSize: 11,
        lineHeight: 17,
        color: LIGHTGREY,
        marginHorizontal: 30,
        fontWeight: 600
    },
    resOtp: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resendOTPTxt: {
        color: GREY_SHADE,
        fontSize: 12,
    },
    resendOTP: {
        color: LIGHT_BLUE,
        paddingLeft: 0
    },
    otpFormTxt: {
        textAlign: "center",
        marginHorizontal: 10
    },
    otpErroFormTxt: {
        fontFamily: "bold",
        color: BGRED
    },
    inputStyle: {
        color: JPURPLE,
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'bold',
    },
    verifyInput: {
        marginTop: 20,
        alignItems: 'center'
    },
    textEnterOtp: {
        fontSize: 25,
        lineHeight: 50,
        color: GREY,
        alignSelf: 'center',
        marginTop: 8
    },
    mainParent: {
        flex: 1,
        marginTop: 30
    },
    otpBoxes: {
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: BORDER_COLOR,
        color: WHITE,
        width: 40,
        height: 43,
        padding: 7
    },
}
);