import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthContext } from '../../authContext/AuthContext';
import CustomButton from '../../components/button/CustomButton';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import { RootStackParamList } from '../../guards/AuthNavigator';
import { useModalContext } from '../../modalContext/ModalContext';
import Pressable from '../../shared/constants/Pressable';
import { ERROR_MSG } from '../../shared/constants/errorMsgString';
import { ALERT_MESSAGE, ASYNC_STORAGE } from '../../shared/constants/infoMsgStrings';
import CustomFontText from '../../shared/fontfamily/CustomFontText';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import { signInStyle } from './signInStyle';
import TopHeaderFixed from '../../shared/constants/TopHeaderFixed';
import { LIGHTGREY, WHITE } from '../../shared/constants/color';

const SignIn: React.FC = () => {
    const [formValue, setFormValue] = useState({ countryCode: '+91', phoneNumber: '' });
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    const [isLoader, setLoader] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [message, setMessage] = useState("");
    const onChangeInput = (event:any, name:any) => {
        const { text } = event.nativeEvent;
        setFormValue({ ...formValue, [name]: text.replace(/\D/g, "") });
        if (regex.test(text.toString())) {
            setErrorMsg("");
        }
    }
    const onSubmit = async () => {
        const mobileNumber = formValue.phoneNumber;
        try {
            if ((!formValue.phoneNumber || formValue.phoneNumber.length <= 9)) {
                setErrorMsg("Please enter a valid 10 digit mobile number");
                return;
            }
            if (formValue.phoneNumber && !regex.test(formValue.phoneNumber.toString())) {
                setErrorMsg("Please enter a valid 10 digit mobile number");
                return;
            }
            // setLoader(true);
            // let response = await api.mobileSignup(mobileNumber);
            // dispatch({ type: AUTH_TYPE.COMPANY_DRIVER_DETAILS, payload: response.data })
            // const userData = response.data;
            // if (userData || response.data == true) {
            //     setLoader(true)
            //     navigation.navigate('OtpScreen', {
            //         ...response.data, mobileNumber: formValue.phoneNumber, userData, isVerify: true
            //     });
            // }
        }
        catch (error) {
            console.log(error);
            setLoader(false)
            setErrorMsg("Please enter a valid 10 digit mobile number");
        }
    }

  return (
    <SafeAreaView style={signInStyle.dashboardContainer}>
    <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={signInStyle.parentView}>
        <TopHeaderFixed
            headerTxt="SignIn"
            onGoBack={() => navigation.goBack()}
            topHeight={100}>
        </TopHeaderFixed>
        <View>
            <View style={signInStyle.mainSection}>
                <View style={signInStyle.headerWrapper}>
                    <TextArchivoBold style={signInStyle.textHeader}>Sign in </TextArchivoBold>
                    <TextArchivoBold style={signInStyle.txtMobileNumber}> Enter your mobile number</TextArchivoBold>
                </View>
                <TextArchivoBold style={signInStyle.mobileMsg}>Phone Number</TextArchivoBold>
                <View style={signInStyle.inputTextView}>
                    <View style={signInStyle.profileContents}>
                        <CustomTextInput allowFontScaling={false} editable={true} style={signInStyle.mobileText} value="IN  +91" />
                    </View>
                    <View style={signInStyle.profileContent}>
                        <CustomTextInput editable={true} maxLength={10} style={signInStyle.mobileTexts}
                            keyboardType="numeric" placeholderTextColor={LIGHTGREY} selectionColor={WHITE}
                            placeholder="Phone Number" onChange={(e:any) => onChangeInput(e, 'phoneNumber')} value={formValue.phoneNumber}
                        />
                    </View>
                </View>
                <View style={signInStyle.formTxt}>
                    <TextArchivoBold style={signInStyle.erroFormTxt}>{errorMsg}</TextArchivoBold>
                </View>
                <View style={signInStyle.loginInformation}>
                    <TextArchivoBold style={signInStyle.textInformation}>By clicking on ‘Generate OTP’, you are agreeing to our </TextArchivoBold>
                    {/* <Pressable onPress={() => navigation.navigate("termsAndCondition")}>
                        <TextArchivoBold style={signInStyle.termAndCondition}>Terms and conditions</TextArchivoBold>
                    </Pressable> */}
                </View>
            </View>
        </View>

    </KeyboardAwareScrollView>
    <View style={signInStyle.btnGenerateOtp}>
        <CustomButton label={"Generate OTP"} onPress={() => onSubmit()} isLoader={isLoader} />
    </View>
</SafeAreaView>
  );
};
export default SignIn;
