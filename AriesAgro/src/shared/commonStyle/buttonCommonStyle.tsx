import { StyleSheet } from 'react-native';
import { JPURPLE, MDBLUE, VERYDARK_GRAYISHRED, WHITE } from '../constants/color';

export const buttonCommonStyle = StyleSheet.create({
    buttonStyle: {
        borderRadius: 9,
        backgroundColor: MDBLUE,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        height: 40,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: WHITE,
        textAlign: 'center',
        lineHeight: 30
    },

});