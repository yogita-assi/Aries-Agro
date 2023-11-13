import { BLACK, GREY, MDBLUE, MERCURY, WHITE } from "../../shared/constants/color";
import { StyleSheet } from "react-native";

export const orderStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
    },
    btnOrder: {
        width: 160,
    },
    icon: {
        color: MDBLUE,
        marginRight: 10
    },
    textInput: {
        backgroundColor: WHITE,
        color: BLACK,
        borderWidth: 0.5,
        borderRadius: 8,
        width: 320,
        padding: 8,
        alignSelf: 'center',
    },
    renderItemView: {
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: WHITE,
        borderColor: MERCURY,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    childViewFlatlist: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    txtProductName: {
        color: GREY,
        fontSize: 14,
        marginVertical: 3,
        fontWeight: 'bold',
    },
    mainCardView: {
        flex: 1,
        backgroundColor: WHITE
    },
    //Order List Style
    btnReorder: {
        width: 150,
        alignSelf: 'flex-end'
    },
    renderItem: {
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: WHITE,
        borderColor: MERCURY,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
},
);