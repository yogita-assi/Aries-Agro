
import { View, StatusBar, Pressable, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLACK, WHITE, DARKBLUE, NAVYBULE, GREEN, BGRED, JPURPLE, VERYDARK_GRAYISHRED, } from "../../shared/constants/color";
import { useEffect, useState } from "react";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { otpstyles } from "./otpstyles";
import { Modal, TouchableOpacity } from 'react-native';
import CustomButton from "../../components/button/CustomButton";
import { Text } from "react-native-paper";
import TextArchivoBold from "../../shared/fontfamily/TextArchivoBold";
import CustomFontText from "../../shared/fontfamily/CustomFontText";
import TopHeaderFixed from "../../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import { FARMERDASHBOARD, SELECT_TYPE_SCREEN, TAB_SCREEN } from "../../routes/Routes";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import { IconButton } from 'react-native-paper';
import CountDown from "../auth/CountDown";

const OtpScreen = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    // const mobileNumber = route.params?.mobileNumber || "";
    // const otp = route.params?.otp || "";
    const [isLoader, setLoader] = useState(false);
    const [otpId, setOtpId] = useState(1)
    const [running, setRunning] = useState(true);
    const [sessionTimeOut, setSessionTimeOut] :any = useState(false);
    const [value, setValue] = useState('');
    // const dispatch = useDispatch();
    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
   
    const onCountFinish = () => {
        setSessionTimeOut(true);
        setRunning(false);
        // setOtpId(parseInt(otpId) + 1)
    }
    const onVerifyOTP = () => {
        navigation.navigate(TAB_SCREEN)
        // navigation.navigate(SELECT_TYPE_SCREEN)
    }
    const onResendOTP = () => {

    }
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={otpstyles.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={otpstyles.parentView}>
                <View style={otpstyles.contentHeaderWrapper}>
                    <TextArchivoBold style={otpstyles.textHeader}>Verification Code</TextArchivoBold>
                    <View style={otpstyles.loginInformation}>
                        <TextArchivoBold style={otpstyles.otpInformation}>Please type the verification code and sent to 982236*** </TextArchivoBold>
                    </View>
                    <View style={otpstyles.verifyInput}>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <View style={otpstyles.otpBox} key={index}>
                                    <CustomFontText
                                        style={otpstyles.inputStyle}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </CustomFontText>
                                </View>
                            )}
                        />
                        <View style={otpstyles.otpFormTxt}>
                            <Text style={otpstyles.otpErroFormTxt}>{errorMsg}</Text>
                        </View>
                    </View>
                    <View style={otpstyles.countDown}>
                        <CountDown
                            sessionTimeOut={sessionTimeOut}
                            labelText="Resend code in"
                            until={10}
                            onFinish={onCountFinish}
                            key={otpId}
                            size={15}
                            timeToShow={['S']}
                            showSeparator={true}
                            running={running}
                        />
                    </View>
                    {sessionTimeOut && <View style={otpstyles.resOtp}>
                        <TextArchivoBold style={otpstyles.resendOTPTxt}>Didn't receive OTP?</TextArchivoBold>
                        <Pressable onPress={() => onResendOTP()}>
                            <TextArchivoBold style={otpstyles.resendOTP}>Resend</TextArchivoBold>
                        </Pressable>
                    </View>
                    }
                    <CustomButton style={otpstyles.btnContinue} label={"Continue"} onPress={() => onVerifyOTP()} isLoader={isLoader} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>            
        )
}
export default OtpScreen;
