import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ArchivoBold, BLACK, GRAY_BORDER, GREEN, GREY, GREY_BORDER, JPURPLE, LIGHTGREY, RED, WHITE } from '../../shared/constants/color';
import { FONT_ELEVEN } from '../../shared/constants/FontConstant';


export const FarmerDashboardStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    mainView: {
        marginHorizontal: 20,
        // flex: 1,
        // justifyContent: 'flex-start'
    },
    flexView: {
        marginVertical: 5,
    },
    inputText: {
        height: 40,
        fontSize: 14,
        lineHeight: 20,
    },
    AddUserbtnStyle: {
        marginVertical: 5,
    },
    searchView: {
        marginVertical: 5,
        flexDirection: 'row',
        width: '85%'
    },
    renderItemView: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: WHITE,
        borderColor: GREEN
    },
    childViewFlatlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10
    },
    textStyle: {
        color: GREY,
        fontSize: 14,
    },
    remarkTextStyle: {
        fontSize: 14,
        color: GREY,
        marginHorizontal: 10
    },
    buttonStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: "30%",
        alignSelf: 'flex-end'
    },
    profileDetailsContainer: {
        backgroundColor: "white",
        // paddingVertical: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: LIGHTGREY
    },
    icon: {
        position: 'absolute',
        bottom: 2,
        right: 0,
        backgroundColor: LIGHTGREY,
        borderRadius: 11,
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helloTxt: {
        fontSize: 16,
        lineHeight: 20,
        color: GREEN,
    },
    fNameTxt: {
        fontSize: 16,
        lineHeight: 20,
        color: JPURPLE,
    },
    profilePic: {
        marginLeft: 20,
        flexDirection: 'row'
    },
    notification: {
        flexDirection: 'row',
        marginHorizontal: 90,
        marginBottom: 20
    },
    profileIcon: {
        flexDirection: 'row'
    },
    mainBody: {
        height: 180,
        width: '100%',
        backgroundColor: WHITE,
    },
    backgrndImg: {
        height: 25,
        marginHorizontal: 10,
        background: "rgba(0, 0, 0, 0.8)"
    },
    imgHeaderText: {
        color: BLACK,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: heightPercentageToDP(15),
    },
    containerImg: {
        position: "absolute",
        // height: "100%",
        // width: "100%",
        borderRadius: 10
    },
    containerImglastText: {
        position: "absolute",
        bottom: 0,
        backgroundColor: 'green',
        height: 30,
        justifyContent: 'center',
        // height: "100%",
        // width: "100%",
        borderRadius: 10
    },
    farmerImg: {
        position: "absolute",
        height: "100%",
        marginHorizontal: 33
    },
    imgText: {
        color: WHITE,
        lineHeight: 21,
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 3
    },
    bottomText: {
        color: WHITE,
        lineHeight: 18,
        fontSize: 14,
        marginHorizontal: 5,
    },
    headerText: {
        color: BLACK,
        lineHeight: 20,
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 500
    },
    imgTextEnd: {
        color: BLACK,
        lineHeight: 14,
        fontSize: 12,
        marginHorizontal: 10,
        marginTop: 10,
    },
    mainBodyIcon: {
        height: 40,
        width: '70%',
        position: 'absolute',
        marginHorizontal: 10,
        // marginTop: 140
    },
    textInput: {
        backgroundColor: WHITE,
        color: BLACK,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 10,
        // width: 320
    },
    textInputContainer: {
        // marginVertical: 40,
        height: 40,
        color: BLACK,
        // flexDirection: 'row',
    },
    rightLeftBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-start',
        paddingVertical: 10,
        // flex: 1,
        // gap: 2,
    },
    imageContainer: {
        borderWidth: 0.5,
        borderColor: GREY_BORDER,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 5,
        padding: 5
    },
    cardContainer: {
        backgroundColor: WHITE,
        // elevation: 8,
        borderWidth: 0.5,
        borderColor: GRAY_BORDER,
        // marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
    },
    txtMoreDetails: {
        fontSize: FONT_ELEVEN,
        fontFamily: ArchivoBold,
        lineHeight: 30,
        color: JPURPLE,
        marginHorizontal: 12,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: JPURPLE,
        width: 70
    },
    productContainer: {
        // flex:1,
        marginHorizontal: 20,
        marginVertical: 10
    }
})