
import { View, StatusBar, Pressable, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLACK, WHITE, DARKBLUE, NAVYBULE, GREEN, BGRED, JPURPLE, } from "../../shared/constants/color";
import { useEffect, useState } from "react";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import CountDown from "../auth/CountDown";
import CustomButton from "../../components/button/CustomButton";
import { Text } from "react-native-paper";
import TextArchivoBold from "../../shared/fontfamily/TextArchivoBold";
import CustomFontText from "../../shared/fontfamily/CustomFontText";
import TopHeaderFixed from "../../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { SELECT_TYPE_SCREEN } from "../../routes/Routes";
import { ChooseInterestsStyle } from "./ChooseInterestsStyle";

const ChooseYourInterests = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    // const mobileNumber = route.params?.mobileNumber || "";
    // const otp = route.params?.otp || "";
    const [isLoader, setLoader] = useState(false);
    const [otpId, setOtpId] = useState(1)
    const [running, setRunning] = useState(true);
    const [sessionTimeOut, setSessionTimeOut] = useState(false);
    const [value, setValue] = useState('');
    // const dispatch = useDispatch();
    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const onCountFinish = () => {
        setSessionTimeOut(true);
        setRunning(false);
        // setOtpId(parseInt(otpId) + 1)
    }
    const onSubmit = () => {
        navigation.navigate(SELECT_TYPE_SCREEN)
    }
    const handleButtonPress = () => {

    }

    return (
        <SafeAreaView style={ChooseInterestsStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={ChooseInterestsStyle.parentView}>
                <View style={ChooseInterestsStyle.contentHeaderWrapper}>
                    <TextArchivoBold style={ChooseInterestsStyle.textHeader}>Choose Your Interests</TextArchivoBold>
                    <View style={ChooseInterestsStyle.loginInformation}>
                        <TextArchivoBold style={ChooseInterestsStyle.otpInformation}>Select your favorite topic to set up your feeds</TextArchivoBold>
                    </View>
                    <View style={ChooseInterestsStyle.verifyInput} >
                        <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText}
                            label={"Orange and Bio Product"} />
                        <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Grapes"} />

                    </View>
                    <View style={ChooseInterestsStyle.verifyInput}>
                        <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Fertilizers"} />
                        <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Plant Protection"} />

                    </View>
                    <View style={ChooseInterestsStyle.verifyInput}>
                        <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Suger cane"} />
                        <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Chemicals"} />
                    </View>
                    <View style={ChooseInterestsStyle.verifyInput}>
                    <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Potato"} />
                    <CustomButton style={ChooseInterestsStyle.btnIntrest} textstyle={ChooseInterestsStyle.intrestText} label={"Tomato"} />


                    </View>
                </View>
              
                    <CustomButton style={ChooseInterestsStyle.btnNext} label={"Next"} onPress={() => onSubmit()} isLoader={isLoader} />

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default ChooseYourInterests;
