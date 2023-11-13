import { StyleSheet } from "react-native";
import { BLACK, GREY, MERCURY, WHITE } from "../constants/color";

export const salesListStyle = StyleSheet.create({
    renderItemView: {
        marginTop: 5,
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
        justifyContent: 'space-between',
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
});