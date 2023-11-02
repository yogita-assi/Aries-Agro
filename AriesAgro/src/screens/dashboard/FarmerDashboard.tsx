import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View, SafeAreaView, Platform, RefreshControl, ToastAndroid } from 'react-native';
import TopHeaderFixed from '../../shared/constants/TopHeaderFixed';
import CustomButton from '../../components/button/CustomButton';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from '../../components/inputs/CustomTextInput';
import { SEARCH_PRODUCT } from '../../shared/constants/strings';
import { FarmerDashboardStyle } from './FarmerDashboardStyle';



const FarmerDashboard = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const addNewProduct = () => {

    }
    return (
        <SafeAreaView style={FarmerDashboardStyle.dashboardContainer}>
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Farmer Dashboard"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>

            <View style={FarmerDashboardStyle.mainView}>
                <View style={FarmerDashboardStyle.flexView}>
                    <CustomTextInput
                        style={FarmerDashboardStyle.inputText}
                        placeholder={SEARCH_PRODUCT}
                        right="close"
                    />
                </View>

            </View>
            {/* <CustomButton style={FarmerDashboardStyle.AddUserbtnStyle} label='Add New Product' onPress={() => addNewProduct()} /> */}
        </SafeAreaView>



    )
}
export default FarmerDashboard