import { widthPercentageToDP } from "react-native-responsive-screen";
import { BLACK, WHITE, DARKBLUE, NAVYBULE, PGREEN, BGRED, GREEN, JPURPLE, MDRED, ArchivoExtraBold, ArchivoBold, GREY, LIGHTGREY, SPANISH_GRAY, LIGHT_BLUE, GREY_SHADE, BORDER_COLOR, LIGHTBLACK, VERYDARK_GRAYISHRED, PANTONE, BLUE_ALICE, BROWN, } from "../../shared/constants/color";
import { StyleSheet } from "react-native";
import { FONT_EIGHTEEN, FONT_SIXTENN, FONT_TWELVE } from "../../shared/constants/FontConstant";

export const otpstyles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top:0,
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
        color: GREY,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    loginInformation: {
        // alignItems: 'center',
        marginTop: 5,
        // marginHorizontal: 20
    },
    otpInformation: {
        fontSize: 12,
        lineHeight: 17,
        color: LIGHTGREY,
        marginHorizontal: 25,
        fontWeight:400
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
        flexDirection:'row',
        justifyContent:'center'
    },
    resendOTPTxt: {
        color: GREY_SHADE,
        fontSize: 12,
    },
    resendOTP:{
        color: LIGHT_BLUE,
    paddingLeft:0
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
        marginTop: 20,
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
    },
}
);
// export const otpstyles = StyleSheet.create ({
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: LIGHTBLACK
//     },
//     modalView: {
//         backgroundColor: WHITE,
//         shadowColor: BLACK,
//         shadowOpacity: 0.25,
//         borderRadius: 5,
//         paddingBottom: 30,
//         width: widthPercentageToDP(80)
//     },
//     modalTextView: {
//         fontSize: FONT_EIGHTEEN,
//         fontWeight: '600',
//         lineHeight: 20,
//         color: VERYDARK_GRAYISHRED,
//     },
//     formbutton: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginTop: 20,
//         marginHorizontal: 20
//     },
//     crossIcon: {
//         alignItems: 'flex-end',
//     },
//     buttonYesStyle: {
//         borderRadius: 5,
//         elevation: 2,
//         backgroundColor: PANTONE,
//         height: 40,
//         width: '40%',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     buttonNoStyle: {
//         borderRadius: 5,
//         elevation: 2,
//         backgroundColor: BLUE_ALICE,
//         height: 40,
//         width: '40%',
//         borderWidth: 1,
//         borderColor: BROWN,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     formNoTxt: {
//         color: VERYDARK_GRAYISHRED,
//         fontSize: FONT_SIXTENN,
//         lineHeight: 22,
//         fontWeight: 'bold'
//     },
//     formYesTxt: {
//         color: VERYDARK_GRAYISHRED,
//         fontSize: FONT_SIXTENN,
//         lineHeight: 22,
//         fontWeight: 'bold'
//     },
//     inputText: {
//         height: 40,
//         fontSize: FONT_SIXTENN,
//         lineHeight: 30,
//         marginHorizontal: 20,
//         marginBottom: 10
//     },
//     crossIconView: {
//         marginHorizontal: 10,
//         marginBottom: 20,
//         alignItems: 'center'
//     },
//     formTxt: {
//         marginHorizontal: 20,
//         marginTop: 5
//     },
//     erroFormTxt: {
//         color: BGRED,
//         fontSize: FONT_TWELVE,
//         lineHeight: 13
//     },
//     emptyText: {
//         width: 30,
//     }
// })