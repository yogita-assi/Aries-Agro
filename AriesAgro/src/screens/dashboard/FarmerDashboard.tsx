import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ImageBackground, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import { SEARCH_DEALER, SEARCH_PRODUCT, VIEW_TEXT, productData, productData1 } from '../../shared/constants/strings';
import { FarmerDashboardStyle } from './FarmerDashboardStyle';
import { TouchableOpacity } from 'react-native';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import NotificationIcon from '../../svg/NotificationIcon';
import ProfilePicIcon from '../../svg/ProfilePicIcon';
import Text from '../../components/texts/Text';
import DashboardFarmerIcon from '../../svg/DashboardFarmerIcon';
import ProductDetailsScreen from '../ProductScreen/ProductDetailsScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
import { WalkStyle } from '../style/WalkStyle';
import IntroSliderFirstImage from '../../svg/IntrosliderSvg/IntroSliderFirstImage';
import dashboardApi from '../../api/dashboardApi';
import { BLACK } from '../../shared/constants/color';
import { flatlistView } from '../../shared/constants/ListUI';
import SimilarProductScreen from '../ProductScreen/SimilarProductScreen';
interface Slide {
    key: string;
    title: string;
    text: string;
    path: React.ReactNode;
}

const slides: any = [
    {
        key: '1',
        title: 'Welcome to our App!',
        text: 'Get started with amazing features',
        image: <IntroSliderFirstImage />, // Replace this with the path to your image
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        title: 'Discover Products',
        text: 'Explore a variety of products',
        image: <IntroSliderFirstImage />, // Replace this with the path to your image
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        title: 'Discover Products',
        text: 'Explore a variety of products',
        image: <IntroSliderFirstImage />, // Replace this with the path to your image
        backgroundColor: '#febe29',
    },
];
const FarmerDashboard = (props: any) => {
    const image: any = (require('../../assets/backgroundImage.png'))
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [refreshing, setRefreshing] = useState(false);


    const onSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };

    useEffect(() => {
        getCampainList()
    }, [])

    const getCampainList = async () => {
        const requestBody = {
            pageSize: 10,
            pageNumber: 1
        }
        try {
            const response = await dashboardApi.campaignList(requestBody);
            console.log(response?.data)
            setData(response?.data?.data)
        } catch (error) {
            console.log(error)
        }
    }
    const renderItem = ({ item }: { item: Slide }) => {
        return (
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
        );
    };
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
            <AppIntroSlider
                renderItem={renderItem}
                data={slides}
                showNextButton={false}
                onSlideChange={onSlideChange}
                activeDotStyle={FarmerDashboardStyle.activeDotStyle}
                dotStyle={FarmerDashboardStyle.dotStyle}
            />
            <SimilarProductScreen />
        </SafeAreaView>
    )
}
export default FarmerDashboard