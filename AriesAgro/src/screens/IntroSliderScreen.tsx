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

interface Slide {
    key: string;
    title: string;
    text: string;
    path: React.ReactNode;
}

const slides: Slide[] = [
    {
        key: '1',
        title: 'Building Leaders in Agriculture',
        text: 'Building Leaders in Agriculture',
        path: <IntroSliderFirstImage width={widthPercentageToDP(130)} height={heightPercentageToDP(30)} />
    },
    {
        key: '2',
        title: 'Award Winning Marketing & Operations Team',
        text: 'Award Winning Marketing & Operations Team',
        path: <IntroSliderFirstImage width={widthPercentageToDP(90)} height={heightPercentageToDP(30)} />,
    },
    {
        key: '3',
        text: 'Providing World’s best to India & India’s best to the world.',
        title: 'Aries Agro Ltd was founded by Dr. T. B. Mirchandani and Mrs. Bala Mirchandani in 1969.',
        path: <IntroSliderFirstImage width={widthPercentageToDP(90)} height={heightPercentageToDP(30)} />
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
                        <TextArchivoBold numberOfLines={3} style={WalkStyle.subText}>
                            {item.title}
                        </TextArchivoBold>
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
                    onDone={onDone}
                    onSkip={onSkip}
                    activeDotStyle={WalkStyle.activeDotStyle}
                    dotStyle={WalkStyle.dotStyle} />
            </SafeAreaView >
        );
    }
    return <SignIn />;
};
export default IntroSliderScreen;
