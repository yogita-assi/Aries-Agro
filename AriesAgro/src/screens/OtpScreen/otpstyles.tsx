import { FONT_FIFTEEN, FONT_SEVENTEEN, FONT_TWENTYFOUR } from "../../shared/constants/FontConstant";
import { BLACK, WHITE, DARKBLUE, NAVYBULE, PGREEN, BGRED, GREEN, JPURPLE, MDRED, ArchivoExtraBold, ArchivoBold, GREY, LIGHTGREY, SPANISH_GRAY, MDBLUE, GREY_SHADE, LIGHT_BLUE, BORDER_COLOR, } from "../../shared/constants/color";
import { StyleSheet } from "react-native";
import { FONT_EIGHTEEN, FONT_SIXTENN, FONT_TWELVE } from "../../shared/constants/FontConstant";

export const otpstyles = StyleSheet.create({
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

    textHeader: {
        fontSize: 37,
        lineHeight: 50,
        color: GREY,
        alignSelf: 'center',
        marginTop: 8
    },
    textHeaderSelect: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: WHITE,
    },
    loginInformation: {
        // alignItems: 'center',
        marginTop: 5,
        // marginHorizontal: 20
    },
    otpInformation: {
        fontSize: 11,
        lineHeight: 17,
        color: LIGHTGREY,
        marginHorizontal: 30,
        fontWeight: 600
    },
    phoneNumber: {
        fontSize: 13,
        lineHeight: 20,
        color: BLACK,
        fontWeight: "bold",
        marginTop: 5,
        marginHorizontal: 20
    },
    textInformation: {
        fontSize: 14,
        marginHorizontal: 2,
        lineHeight: 20,
        color: BLACK,
    },
    mobileText: {
        fontSize: 14,
        fontWeight: "bold",
        color: WHITE,
        paddingLeft: 10,
        height: 38
    },
    profileContent: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 10,
        borderColor: GREEN,
        backgroundColor: GREEN
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
    otpBox: {
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: BORDER_COLOR,
        color: WHITE,
        width: 43,
        height: 43,
        padding: 7
    },
    
    txtCurrentRide: {
        fontSize: 20,
        lineHeight: 50,
        color: JPURPLE,
        marginHorizontal: 15
    },
    resendOtp: {
        marginHorizontal: 15
    },
    //Select Type style
    btnOr: {
        alignSelf: 'center',
        width: 60,
        height: 30,
        marginBottom: 25
    },
    txtDistributorView: {
        borderColor: MDBLUE,
        borderWidth: 1, width: 230,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: MDBLUE,
        borderRadius: 8,
    },
    txtFarmerView: {
        borderColor: MDBLUE,
        borderWidth: 1, width: 230,
        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
        backgroundColor: MDBLUE,
        borderRadius: 8
    },
    farmerView: {
        borderColor: SPANISH_GRAY,
        borderWidth: 1,
        width: 200,
        alignSelf: 'center',
        padding: 7,
        marginBottom: 10
    },
    contentHeader: {
        marginHorizontal: 5,
        backgroundColor: WHITE,
        borderRadius: 5,
    },
    txtOr: {
        fontSize: FONT_SEVENTEEN,
        fontFamily: ArchivoBold,
        lineHeight: 25,
        marginTop: 10,
        color: BLACK,
        textAlign: 'center'
    },
    imageContainer: {
        borderWidth: 0.2,
        flex: 1.5,
        alignSelf: 'flex-end',
        borderRadius: 4,
        paddingVertical: 10,
        width: 100,
    },
    mainContainerView: {
        flex: 1, justifyContent: 'center'
    }
}
);