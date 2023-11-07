import React, { useState } from 'react';
import { View, SafeAreaView, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import { SEARCH_DEALER, SEARCH_PRODUCT, VIEW_TEXT } from '../../shared/constants/strings';
import { FarmerDashboardStyle } from './FarmerDashboardStyle';
import { TouchableOpacity } from 'react-native';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import NotificationIcon from '../../svg/NotificationIcon';
import ProfilePicIcon from '../../svg/ProfilePicIcon';
import Text from '../../components/texts/Text';
import DashboardFarmerIcon from '../../svg/DashboardFarmerIcon';
import ProductDetailsScreen from '../ProductScreen/ProductDetailsScreen';

const FarmerDashboard = (props: any) => {
    const image: any = (require('../../assets/backgroundImage.png'))

    return (
        <SafeAreaView style={FarmerDashboardStyle.dashboardContainer}>
            <View style={FarmerDashboardStyle.profileDetailsContainer}>
                <View>
                    <TouchableOpacity>
                        <View style={FarmerDashboardStyle.profileIcon}>
                            <ProfilePicIcon width={85} height={85} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={FarmerDashboardStyle.profilePic}>
                    <TextArchivoBold numberOfLines={1} style={FarmerDashboardStyle.fNameTxt}>Hello, </TextArchivoBold>
                    <TextArchivoBold numberOfLines={1} style={FarmerDashboardStyle.fNameTxt}>Ryan!</TextArchivoBold>
                </View>
                <View style={FarmerDashboardStyle.notification}>
                    <NotificationIcon width={25} height={25} />
                </View>
            </View>
            <View style={FarmerDashboardStyle.mainView}>
                <ImageBackground source={image} borderRadius={10} style={FarmerDashboardStyle.mainBody}
                    resizeMode="cover">
                    <View style={FarmerDashboardStyle.containerImg}>
                        <Text numberOfLines={2} style={FarmerDashboardStyle.headerText} >Award Winning</Text>
                        <Text numberOfLines={2} style={FarmerDashboardStyle.imgText}>Marketing &  </Text>
                        <Text numberOfLines={2} style={FarmerDashboardStyle.imgText}>Operations team </Text>
                        <Text numberOfLines={2} style={FarmerDashboardStyle.imgTextEnd}>Tips on Feeding the Future </Text>
                    </View>
                    <View style={FarmerDashboardStyle.farmerImg}>
                        <DashboardFarmerIcon />
                    </View>
                    <View style={FarmerDashboardStyle.containerImglastText}>
                        <Text numberOfLines={2} style={FarmerDashboardStyle.bottomText} >Join Us on 20th to 30th Oct</Text>
                    </View>
                </ImageBackground>
            </View>
            <ProductDetailsScreen />
        </SafeAreaView>
    )
}
export default FarmerDashboard