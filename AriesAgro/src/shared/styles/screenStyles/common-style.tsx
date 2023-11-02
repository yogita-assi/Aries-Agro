import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ArchivoBold, ArchivoExtraBold, ArchivoLight, ArchivoMedium, ArchivoSemiBold, BGRED, BLACK, BLUE, BLUEGRAY, BROWN, Blue_Alice, CGRAY, CYANBLUE, CYAN_BLUE, DARKBLUE, DARKGREY, GREEN, GREY, JPURPLE, LAVARED, LGREY, LIGHTBLACK, LIGHTBLUE, LIGHTGREY, MDGREEN, WHITE } from '../../constants/color';

export const commonStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1, backgroundColor: BLACK
    },
    emptyComponentImage: {
        alignSelf: "center"
    },
    dashboardContainer: {
        backgroundColor: BLACK
    },
    buttonTextMd: {
        fontSize: 12,
        lineHeight: 15
    },
    baseText: {
        fontSize: 20,
        marginHorizontal: 22,
        color: DARKBLUE,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 5,
    },
    btnStyle: {
        borderRadius: 5,
        backgroundColor: BROWN,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        height: 40,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    modalTextViewDocument: {
        color: JPURPLE,
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '500'
    },
    btnView: {
        marginBottom: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        width: widthPercentageToDP(25)
    },
    modalViewDocument: {
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOpacity: 0.25,
        padding: 10,
        borderRadius: 5,
        width: widthPercentageToDP(75)
    },
    formTxt: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        width: widthPercentageToDP(25)
    },
    btn: {
        borderRadius: 12
    },
    modalPresableViewDocument: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: Blue_Alice,
        marginVertical: 5,
        height: 40,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: LIGHTGREY,
        borderWidth: 1
    },
    buttonStyle: {
        backgroundColor: MDGREEN,
    },
    buttonDisabledStyle: {
        backgroundColor: LGREY,
    },
    buttonTitle: {
        color: WHITE
    },
    tabContainerStyle: {
        marginLeft: 10,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
    },
    tabIndicatorStyle: {
        backgroundColor: BGRED,
        height: 0,
    },
    specializationTabIndicatorStyle: {
        backgroundColor: LAVARED,
        height: 2,
    },
    activityIndicatorContainer: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100)
    },
    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LIGHTBLACK
    },
    modalView: {
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOpacity: 0.25,
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 40,
        width: widthPercentageToDP(75)
    },
    crossIconView: {
        position: "absolute",
        right: -25,
        top: -20,
        height: 30,
        alignItems: "center",
        width: 50
    },
    modalText: {
        fontSize: 20,
        color: JPURPLE,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    modalTextView: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        color: CYAN_BLUE,
        alignSelf: 'center'
    },
    parentBtnView: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonView: {
        width: widthPercentageToDP(20),
    },
    button: {
        borderRadius: 12,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: GREEN,
        marginTop: 20,
        width: widthPercentageToDP(60),
        marginBottom: 10,
        marginHorizontal: 80
    },
    buttonYesNo: {
        backgroundColor: BGRED,
        marginTop: 20,
        marginBottom: 10,

    },
    textStyle: {
        color: "white",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center"
    },
    emptyComponent: {
        height: heightPercentageToDP(80),
        justifyContent: "center",
        alignSelf: "center",
    },
    emptyComponentText: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: "center",
        marginHorizontal: 30
    },
    textArchioBold: {
        fontSize: 14,
        lineHeight: 16,
        color: WHITE,
        fontFamily: ArchivoBold,
    },
    textArchivoLight: {
        fontSize: 13,
        lineHeight: 16,
        color: JPURPLE,
        fontFamily: ArchivoLight,
    },
    textPoppinsMediumBold: {
        fontSize: 11,
        lineHeight: 16,
        color: LIGHTBLUE,
        fontFamily: ArchivoMedium,
    },
    textPoppinsExtraBold: {
        fontSize: 11,
        lineHeight: 16,
        color: LIGHTBLUE,
        fontFamily: ArchivoExtraBold,
    },
    formYesTxt: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    formbutton: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonYesStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: BROWN,
        marginBottom: 10,
        marginTop: 20,
        height: 40,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 20,
        textAlign: "center",
        fontWeight: '600',
    },
    buttonNoStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: Blue_Alice,
        height: 40,
        width: '60%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: GREEN,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formNoTxt: {
        color: CYAN_BLUE,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    customFontText: {
        fontSize: 14,
        lineHeight: 16,
        color: WHITE,
        fontFamily: ArchivoBold,
    },
    imageView: {
        height: 300
    },
    divider: {
        color: LIGHTGREY,
        height: 2,
        marginHorizontal: -10,
        marginVertical: 10
    },
    imageViewIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export const boxStyle = {
    shadowColor: GREY,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    borderRadius: 7,
    elevation: 3
};

export const specializationTabItemContainerStyle = (active: any) => ({
    backgroundColor: active ? LGREY : LGREY,
});

export const specializationTabItemTitleStyle = (active: any) => ({
    fontSize: 14, fontWeight: "700", fontFamily: ArchivoBold,
    color: active ? DARKGREY : CGRAY,
});

export const getTabItemContainerStyle = (active: any) => ({
    backgroundColor: active ? CYANBLUE : LGREY,
    borderRadius: 15,
    width: 50,
    paddingHorizontal: 0,
    marginHorizontal: 0,
});

export const getTabItemTitleStyle = (active: any) => ({
    paddingHorizontal: 0,
    color: active ? WHITE : DARKGREY,
    fontSize: 11,
    lineHeight: 12
});

export const getTabItemButtonStyle = (active: any) => ({
    backgroundColor: "green",
    padding: 0,
    margin: 0
});