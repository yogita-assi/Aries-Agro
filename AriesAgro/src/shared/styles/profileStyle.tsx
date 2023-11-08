import { StyleSheet } from 'react-native';
import { BGRED, LIGHTGREY, WHITE } from '../../shared/constants/color';

export const profileStyle = StyleSheet.create({
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
        marginHorizontal: 15,
        backgroundColor: WHITE,
        borderRadius: 5,
    },
    inputText: {
        marginVertical: 5,
        marginHorizontal: 25,
        height: 39,
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
    },
    imageView: {
        alignSelf: 'center'
    }

})