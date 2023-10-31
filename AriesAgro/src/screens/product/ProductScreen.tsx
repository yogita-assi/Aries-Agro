import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View, SafeAreaView, Platform, RefreshControl, ToastAndroid } from 'react-native';
import TopHeaderFixed from '../../shared/constants/TopHeaderFixed';
import CustomButton from '../../components/button/CustomButton';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import { productScreenStyle } from './productScreenStyle';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import { SEARCH_PRODUCT } from '../../shared/constants/strings';



const ProductScreen = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const addNewProduct = () => {

    }
    return (
        <SafeAreaView style={productScreenStyle.dashboardContainer}>
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Product List"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>

            <View style={productScreenStyle.mainView}>
                <View style={productScreenStyle.flexView}>
                    <CustomTextInput
                        style={productScreenStyle.inputText}
                        placeholder={SEARCH_PRODUCT}
                        right="close"
                    />
                </View>

            </View>
            <CustomButton style={productScreenStyle.AddUserbtnStyle} label='Add New Product' onPress={() => addNewProduct()} />
        </SafeAreaView>
    )
}
export default ProductScreen