import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../guards/AuthNavigator";
import { View, TextInput, FlatList } from "react-native";
import CustomButton from "../components/button/CustomButton";
import { inventoryStyle } from "../shared/styles/inventoryStyle";
import { Icon } from "@rneui/base";
import { BLACK } from "../shared/constants/color";
import CustomFontText from "../fontfamily/CustomFontText";
import { OrderData, salesData } from "../shared/constants/strings";
import OrderList from "./BottomTab/Order/OrderList";

const InventoryStatus = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: any) => (
        <>
            <View style={inventoryStyle.renderItemView}>
                <View style={inventoryStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={inventoryStyle.txtProductName}>Total Stock</CustomFontText>
                        <CustomFontText style={inventoryStyle.txtProductName}>Zinc fertilizers</CustomFontText>
                        <CustomFontText style={inventoryStyle.txtProductName}>Iron fertilizers: 500</CustomFontText>
                    </View>
                </View>
                <View style={inventoryStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={inventoryStyle.txtProductName}>{item?.totalOrders}</CustomFontText>
                        <CustomFontText style={inventoryStyle.txtProductName}>{item?.pendingOrders}</CustomFontText>
                        <CustomFontText style={inventoryStyle.txtProductName}>{item?.delivered}</CustomFontText>
                    </View>
                </View>
            </View>
        </>
    );
    return (
        <SafeAreaView style={inventoryStyle.dashboardContainer}>
            <View style={inventoryStyle.btnOrder}>
                <CustomButton label={"Inventory"} />
            </View>
            <TextInput
                placeholder="Search"
                placeholderTextColor={BLACK}
                style={{ ...inventoryStyle.textInput }}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={OrderData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default InventoryStatus