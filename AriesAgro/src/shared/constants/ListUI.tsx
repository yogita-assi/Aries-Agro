import React from "react";
import { FlatList, Pressable, RefreshControl, StyleSheet, TextInput, View } from "react-native";
import { IconButton } from "react-native-paper";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { DATE_FORMAT_PLACE } from "./strings";
import { listUiCommonStyle } from "../commonStyle/listUiCommonStyle";
import TopHeaderFixed from "./TopHeaderFixed";
import { FONTFAMILY_INTER, FONTFAMILY_ISTOK_WEB } from "../../shared/constants/FontConstant";
import { BGRED, BLACK, BLUE_COLOR, GRAY_SHADE, GREY_BORDER, LIGHTBLACK, LIGHTGREY, VERYDARK_GRAYISHRED, WHITE, WHITE_BACKGROUND } from "../../shared/constants/color";
import TextArchivoBold from "../fontfamily/TextArchivoBold";
import CustomButton from "../../components/button/CustomButton";
import horizantalLine from "./horizantalLine";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import Calendar from "../../screens/Calender/CustomCalendar";
import NoRecordFound from "./NoRecordFound";
import AlertModal from "./AlertModal";

export const headerView = (title: string, onPress: any) => {
    return (
        <TopHeaderFixed
            headerTxt={title}
            rightIcon="menu"
            rightIconType="Entypo"
            rightIconSize={20}
            onSettingScreen={() => onPress?.openDrawer()}
        />
    )
}

export const renderViewChild = (value: any, title: any, valueSecond: any, titleSecond: any) => {
    return (
        <View>
            {rowData(value, title, style.textHeaderStyle, style.textTitleStyle, '')}
            {rowData(valueSecond, titleSecond, style.textHeaderStyle, style.textTitleStyle, '')}
        </View>
    )
}
export const renderViewChildOther = (value: any, title: any, valueSecond: any, titleSecond: any) => {
    return (
        <View style={style.viewRowSpacePaddingwithMargin}>
            {rowData(value, title, style.textHeaderStyle, style.textTitleStyle, '')}
            {rowData(valueSecond, titleSecond, style.textHeaderLeftStyle, style.textLeftTitleStyle, '')}
        </View>
    )
}
export const renderViewChildinput = (value: any, title: any, valueSecond: any, titleSecond: any) => {
    return (
        <View style={style.viewRowSpacePadding}>
            {rowData(value, title, style.textHeaderStyle, style.textTitleStyle, '')}
            {rowData(valueSecond, titleSecond, style.textHeaderLeftStyle, style.textLeftTitleStyle, '')}
        </View>
    )
}
export const renderViewChildThree = (value: any, title: any, valueSecond: any, titleSecond: any, valueThird: any, titleThird: any, data: any, onChange: any, index: any, disable: any) => {
    return (
        <View style={data ? style.viewRowSpace : style.viewRowSpacePaddingwithMargin}>
            {title !== 'Quantity' ? rowData(value, title, style.textHeaderStyle, style.textTitleStyle, style.ViewStyle) :
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={listUiCommonStyle.inputView}
                        onChangeText={(text) => onChange(text, index)}
                        value={value ? value.toString() : ''}
                        keyboardType="numeric"
                        editable={disable}
                    />
                    <TextArchivoBold style={listUiCommonStyle.textHeaderStyle}>{title}</TextArchivoBold>
                </View>
            }

            {rowData(valueSecond, titleSecond, style.textHeaderStyle, style.textTitleStyle, {
                ...style.ViewStyle, alignItems: 'center'
            })}
            {titleThird ? rowData(valueThird, titleThird, style.textHeaderLeftStyle, style.textLeftTitleStyle, style.ViewStyle) :
                <View style={style.iconViewStyle}>
                    {pressableIcon('delete', 20, !disable ? () => onChange(index) : () => '', !disable ? BGRED : GREY_BORDER)}
                </View>
            }
        </View>
    )
}

export const deletIcon = (index: any, disable: any, onChange: any) => {
    return (
        <View style={style.iconViewStyleDelete}>
            {pressableIcon('delete', 15, !disable ? () => onChange(index) : () => '', !disable ? BGRED : GREY_BORDER)}
        </View>
    )
}
export const renderViewChildDownload = (value: any, title: any, item: any, download: any, onPressDelete: any, onPress: any) => {
    return (
        <View style={style.viewRowSpacePadding}>
            {rowData(value, title, style.textHeaderStyle, style.textTitleStyle, '')}
            <View style={style.viewFlexRow}>
                {pressableIcon('download', 20, () => download(item?.purchaseId ? item?.purchaseId : item), VERYDARK_GRAYISHRED)}
                {buttonView(item, onPressDelete, onPress)}
            </View>
        </View>
    )
}

export const flatlistView = (data: any, renderItem: any, refreshing: any, onRefreshFunction: any, onEndReached: any) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }: any) => renderItem(item, index)}
            ListEmptyComponent={data ? <NoRecordFound title={'No Record Found'} text='Please try another user' /> : null}
        />
    )
}

export const pressableIcon = (iconName: any, iconSize: any, onPressIcon: any, iconColor: any) => {
    return (
        <Pressable style={{ width: 35 }} onPress={onPressIcon}>
            <IconButton icon={iconName} size={iconSize} iconColor={iconColor} />
        </Pressable>
    )
}

export const buttonView = (item: any, onPressDelete: any, onPressView: any) => {
    return (
        <View style={style.viewFlexRow}>
            {pressableIcon('eye', 20, () => onPressView(item), VERYDARK_GRAYISHRED)}
            {/* {pressableIcon('delete', 20, () => onPressDelete(item?.purchaseOrderId ? item?.purchaseOrderId : item), BGRED)} */}
        </View>
    )
}
export const rowData = (value: any, title: any, titleStyle: any, valueStyle: any, style: any) => {
    return (
        <View style={style}>
            <TextArchivoBold style={titleStyle}>{title}</TextArchivoBold>
            <TextArchivoBold style={valueStyle}>{value}</TextArchivoBold>
        </View>
    )
}

export const amountView = (title: any, value: any) => {
    return (
        <View style={style.childViewModal}>
            <TextArchivoBold style={style.amountStyle}>{title}</TextArchivoBold>
            <View>
                <TextArchivoBold style={style.amountStyle}>{`₹ ${value}`}</TextArchivoBold>
            </View>
        </View>
    )
}

export const alertModalView = (modalVisible: any, setModalVisible: any, onProceed: any, onCancel: any) => {
    return (
        <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible}
            header={"Important Notification"}
            firstLineContent="Are you sure you want to delete this record"
            btn="Continue"
            no="Cancel"
            btnCancel="Cancel"
            onProceed={() => onProceed()}
            onCancel={() => onCancel()}
            closeIcon={true}
        />
    )
}

export const getPurchaseOrderDetails = async (
    formValue: any,
    pageNumber: any,
    isLoading: any,
    setRefreshing: any,
    setIsLoading: any,
    setFormValue: any,
    setTotalPage: any,
    setPageNumber: any,
    setLoader: any,
    openModal: any,
    api: any,
    array: any
) => {
    const payload = {
        pageNumber: pageNumber,
        pageSize: 10,
        isActive: true,
        search: formValue?.supplierName?.toString() || '',
        fromDate: null,
        toDate: null,
        isConverted: false,
    }
    if (isLoading) {
        return
    }
    console.log('payload purchase', payload)
    try {
        setRefreshing(true)
        setIsLoading(true)
        const response = await api(payload);
        if (formValue?.supplierName) {
            if (pageNumber == 1) {
                setFormValue({ ...formValue, [array]: response.data.data })
                setTotalPage(response?.data?.totalPages)
            } else {
                const value: any = [...formValue?.[array], ...response?.data?.data]
                setTotalPage(response?.data?.totalPages)
                setFormValue({ ...formValue, [array]: value })
            }
        }
        else if (pageNumber == 1) {
            setFormValue({ ...formValue, [array]: response.data.data })
            setTotalPage(response?.data?.totalPages)
        } else {
            const value: any = [...formValue?.[array], ...response?.data?.data]
            setTotalPage(response?.data?.totalPages)
            setFormValue({ ...formValue, [array]: value })
        }
        setRefreshing(false)
        setLoader(true);
    } catch (error: any) {
        setLoader(true);
        openModal(error?.message);
    } finally {
        setIsLoading(false)
    }
}

export const addButtonView = (title: string, onPress: any) => {
    return (
        <CustomButton
            label={title}
            style={style.addOrderButton}
            textstyle={style.buttonTextStyle}
            onPress={() => onPress()} />
    )
}

export const calendarView = (purchaseDate: any, onDateChange: any, disable: any, title: any) => {
    return (
        <Calendar
            placeTitle={DATE_FORMAT_PLACE}
            viewStyle={style.dateViewStyle}
            titleText={title}
            titleStyle={style.dateTitleStyle}
            value={purchaseDate}
            onChange={onDateChange}
            style={style.dateCustomStyle}
            disable={disable}
            maximumDate={new Date(`${new Date().getFullYear() + 1}-03-31`)}
            minimumDate={new Date(`${new Date().getFullYear()}-04-01`)}
        />
    )
}

export const inputView = (title: any, value: any, placename: any, onValueChange: any) => {
    return (
        <CustomTextInput
            title={title}
            style={style.inputTextStyle}
            viewStyle={style.inputElement}
            titleStyle={style.titleStyle}
            value={value}
            onChange={() => onValueChange()}
            placeName={placename}
            isEditable={onValueChange ? false : true}
        />
    )
}

const style = StyleSheet.create({
    childViewModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        marginHorizontal: 15
    },
    amountStyle: {
        color: BLACK,
        lineHeight: 20.03,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontWeight: '400',
        fontSize: 14,
    },
    horizontalDashedLine: {
        borderBottomColor: BLACK,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
    },
    ViewStyle: {
        flex: 1,
    },
    inputTextStyle: {
        marginHorizontal: 10,
        height: 38,
        fontSize: 15,
        lineHeight: 15,
        marginTop: 2,
        color: GRAY_SHADE
    },
    inputElement: {
        marginVertical: 10,
        borderColor: WHITE_BACKGROUND,
        color: WHITE,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginHorizontal: 10
    },
    titleStyle: {
        color: LIGHTGREY,
        marginHorizontal: 20,
        paddingHorizontal: 5,
        position: 'absolute',
        backgroundColor: WHITE,
        lineHeight: 17.7,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTFAMILY_ISTOK_WEB
    },
    dateTitleStyle: {
        color: BLACK,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        position: 'absolute',
        backgroundColor: WHITE,
        fontSize: 11,
        fontWeight: '400',
        fontFamily: FONTFAMILY_ISTOK_WEB
    },
    dateCustomStyle: {
        height: 40,
        fontSize: 12,
        backgroundColor: WHITE,
    },
    dateViewStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    viewFlexRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    viewRowSpacePadding: {
        paddingTop: 8,
        elevation: 8,
        backgroundColor: WHITE,
        borderRadius: 5,
    },
    viewRowSpacePaddingwithMargin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        marginHorizontal: 15
    },
    viewRowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    cancelButtonStyle: {
        borderWidth: 0.5,
        borderColor: BLUE_COLOR,
        backgroundColor: WHITE,
        width: widthPercentageToDP(25),
        marginHorizontal: 0,
        marginVertical: 5,
    },
    cancelTextStyle: {
        color: GRAY_SHADE,
        lineHeight: 23.03,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontWeight: '400',
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: BLUE_COLOR,
        width: widthPercentageToDP(25),
        marginHorizontal: 0,
        marginVertical: 5,
    },
    downloadbuttonStyle: {
        backgroundColor: BLUE_COLOR,
        width: widthPercentageToDP(25),
        marginHorizontal: 0,
        marginVertical: 2,
    },
    buttonTextStyle: {
        color: WHITE,
        lineHeight: 23.03,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontWeight: '400',
        fontSize: 16,
    },
    textTitleStyle: {
        color: BLACK,
        lineHeight: 17.17,
        fontFamily: FONTFAMILY_INTER,
        fontSize: 11,
        fontWeight:'200'
    },
    textLeftTitleStyle: {
        color: BLACK,
        lineHeight: 17.17,
        fontFamily: FONTFAMILY_INTER,
        fontWeight: '400',
        fontSize: 14,
        alignSelf: 'flex-end'
    },
    textHeaderStyle: {
        color:BLACK,
        lineHeight: 17.17,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontSize: 10,
        fontWeight:'bold',
    },
    textHeaderLeftStyle: {
        lineHeight: 17.17,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontWeight: '400',
        fontSize: 10,
        alignSelf: 'flex-end'
    },
    addOrderButton: {
        backgroundColor: BLUE_COLOR,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    productView: {
        marginTop: 10,
        backgroundColor: WHITE,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: LIGHTBLACK,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 5
    },
    iconViewStyle: {
        flex: 1,
        alignItems: 'flex-end',
    },
    iconViewStyleDelete: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    },
})