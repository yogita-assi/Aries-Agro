
import { StyleSheet } from "react-native";
import { BLACK, GRAY_SHADE, WHITE } from "../constants/color";
import { FONTFAMILY_ISTOK_WEB } from "../constants/FontConstant";

export const listUiCommonStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    renderView: {
        marginHorizontal: 10,
        backgroundColor: WHITE,
        // paddingHorizontal: 15,
        marginTop: 5,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 2
    },
    viewFlexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputView: {
        height: 48,
        width: 45,
        color: BLACK
    },
    textHeaderStyle: {
        color: GRAY_SHADE,
        lineHeight: 17.17,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontWeight: '400',
        fontSize: 12,
        position: 'absolute'
    },
    viewFlexOne: {
        flex: 1
    },
    viewFlexOneInputView: {
        flex: 1,
        marginTop: 3
    },
    viewFlexDirectionRow: {
        flexDirection: 'row'
    }
})