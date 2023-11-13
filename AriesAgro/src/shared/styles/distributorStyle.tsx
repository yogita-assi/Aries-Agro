import { FONT_SEVENTEEN } from "../../shared/constants/FontConstant";
import { BLACK, WHITE, NAVYBULE, BGRED, GREEN, JPURPLE, ArchivoBold, GREY, LIGHTGREY, SPANISH_GRAY, MDBLUE, GREY_SHADE, LIGHT_BLUE, BORDER_COLOR, } from "../../shared/constants/color";
import { StyleSheet } from "react-native";

export const distributorStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
        top: 0,
    },
    parentView: {
        flex: 1,
        marginHorizontal: 0,
    },
    contentHeader: {
        marginHorizontal: 5,
        backgroundColor: WHITE,
        borderRadius: 5,
    },
    txtOr: {
        fontSize: FONT_SEVENTEEN,
        fontWeight: 'bold',
        fontFamily: ArchivoBold,
        lineHeight: 25,
        color: BLACK,
        textAlign: 'center'
    },
    mainContainerView: {
        flex: 1, justifyContent: 'center'
    },
    btnAddProduct: {
        width: 220,
        padding: 10,
        alignSelf: 'center'
    },

    //Upload Purchase ordre
    txtUploadOrder: {
        fontSize: FONT_SEVENTEEN,
        fontFamily: ArchivoBold,
        lineHeight: 25,
        color: BLACK,
        textAlign: 'center'
    },
    btnSubmit: {
        width: 350,
        padding: 10,
        alignSelf: 'center',
    },
}
);