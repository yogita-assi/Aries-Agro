
import { View, StatusBar, Pressable, Alert } from "react-native";
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
import { IconButton } from 'react-native-paper';
import CountDown from "../auth/CountDown";
import loginApi from "../../api/loginApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALERT_MESSAGE, ASYNC_STORAGE } from "../../shared/constants/infoMsgStrings";
import { useModalContext } from "../../modalContext/ModalContext";
import { useAuthContext } from "../../authContext/AuthContext";

const OtpScreen = ({ route: { params }, route }: any) => {
    const [errorMsg, setErrorMsg] = useState("");
    const { updateState }: any = useAuthContext();
    const { openModal }: any = useModalContext();
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isLoader, setLoader] = useState(false);
    const key = route?.params?.data;
    const mobileNumber = route.params?.mobileNumber || "";
    const [otpId, setOtpId]: any = useState(1)
    const [running, setRunning] = useState(true);
    const [sessionTimeOut, setSessionTimeOut]: any = useState(false);
    const [value, setValue] = useState('');
    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

    const onCountFinish = () => {
        setSessionTimeOut(true);
        setRunning(false);
    }

    const onVerifyOTP = async () => {
        setErrorMsg("");
        try {
            if (!value) {
                setErrorMsg("Please enter valid otp");
                return;
            }
            if (value.length <= 5) {
                setErrorMsg("Please enter 6 digit otp");
                return;
            }
            const requestBody = {
                phoneNumber: mobileNumber,
                verificationKey: key,
                otp: value
            };
            setLoader(true);
            const response = await loginApi.verifyOTP(requestBody);
            if (response && response) {
                if (response?.data?.data) {
                    updateState(ASYNC_STORAGE.USERINFO, JSON.stringify(response?.data?.data));
                }
                await AsyncStorage.setItem(ASYNC_STORAGE.ACCESSTOKEN, response?.data?.data?.accessToken);
            } else {
                Alert.alert(ALERT_MESSAGE.INCORRECT_INPUT);
            }
            setLoader(false);
        } catch (error) {
            setLoader(false);
        }
    }
    const onResendOTP = async () => {
        const requestBody = {
            phoneNumber: mobileNumber,
        };
        try {
            const response = await loginApi.SignIn(requestBody);
            if (response && response.data) {
                setSessionTimeOut(false);
                setRunning(true);
                setOtpId(parseInt(otpId) + 1)
            }
        } catch (error: any) {
            openModal(error);
        }
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
                        <TextArchivoBold style={otpstyles.otpInformation}>Please type the verification code and sent to {mobileNumber} </TextArchivoBold>
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

export default OtpScreen
