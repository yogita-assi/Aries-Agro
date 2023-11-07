
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE, SPANISH_GRAY, } from "../../shared/constants/color";
import { useState } from "react";
import { otpstyles } from "../OtpScreen/otpstyles";
import CustomButton from "../../components/button/CustomButton";
import TextArchivoBold from "../../shared/fontfamily/TextArchivoBold";
import TopHeaderFixed from "../../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { DEALER_REGISTRATION, REGESTRATION_SCREEN } from "../../routes/Routes";
import IntroSliderFirstImage from "../../svg/IntrosliderSvg/IntroSliderFirstImage";

const SelectTypeScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={otpstyles.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Select Type"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={otpstyles.parentView} contentContainerStyle={otpstyles.mainContainerView}>
                <View style={otpstyles.contentHeader}>
                    <View style={otpstyles.txtDistributorView}>
                        <Pressable onPress={() => navigation.navigate(DEALER_REGISTRATION)}>
                            <TextArchivoBold style={otpstyles.textHeaderSelect}>Are You A Distributor?</TextArchivoBold>
                        </Pressable>
                    </View>
                    <View>
                        <TextArchivoBold style={otpstyles.txtOr}> OR </TextArchivoBold>
                    </View>
                    <View style={otpstyles.txtFarmerView}>
                        <Pressable onPress={() => navigation.navigate(REGESTRATION_SCREEN)}>
                            <TextArchivoBold style={otpstyles.textHeaderSelect}>Are You A Farmer?</TextArchivoBold>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default SelectTypeScreen;
