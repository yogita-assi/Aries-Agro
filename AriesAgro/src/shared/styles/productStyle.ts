import { StyleSheet } from "react-native";
import { ArchivoBold, BLACK, GRAY_SHADE, JPURPLE, WHITE } from "../constants/color";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { FONTFAMILY_ISTOK_WEB, FONT_ELEVEN, FONT_FIFTEEN } from "../constants/FontConstant";

export const productStyle = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
    },
    txtMoreDetails: {
        fontSize: FONT_ELEVEN,
        fontFamily: ArchivoBold,
        lineHeight: 30,
        color: JPURPLE,
        marginHorizontal: 12,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: JPURPLE,
        width: 70
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
        width: 300,
        padding: 10
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
        marginHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 10
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: "40%"
    },
    rightLeftBoxContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    childMainView: {
        marginHorizontal: 5, width: "55%", marginTop: 5
    },
    //ViewProduct details
    imageViewContainer: {
        borderWidth: 0.2,
        alignSelf: 'center',
        borderRadius: 4,
        padding: 10,
        width: 230,
        marginTop: 10
    },
    txtProductInfo: {
        color: JPURPLE,
        fontSize: FONT_FIFTEEN,
        alignSelf: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    rowView: {
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 10,
        marginTop: 6
    },
    mainFieldView: {
        flex: 1,
        marginTop: 5
    },
    inputText: {
        marginHorizontal: 10,
        height: 40,
        fontSize: 15,
        lineHeight: 15,
        marginTop: 2,
        color: BLACK,
        width: 140
    },
    grayInputElement: {
        marginTop: 10,
        borderColor: GRAY_SHADE,
        color: WHITE,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
    },
    grayTitle: {
        color: GRAY_SHADE,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        position: 'absolute',
        backgroundColor: WHITE,
        lineHeight: 17.7,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTFAMILY_ISTOK_WEB
    },
    seeMoreButton: {
        color: 'blue',
        fontSize: 10,
    },
});