import { StyleSheet } from 'react-native';
import { JPURPLE, VERYDARK_GRAYISHRED, WHITE } from '../constants/color';

export const buttonCommonStyle = StyleSheet.create({
    buttonStyle: {
        borderRadius: 5,
        backgroundColor: JPURPLE,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        height: 40,
        marginVertical: 20,
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