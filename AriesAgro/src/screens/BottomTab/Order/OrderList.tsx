import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../guards/AuthNavigator";
import { View, TextInput, FlatList } from "react-native";
import CustomButton from "../../../components/button/CustomButton";
import { orderStyle } from "../../../shared/styles/orderStyle";
import { Icon } from "@rneui/base";
import { BLACK } from "../../../shared/constants/color";
import CustomFontText from "../../../fontfamily/CustomFontText";
import { OrderData, orderListData, salesData } from "../../../shared/constants/strings";

const OrderList = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: any) => (
        <>
            <View style={orderStyle.renderItem}>
                <View style={orderStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.productCode}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.productName}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.date}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.invoiceGenerated}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.status}</CustomFontText>
                    </View>
                </View>
                <View style={orderStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.totalValue}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.productPrize}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.productItem} Items</CustomFontText>
                        <View style={orderStyle.btnReorder}>
                            <CustomButton label={"Reorder"} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
    return (
        <SafeAreaView style={orderStyle.dashboardContainer}>
            <View>
                <FlatList
                    data={orderListData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default OrderList