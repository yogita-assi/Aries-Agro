import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/button/CustomButton';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import { RootStackParamList } from '../../guards/AuthNavigator';
import { useModalContext } from '../../modalContext/ModalContext';
import { ALERT_MESSAGE } from '../../shared/constants/infoMsgStrings';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import { signInStyle } from './signInStyle';
import { LIGHTGREY, WHITE } from '../../shared/constants/color';
import { OTP_SCREEN } from '../../routes/Routes';
import loginApi from '../../api/loginApi';
import LoginSvg from '../../svg/LoginSvg';

const SignIn: React.FC = () => {
    const [formValue, setFormValue] = useState({ countryCode: '+91', phoneNumber: '' });
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { openModal }: any = useModalContext();
    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    const [isLoader, setLoader] = useState(false);
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
        if (validate()) {
            return
        }
        if (!formValue.phoneNumber) {
            Alert.alert(ALERT_MESSAGE.ALLFIELDS_REQUIRED);
            return;
        }
        const requestBody = {
            phoneNumber: formValue?.phoneNumber,
        };
        try {
            setLoader(true);
            const response = await loginApi.SignIn(requestBody)
            if (response?.data?.data) {
                navigation.navigate(OTP_SCREEN, {
                    ...response.data, mobileNumber: formValue.phoneNumber
                });
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
                <View style={{ flexDirection: 'row', marginTop: 30, alignSelf: 'center' }}>
                    <TextArchivoBold style={signInStyle.txtWelcome}>Welcome to </TextArchivoBold>
                    <TextArchivoBold style={signInStyle.txtAriesAgro}>Aries Agro</TextArchivoBold>
                </View>
                <View style={signInStyle.mainSection}>
                    <View style={signInStyle.imageContainer}>
                        <LoginSvg height={157} />
                    </View>
                    <TextArchivoBold style={signInStyle.txtMobileNumber}>
                        Make Easy Farming with fast delivery at your door.
                    </TextArchivoBold>
                    <View style={signInStyle.inputTextView}>
                        <View style={signInStyle.profileContents}>
                            <CustomTextInput allowFontScaling={false} editable={true} style={signInStyle.mobileText} value="IN  +91" />
                        </View>
                        <View style={signInStyle.profileContent}>
                            <CustomTextInput editable={true} maxLength={10} style={signInStyle.mobileTexts}
                                keyboardType="numeric" placeholderTextColor={LIGHTGREY} selectionColor={WHITE}
                                placeholder="Enter Your Mobile Number" onChange={(e: any) => onChangeInput(e, 'phoneNumber')} value={formValue.phoneNumber}
                            />
                        </View>
                    </View>
                    <View style={signInStyle.formTxt}>
                        <TextArchivoBold style={signInStyle.erroFormTxt}>{errorMsg.phoneNumber}</TextArchivoBold>
                    </View>
                    <TextArchivoBold style={signInStyle.txtPrivacyPolicy}>
                        By joining you accept the
                        <TextArchivoBold style={signInStyle.txtPrivacy}> Privacy Policy,</TextArchivoBold> and  <TextArchivoBold style={signInStyle.txtPrivacy}>Terms of Use</TextArchivoBold>
                    </TextArchivoBold>
                </View>
            </KeyboardAwareScrollView>
            <View style={signInStyle.btnGenerateOtp}>
                <CustomButton label={"Login"} onPress={() => onSubmit()} isLoader={isLoader} />
            </View>
        </SafeAreaView>
    );
};
export default SignIn;
