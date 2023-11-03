import { BLACK, WHITE, DARKBLUE, NAVYBULE, PGREEN, BGRED, GREEN, JPURPLE, MDRED, ArchivoExtraBold, ArchivoBold, GREY, LIGHTGREY, SPANISH_GRAY, } from "../../shared/constants/color";
import { StyleSheet } from "react-native";

export const otpstyles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top:0,
    },
    parentView: {
        flex: 1,
        marginHorizontal: 20,
    },
    countDown: {
        alignSelf: "center"
    },
    contentHeaderWrapper: {
        marginHorizontal: 5,
        marginVertical: 25,
        backgroundColor: WHITE,
        elevation: 8,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        color: NAVYBULE,
    },

    textHeader: {
        fontSize: 15,
        lineHeight: 50,
        color: GREY,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 8
    },
    textHeaderSelect: {
        fontSize: 15,
        color: GREY,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    loginInformation: {
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 20
    },
    otpInformation: {
        fontSize: 13,
        lineHeight: 20,
        color: LIGHTGREY,
        marginHorizontal: 25
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
        marginHorizontal: 16,
        marginTop: 10
    },
    resendOTPTxt: {
        color: BGRED,
        fontSize: 12,
        textDecorationLine: "underline",
        fontWeight: 'bold'
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
        borderColor: JPURPLE,
        color: WHITE,
        width: 33,
        padding: 7
    },
    btnContinue: {
        alignSelf: 'center',
        width: 150,
        marginBottom: 25
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
        borderColor: SPANISH_GRAY,
        borderWidth: 1, width: 200,
        alignSelf: 'center',
        marginTop: 30,
        padding: 7
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
        marginVertical: 25,
        backgroundColor: WHITE,
        borderRadius: 5,
        marginTop:30
    },
    imageContainer: {
        borderWidth: 0.2,
        flex: 1.5,
        alignSelf:'flex-end',
        borderRadius: 4,
        paddingVertical: 10,
        width: 100,
    },
}
);