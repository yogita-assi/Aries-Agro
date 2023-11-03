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
import { StyleSheet } from "react-native"
import { OTP_SCREEN } from '../../routes/Routes';
import IntroSliderFirstImage from '../../svg/IntrosliderSvg/IntroSliderFirstImage';
import loginApi from '../../api/loginApi';

const SignIn: React.FC = () => {
    const [formValue, setFormValue] = useState({ countryCode: '+91', phoneNumber: '' });
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { openModal }: any = useModalContext();
    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    const [isLoader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg]: any = useState({
        phoneNumber: null
    })
    const onChangeInput = (event: any, name: any) => {
        const { text } = event.nativeEvent;
        setFormValue({ ...formValue, [name]: text.replace(/\D/g, "") });
        if (regex.test(text.toString())) {
            setErrorMsg("");
        }
    }
    const validate = () => {
        const validFormValues = {
            phoneNumber: ""
        };
        let isValid = false;
        if ((!formValue.phoneNumber || formValue.phoneNumber.length <= 9)) {
            isValid = true;
            validFormValues.phoneNumber = "Please enter a valid 10 digit mobile number"
        }
        if (formValue.phoneNumber && !regex.test(formValue.phoneNumber.toString())) {
            isValid = true;
            validFormValues.phoneNumber = "Please enter a valid 10 digit mobile number"
        }
        setErrorMsg(validFormValues);
        return isValid;
    }

    const onSubmit = async () => {
        navigation.navigate(OTP_SCREEN)
        if (validate()) {
            return
        }
        if (!formValue.phoneNumber) {
            Alert.alert(ALERT_MESSAGE.ALLFIELDS_REQUIRED);
            return;
        }
        const requestBody = {
            phoneNumber: formValue?.phoneNumber,
            countryCode:formValue?.countryCode
        };
        try {
            setLoader(true);
            const response = await loginApi.SignIn(requestBody)
            if (response?.data && response?.data?.accessToken) {
                await AsyncStorage.setItem(ASYNC_STORAGE.ACCESSTOKEN, response?.data?.accessToken);
            } else {
                Alert.alert(ALERT_MESSAGE.INCORRECT_INPUT);
            }
        } catch (error: any) {
            openModal(error?.response?.data?.title);
        } finally {
            setLoader(false);
        }
    };
    return (
        <SafeAreaView style={signInStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={signInStyle.parentView}>
                <View style={signInStyle.mainSection}>
                    <View style={signInStyle.imageContainer}>
                        <IntroSliderFirstImage height={147} />
                    </View>
                    <TextArchivoBold style={signInStyle.txtMobileNumber}>Enter Your Mobile Number</TextArchivoBold>
                    <View style={signInStyle.inputTextView}>
                        <View style={signInStyle.profileContents}>
                            <CustomTextInput allowFontScaling={false} editable={true} style={signInStyle.mobileText} value="IN  +91" />
                        </View>
                        <View style={signInStyle.profileContent}>
                            <CustomTextInput editable={true} maxLength={10} style={signInStyle.mobileTexts}
                                keyboardType="numeric" placeholderTextColor={LIGHTGREY} selectionColor={WHITE}
                                placeholder="Phone Number" onChange={(e: any) => onChangeInput(e, 'phoneNumber')} value={formValue.phoneNumber}
                            />
                        </View>
                    </View>
                    <View style={signInStyle.formTxt}>
                        <TextArchivoBold style={signInStyle.erroFormTxt}>{errorMsg.phoneNumber}</TextArchivoBold>
                    </View>
                    <View style={signInStyle.btnGenerateOtp}>
                        <CustomButton label={"Login"} onPress={() => onSubmit()} isLoader={isLoader} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
export default SignIn;
