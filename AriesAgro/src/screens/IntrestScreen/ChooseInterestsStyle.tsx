import { BLACK, WHITE, DARKBLUE, NAVYBULE, PGREEN, BGRED, GREEN, JPURPLE, MDRED, ArchivoExtraBold, ArchivoBold, GREY, LIGHTGREY, SPANISH_GRAY, RED, EXTRA_LIGHTGREY, } from "../../shared/constants/color";
import { StyleSheet } from "react-native";

export const ChooseInterestsStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
    },
    parentView: {
        flex: 1,
        marginHorizontal: 20,
    },
    countDown: {
        alignSelf: "center"
    },
    contentHeaderWrapper: {
        marginVertical: 25,
        backgroundColor: WHITE,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        color: NAVYBULE,
    },

    textHeader: {
        fontSize: 24,
        lineHeight: 50,
        color: GREY,
        fontWeight: 'bold',
        alignSelf: 'center',
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
        fontWeight: "bold",

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

    inputStyle: {
        color: JPURPLE,
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'bold',
    },
    verifyInput: {
        marginTop: 10,
        flexDirection: 'row',
    },

    btnIntrest: {
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: EXTRA_LIGHTGREY,
        borderRadius: 5,
        borderColor: BLACK,
        paddingHorizontal: 5
    },

    farmerView: {
        borderColor: SPANISH_GRAY,
        borderWidth: 1,
        width: 200,
        alignSelf: 'center',
        padding: 7,
        marginBottom: 10
    },
    intrestText: {
        color: BLACK,
        alignSelf: 'center',
    },
    btnGenerateOtp: {
        marginBottom: 15,
        justifyContent: 'space-around',
        width: "45%",
    },
    btnNext: {
        marginTop:45,
        alignSelf: 'center',
        width: 150,
        marginBottom: 10,
        borderRadius:10
    },

}
);