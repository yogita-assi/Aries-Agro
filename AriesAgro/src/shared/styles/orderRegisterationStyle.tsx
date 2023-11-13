import { FONT_EIGHTEEN, FONT_SIXTENN, FONT_TWENTYTWO } from "../constants/FontConstant";
import { ArchivoBold, BLACK, GREY, MDBLUE, MERCURY, WHITE } from "../constants/color";
import { StyleSheet } from "react-native";

export const orderRegisterationStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top: 0,
    },
    txtOrderSubmitted: {
        fontSize: 30,
        color: MDBLUE,
        lineHeight: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 30
    },
    txtReceived: {
        fontSize: FONT_EIGHTEEN,
        fontFamily: ArchivoBold,
        lineHeight: 20,
        color: MDBLUE,
        fontWeight: 700,
        padding: 10,
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop: 5
    },
    txtThankYou: {
        fontSize: 20,
        fontFamily: ArchivoBold,
        lineHeight: 20,
        color: MDBLUE,
        fontWeight: 700,
        padding: 10,
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop: 10
    },
    btnReturnToHome: {
        width: 200,
        alignSelf: 'center',
        marginTop: 30
    },
    parentView: {
        flex: 1,
        marginVertical: 20,
    },
    imageContainer: {
        flex: 1,
        alignSelf: 'center',
    },
},
);