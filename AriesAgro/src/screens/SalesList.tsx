import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { salesListStyle } from '../shared/styles/salesListStyle';
import { salesData } from '../shared/constants/strings';
import { FlatList } from 'react-native';
import CustomFontText from '../fontfamily/CustomFontText';

const SalesList = () => {
    const renderItem = ({ item }: any) => (
        <>
            <View style={salesListStyle.renderItemView}>
                <View style={salesListStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.order}</CustomFontText>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.invoiceGenerated}</CustomFontText>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.dispatched}</CustomFontText>
                    </View>
                </View>
                <View style={salesListStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.totalOrder}</CustomFontText>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.totalInvoice}</CustomFontText>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.totalDispatched}</CustomFontText>
                    </View>
                </View>
            </View>
            <View style={salesListStyle.renderItemView}>
                <View style={salesListStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.pendingOrders}</CustomFontText>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.approvalNeeded}</CustomFontText>
                    </View>
                </View>
                <View style={salesListStyle.childViewFlatlist}>
                    <View>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.totalPendingOrders}</CustomFontText>
                        <CustomFontText style={salesListStyle.txtProductName}>{item?.totalApproval}</CustomFontText>
                    </View>
                </View>
            </View>
        </>
    );
    return (
        <SafeAreaView style={salesListStyle.mainCardView}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={salesData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default SalesList;