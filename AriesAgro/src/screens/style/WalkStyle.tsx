import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { BGRED, BLACK, LIGHTGREY, MDBLUE, WHITE } from "../../shared/constants/color";
import { boxStyle } from "../../shared/styles/screenStyles/common-style";

export const WalkStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: WHITE, flex: 1
    },
    skipView: {
        alignSelf: "flex-end",
        width: widthPercentageToDP(20),
        left: 15
    },
    skip: {
        color: BGRED,
        fontSize: 14,
        textAlign: "right",
        marginRight: 30,
        marginVertical: 30
    },
    skipBtn: {
        color: MDBLUE,
        marginTop: 30,
        marginRight: 30,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
        color: MDBLUE,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 17,
        lineHeight: 20,
        color: MDBLUE,
        padding: 10,
        textAlign: 'center',
        marginHorizontal: 20
    },
    title: {
        fontSize: 26,
        lineHeight: 30,
        color: WHITE,
        textAlign: 'center',
    },
    imageView: {
        alignSelf: "center",
        bottom: 25,
        marginTop: "5%"
    },
    continue: {
        width: widthPercentageToDP(100),
        left: 50
    },
    continueButton: {
        height: heightPercentageToDP(6),
        width: widthPercentageToDP(80),
        bottom: widthPercentageToDP(15),
        borderRadius: 7,
        justifyContent: "center",
        backgroundColor: MDBLUE,
    },
    introContinueButton: {
        textAlign: "center",
        width: "100%",
        alignSelf: "center",
        color: WHITE,
        fontSize: 16,
        lineHeight: 16,
        justifyContent: "center"
    },
    activeDotStyle: {
        width: 23,
        backgroundColor: MDBLUE,
        marginBottom: heightPercentageToDP(30),
        marginLeft: heightPercentageToDP(1),
        marginRight: heightPercentageToDP(1)
    },
    dotStyle: {
        backgroundColor: LIGHTGREY,
        marginBottom: heightPercentageToDP(30),
        marginLeft: heightPercentageToDP(1),
        marginRight: heightPercentageToDP(1)
    },
    buttonText: {
        fontSize: 14,
        lineHeight: 15,
        color: WHITE
    },
    buttonContainers: {
        height: heightPercentageToDP(6),
        width: widthPercentageToDP(40),
        marginLeft: widthPercentageToDP(50),
        bottom: widthPercentageToDP(15),
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        backgroundColor: MDBLUE,
    },
    doctorDetailsContainer: {
        ...boxStyle,
        backgroundColor: MDBLUE,
        flexDirection: "row", justifyContent: "space-between",
        height: 60,
        bottom: 70,
        width: 5,
        paddingHorizontal: 0,
        borderRadius: 5,
        elevation: 8,
        marginHorizontal: 30,
    },
}
);