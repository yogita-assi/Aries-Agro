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
import { OrderData, salesData } from "../../../shared/constants/strings";
import OrderList from "./OrderList";

const OrderScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: any) => (
        <>
            <View style={orderStyle.renderItemView}>
                <View style={orderStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={orderStyle.txtProductName}>Total Orders</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>Pending Oredrs</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>Dilivered</CustomFontText>
                    </View>
                </View>
                <View style={orderStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.totalOrders}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.pendingOrders}</CustomFontText>
                        <CustomFontText style={orderStyle.txtProductName}>{item?.delivered}</CustomFontText>
                    </View>
                </View>
            </View>
        </>
    );
    return (
        <SafeAreaView style={orderStyle.dashboardContainer}>
            <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between', marginHorizontal: 10 }}>
                <View style={orderStyle.btnOrder}>
                    <CustomButton label={"Orders"} />
                </View>
                <Icon
                    type="entypo"
                    style={orderStyle.icon}
                    name="circle-with-plus"
                    size={25}
                />
            </View>
            <TextInput
                placeholder="Search"
                placeholderTextColor={BLACK}
                style={{ ...orderStyle.textInput }}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={OrderData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <OrderList />
        </SafeAreaView>
    )
}

export default OrderScreen