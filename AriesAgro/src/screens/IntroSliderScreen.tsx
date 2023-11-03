import React, { useState } from 'react';
import { View, StatusBar, Pressable } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import IntroSliderFirstImage from '../svg/IntrosliderSvg/IntroSliderFirstImage';
import { WalkStyle } from './style/WalkStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WHITE } from '../shared/constants/color';
import TextArchivoBold from '../shared/fontfamily/TextArchivoBold';
import SignIn from './SignInScreen/signIn';
import IntroSliderSecondImage from '../svg/IntrosliderSvg/IntroSliderSecondImage';
import IntroSliderThirdImage from '../svg/IntrosliderSvg/IntroSliderThirdImage';
import { Text } from 'react-native-paper';

interface Slide {
    key: string;
    title: string;
    text: string;
    path: React.ReactNode;
}

const slides: Slide[] = [
    {
        key: '1',
        text: 'Crops We Nourish',
        title: 'Providing World’s best to India & India’s best to the world.',
        path: <IntroSliderFirstImage width={widthPercentageToDP(170)} height={heightPercentageToDP(45)} />
    },
    {
        key: '2',
        title: 'Serving Farmers Everywhere with 6400+ Distributors Across India &Abroad',
        text: 'Empowering farmers everywhere',
        path: <IntroSliderSecondImage width={widthPercentageToDP(90)} height={heightPercentageToDP(45)} />,
    },
    {
        key: '3',
        text: 'Building Leaders in Agriculture',
        title: 'Grow the Aries Family as a highly skilled, trusted and motivated',
        path: <IntroSliderThirdImage width={widthPercentageToDP(90)} height={heightPercentageToDP(45)} />
    },

];
const IntroSliderScreen = (navigation: any) => {
    const [cuurentIndex, setIndex] = useState(0);
    const [showSlider, setShowSlider] = useState(true);

    const onSlideChange = (e: any) => {
        setIndex(e)
    }

    const renderItem = ({ item }: { item: Slide }) => {
        return (
            <View >
                <View style={{ marginTop: "15%" }}>
                    <View style={WalkStyle.imageView}>
                        {item.path}
                    </View>
                    <View>
                        <TextArchivoBold style={WalkStyle.text}>{item.text}</TextArchivoBold>
                        <Text numberOfLines={3} style={WalkStyle.subText}>
                            {item.title}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    const renderDoneButton = () => {
        return (
            <Pressable onPress={() => onDone()} style={WalkStyle.continue}>
                <View style={WalkStyle.continueButton}>
                    <TextArchivoBold style={WalkStyle.introContinueButton}>Get Started</TextArchivoBold>
                </View>
            </Pressable>
        )
    }

    const onDone = () => {
        setShowSlider(false);
    }

    const onSkip = () => {
        setShowSlider(false);
    }
    if (showSlider) {
        return (
            <SafeAreaView style={WalkStyle.mainContainer}>
                <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
                <View style={WalkStyle.skipView}>
                    <Pressable onPress={() => onSkip()} style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0 }
                    ]}>
                        <TextArchivoBold style={WalkStyle.skipBtn}>  {cuurentIndex <= 1 ? 'Skip' : ''}
                        </TextArchivoBold>
                    </Pressable>
                </View>
                <AppIntroSlider renderItem={renderItem} data={slides}
                    renderDoneButton={renderDoneButton}
                    showNextButton={false}
                    onSlideChange={onSlideChange}
                    activeDotStyle={WalkStyle.activeDotStyle}
                    dotStyle={WalkStyle.dotStyle}
                    onDone={onDone}
                    onSkip={onSkip} />
            </SafeAreaView >
        );
    }
    return <SignIn />;
};
export default IntroSliderScreen;
