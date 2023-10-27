import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { FONT_EIGHTEEN } from '../shared/constants/FontConstant';
import { BLACK, LIGHT_SILVER, VERYDARK_GRAYISHRED, WHITE } from '../shared/constants/color';


export const ModalContext_Style = StyleSheet.create({
    modalViewParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCard: {
        paddingTop: 20,
        shadowColor: LIGHT_SILVER,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.6,
        borderRadius: 6,
        backgroundColor: WHITE,
        elevation: 8,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        borderColor: LIGHT_SILVER,
        borderWidth: 1,
        width: widthPercentageToDP(80)
    },
    textStyle: {
        alignSelf: 'center',
        color: BLACK,
        fontSize: 15,
        fontWeight: '400',
    },
    okButton: {
        borderRadius: 10,
        marginHorizontal: 20,
        height: 40,
        alignSelf: 'center',
        width: widthPercentageToDP(40)
    },
    okTextStyle: {
        fontSize: FONT_EIGHTEEN,
        fontWeight: '700',
        color: VERYDARK_GRAYISHRED,
        textAlign: 'center',
        lineHeight: 30
    },
})