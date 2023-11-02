import { StyleSheet } from "react-native";
import { BLACK, JPURPLE, WHITE } from "../constants/color";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const productStyle = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
    },
    mainCardView: {
        flex: 1,
        backgroundColor: WHITE
    },
    textInputContainer: {
        marginVertical: 15,
        height: 40,
        color: BLACK,
        flexDirection: 'row',
    },
    noDataText: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    area: {
        flex: 1,
        backgroundColor: WHITE,
    },
    textInput: {
        backgroundColor: WHITE,
        color: BLACK,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: 320
    },
    flatListContentContainer: {
        marginVertical: 20,
        paddingBottom: 20,
    },
    width: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: JPURPLE,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
    },
    gobackStyle: {
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        paddingLeft: 5,
        color: JPURPLE
    },
    renderView: {
        marginHorizontal: 10,
        backgroundColor: WHITE,
        paddingHorizontal: 10,
        paddingBottom: 8,
        marginTop: 10,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 2
    },
    image: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },
    buttonStyle: {
        paddingVertical: 10,
        backgroundColor: JPURPLE,
        width: widthPercentageToDP(30),
        borderRadius: 4,
    },
    cardContainer: {
        backgroundColor: WHITE,
        elevation: 8,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
    },
    description: {
        fontSize: 12,
        color: BLACK,
        textTransform: 'capitalize',
    },
    rightBox: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5,
    },
    imageContainer: {
        borderWidth: 0.2,
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 5,
        padding: 5
    },
    rightLeftBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 10,
        flex: 1,
        gap: 2,
    }
});