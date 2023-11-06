import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View, SafeAreaView, Platform, RefreshControl, ToastAndroid, ImageBackground, StatusBar, TextInput } from 'react-native';
import TopHeaderFixed from '../../shared/constants/TopHeaderFixed';
import CustomButton from '../../components/button/CustomButton';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from '../../components/inputs/CustomTextInput';
import { SEARCH_DEALER, SEARCH_PRODUCT, VIEW_TEXT } from '../../shared/constants/strings';
import { FarmerDashboardStyle } from './FarmerDashboardStyle';
import { Image } from "react-native";
import CustomFontText from '../../fontfamily/CustomFontText';
import { TouchableOpacity } from 'react-native';
import { BLACK, WHITE } from '../../shared/constants/color';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import NotificationIcon from '../../svg/NotificationIcon';
import ProfilePicIcon from '../../svg/ProfilePicIcon';
import Text from '../../components/texts/Text';
import DashboardFarmerIcon from '../../svg/DashboardFarmerIcon';
import { flatlistView, renderViewChild } from '../../shared/constants/ListUI';
import { productData } from '../../shared/constants/strings';
import IntroSliderFirstImage from '../../svg/IntrosliderSvg/IntroSliderFirstImage';

export const data = [
    {
        "name": "Krushi Furtilizer",
        "information": "Baner Pune 411011",
        "rating": "*****",
        "direction": "",
        "Generate Enquiry": "",

    },
]
const FarmerDashboard = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchText, setSearchText] = useState("");

    const handleUploadImage = () => {

    }
    const image: any = (require('../../assets/backgroundImage.png'))
    const image1: any = (require('../../assets/endIcon.png'))


    const renderItem = (item: any) => {
        return (
            <View
                style={FarmerDashboardStyle.rightLeftBoxContainer}>
                <View style={FarmerDashboardStyle.imageContainer}>
                    <IntroSliderFirstImage height={147} />
                </View>
                <View>
                    <View style={FarmerDashboardStyle.cardContainer}>
                        {renderViewChild(item?.name || 'N/A', 'Product Name', item?.information || 'N/A', 'Product Information')}
                        {renderViewChild(item?.rating || 'N/A', 'Rating', item?.ratin || 'N/A', 'Category')}
                    </View>
                    <TextArchivoBold style={FarmerDashboardStyle.txtMoreDetails}>More Details</TextArchivoBold>
                </View>
            </View>
        )
    }
    return (
            <SafeAreaView style={FarmerDashboardStyle.dashboardContainer}>
                <View style={FarmerDashboardStyle.profileDetailsContainer}>
                    <View>
                        <TouchableOpacity onPress={() => handleUploadImage()}>
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
                <View style={FarmerDashboardStyle.productContainer}>
                    <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
                    <View style={FarmerDashboardStyle.textInputContainer}>
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor={BLACK}
                            style={{ ...FarmerDashboardStyle.textInput }}
                            value={searchText}
                        />
                    </View>
                    {flatlistView(productData, renderItem, "", "", "")}
                </View>
            </SafeAreaView>
    )
}
export default FarmerDashboard