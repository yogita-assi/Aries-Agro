
import { StyleSheet } from 'react-native';
import { ArchivoBold, BGRED, BLACK, BROWN, Blue_Alice, EXTRA_LIGHTGREY, GREEN, GREY, JPURPLE, LIGHTGREY, WHITE } from '../../shared/constants/color';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const dropDownPickerStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    productText: {
        marginVertical: 5,
        fontSize: 14,
        color: GREY,
        lineHeight: 20
    },
    inputText: {
        height: 40,
        fontSize: 14,
        lineHeight: 20,
    },
    formYesTxt: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    formNoTxt: {
        color: JPURPLE,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    formbutton: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    buttonYesStyle: {
        backgroundColor: BROWN,
        width: '45%',
        marginVertical: 0,
        marginHorizontal: 0

    },
    updateButton: {
        marginBottom: 0,
        marginHorizontal: 0
    },
    buttonNoStyle: {
        backgroundColor: Blue_Alice,
        width: '45%',
        borderWidth: 1,
        borderColor: GREEN,
        marginVertical: 0,
        marginHorizontal: 0
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    AddUserbtnStyle: {
        marginHorizontal: 0,
        marginVertical: 0,
        width: widthPercentageToDP(30),
    },
    viewElement: {
        borderRadius: 10,
        backgroundColor: WHITE,
        elevation: 5,
        top: 5
    },
    iosDate: {
        borderWidth: 1,
        borderColor: LIGHTGREY,
        fontSize: 14,
        lineHeight: 20,
        borderRadius: 10,
        padding: 2,
    },
    userTypeView: {
        height: 42,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: LIGHTGREY,
    },
    userTypeView1: {
        height: 42,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: EXTRA_LIGHTGREY,
    },
    userTypeViewRbsheet: {
        height: 42,
        marginBottom: 20
    },
    userTypeViewRbsheet1: {
        marginBottom: 5
    },
    formTxt: {
        marginTop: 5
    },
    erroFormTxt: {
        color: BGRED,
        fontSize: 12,
        lineHeight: 13
    },
    iosText: {
        color: BLACK,
        lineHeight: 22,
    },
    state: {
        height: 40,
        fontSize: 14,
    },
    searchPlace: {
        fontSize: 16,
        fontFamily: ArchivoBold,
        backgroundColor: WHITE,
    },
})