
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
import { REGESTRATION_SCREEN } from "../../routes/Routes";
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
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={otpstyles.parentView}>
                <View style={otpstyles.imageContainer}>
                    <IntroSliderFirstImage height={60} width={100} />
                </View>
                <View style={otpstyles.contentHeader}>
                    <View style={otpstyles.txtDistributorView}>
                        <TextArchivoBold style={otpstyles.textHeaderSelect}>Are You A Distributor?</TextArchivoBold>
                    </View>
                    <CustomButton style={otpstyles.btnOr} label={"OR"} />
                    <View style={{ borderColor: SPANISH_GRAY, borderWidth: 1, width: 200, alignSelf: 'center', padding: 7, marginBottom: 10 }}>
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
