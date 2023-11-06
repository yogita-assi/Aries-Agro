import { StyleSheet } from 'react-native';
import { BGRED } from '../../shared/constants/color';

export const registrationStyle = StyleSheet.create({
    inputText: {
        marginVertical: 5,
        marginHorizontal: 20,
        height: 40,
        fontSize: 15,
        lineHeight: 20,
    },
    formTxt: {
        marginHorizontal: 35,
    },
    erroFormTxt: {
        color: BGRED,
        fontSize: 12,
        lineHeight: 13
    },
    btnGenerateOtp: {
        top: 0,
        marginBottom: 20
    },
    mainContainerView: {
        flex: 1, justifyContent: 'center'
    }

})