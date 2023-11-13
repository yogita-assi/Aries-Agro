import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { FONTFAMILY_ISTOK_WEB, FONT_ELEVEN, FONT_FIFTEEN } from "../../../shared/constants/FontConstant";
import { ArchivoBold, BLACK, Blue_Alice, DGREY, GRAY_SHADE, GREEN, GREY, GREY_COLOR, JPURPLE, MERCURY, RED, WHITE } from "../../../shared/constants/color";

export const DealerScreenStyle = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
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
    contentView: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoText: {
        color: BLACK,
    },
    textEnterView: {
        height: 400,
    },

    buttonView: {
        flexDirection: 'row',
        color: RED
    },
    textInquiry: {
        marginHorizontal: 20,  
       
    },
    textView: {
        color: GREY_COLOR
    },
    buttonSubmit: {
        color: WHITE
    },
    buttonEditStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: Blue_Alice,
        height: 40,
        width: '30%',
        marginVertical: 10,
        marginHorizontal: 0,
        borderWidth: 1,
        borderColor: GREEN,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRightStyle: {
        color: GREY,
        fontSize: 14,
        textAlign: 'right'
    },
    textStyle1: {
        color: GREY,
        fontSize: 14,
    },
    textStyle: {
        color: DGREY,
        fontSize: 14,
    },
    childViewFlatlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    mainCardView: {
        flex: 1,
        backgroundColor: WHITE
    },
    textInputContainer: {
        marginVertical: 15,
        height: 40,
        color: BLACK,
        flexDirection: 'row',
    },
    noDataText: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    renderItemView: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: WHITE,
        borderColor: MERCURY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    area: {
        flex: 1,
        backgroundColor: WHITE,
    },
    textInput: {
        backgroundColor: WHITE,
        color: BLACK,
        borderWidth: 0.5,
        borderRadius: 8,
        width: 300,
        padding: 10
    },
    flatListContentContainer: {
        marginVertical: 20,
        paddingBottom: 20,
    },
    width: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: JPURPLE,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
    },
    gobackStyle: {
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        paddingLeft: 5,
        color: JPURPLE
    },
    renderView: {
        marginHorizontal: 10,
        backgroundColor: WHITE,
        paddingHorizontal: 10,
        paddingBottom: 8,
        marginTop: 10,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 2
    },
    image: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },
    buttonStyle: {
        paddingVertical: 10,
        backgroundColor: JPURPLE,
        width: widthPercentageToDP(30),
        borderRadius: 4,
    },
    cardContainer: {
        backgroundColor: WHITE,
        elevation: 8,
        marginHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 10
    },
    description: {
        fontSize: 12,
        color: BLACK,
        textTransform: 'capitalize',
    },
    rightBox: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: "40%"
    },
    rightLeftBoxContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    childMainView: {
        marginHorizontal: 5, width: "55%", marginTop: 5
    },
    //ViewProduct details
    imageViewContainer: {
        borderWidth: 0.2,
        alignSelf: 'center',
        borderRadius: 4,
        padding: 10,
        width: 230,
        marginTop: 10
    },
    txtProductInfo: {
        color: JPURPLE,
        fontSize: FONT_FIFTEEN,
        alignSelf: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    rowView: {
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 10,
        marginTop: 6
    },
    mainFieldView: {
        flex: 1,
        marginTop: 5
    },
    inputText: {
        marginHorizontal: 10,
        height: 40,
        fontSize: 15,
        lineHeight: 15,
        marginTop: 2,
        color: BLACK,
        width: 140
    },
    grayInputElement: {
        marginTop: 10,
        borderColor: GRAY_SHADE,
        color: WHITE,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
    },
    grayTitle: {
        color: GRAY_SHADE,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        position: 'absolute',
        backgroundColor: WHITE,
        lineHeight: 17.7,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTFAMILY_ISTOK_WEB
    },
    seeMoreButton: {
        color: 'blue',
        fontSize: 10,
    },
    mainInquiryView: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: WHITE,
    }
});