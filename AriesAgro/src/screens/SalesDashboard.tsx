import React from 'react';
import { View, SafeAreaView, ImageBackground, TextInput } from 'react-native';
import { salesDashboardStyle } from '../shared/commonStyle/salesDashboardStyle';
import TextArchivoBold from '../shared/fontfamily/TextArchivoBold';
import NotificationIcon from '../svg/NotificationIcon';
import Text from '../components/texts/Text';
import DashboardFarmerIcon from '../svg/DashboardFarmerIcon';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroSliderFirstImage from '../svg/IntrosliderSvg/IntroSliderFirstImage';
import SalesList from './SalesList';

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
        image: <IntroSliderFirstImage />,
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        title: 'Discover Products',
        text: 'Explore a variety of products',
        image: <IntroSliderFirstImage />,
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        title: 'Discover Products',
        text: 'Explore a variety of products',
        image: <IntroSliderFirstImage />,
        backgroundColor: '#febe29',
    },
];
const SalesDashboard = (props: any) => {
    const image: any = (require('../assets/backgroundImage.png'))
    const renderItem = ({ item }: { item: Slide }) => {
        return (
            <View>
                <ImageBackground source={image} borderRadius={10} style={salesDashboardStyle.mainBody}
                    resizeMode="cover">
                    <View style={salesDashboardStyle.containerImg}>
                        <Text numberOfLines={2} style={salesDashboardStyle.headerText} >Award Winning</Text>
                        <Text numberOfLines={2} style={salesDashboardStyle.imgText}>Marketing &  </Text>
                        <Text numberOfLines={2} style={salesDashboardStyle.imgText}>Operations team </Text>
                        <Text numberOfLines={2} style={salesDashboardStyle.imgTextEnd}>Tips on Feeding the Future </Text>
                    </View>
                    <View style={salesDashboardStyle.farmerImg}>
                        <DashboardFarmerIcon />
                    </View>
                    <View style={salesDashboardStyle.containerImglastText}>
                        <Text numberOfLines={2} style={salesDashboardStyle.bottomText} >Join Us on 20th to 30th Oct</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    };
    return (
        <SafeAreaView style={salesDashboardStyle.dashboardContainer}>
            <View style={salesDashboardStyle.profileDetailsContainer}>
                <View style={salesDashboardStyle.profilePic}>
                    <View style={{ marginVertical: 30,marginHorizontal:30}}>
                        <TextArchivoBold numberOfLines={1} style={salesDashboardStyle.fNameTxt}>Hello, </TextArchivoBold>
                        <TextArchivoBold numberOfLines={1} style={salesDashboardStyle.txtCreateNewOrder}>Create new order</TextArchivoBold>
                    </View>
                </View>
                <View style={salesDashboardStyle.notification}>
                    <NotificationIcon width={25} height={20} />
                </View>
            </View>
            <AppIntroSlider
                renderItem={renderItem}
                data={slides}
                showNextButton={false}
                activeDotStyle={salesDashboardStyle.activeDotStyle}
                dotStyle={salesDashboardStyle.dotStyle}
            />
            <SalesList />
        </SafeAreaView>
    )
}
export default SalesDashboard;