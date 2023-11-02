
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE, SPANISH_GRAY, JPURPLE } from "../shared/constants/color";
import { useState } from "react";
import { otpstyles } from "./OtpScreen/otpstyles";
import CustomButton from "../components/button/CustomButton";
import TopHeaderFixed from "../shared/constants/TopHeaderFixed";
import TextArchivoBold from "../shared/fontfamily/TextArchivoBold";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../components/inputs/CustomTextInput";
import CustomFontText from "../fontfamily/CustomFontText";
import { registrationStyle } from "./style/registrationStyle";
import { ADDRESS_REGEX, regex } from "../shared/constants/regular-expressions-utilities";
import { FARMERDASHBOARD, TAB_SCREEN } from "../routes/Routes";
import { PRODUCT_DETAILS } from "../routes/Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../guards/AuthNavigator";

const RegistrationScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        address: "",
        mobileNumber: ""
    })
    const [errorMsg, setErrorMsg]: any = useState({
        firstName: null,
        lastName: null,
        address: null,
        mobileNumber: null
    })
    const onChangeFormName = (name: any, text: any) => {
        setFormValue({ ...formValue, [name]: text.replace("") });
        setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
    }
    const onChangeFormAddress = (name: any, text: any) => {
        setFormValue({ ...formValue, [name]: text });
        setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] })
    }
    const validate = () => {
        const validFormValues = {
            firstName: "",
            lastName: "",
            mobileNumber: "",
            address: ""
        };
        let isValid = false;
        if (formValue.firstName.length == 0) {
            isValid = true;
            validFormValues.firstName = "First name is required"
        }
        if (formValue.lastName.length == 0) {
            isValid = true;
            validFormValues.lastName = "Last name is required"
        }
        if ((formValue.address.length == 0 || !ADDRESS_REGEX.test(formValue.address.toString()))) {
            validFormValues.address = "Please enter valid address"
            isValid = true;
        }
        if ((!formValue.mobileNumber || formValue.mobileNumber.length <= 9)) {
            validFormValues.mobileNumber = "Please enter a valid 10 digit mobile number";
            isValid = true;
        }
        if (formValue.mobileNumber && !regex.test(formValue.mobileNumber.toString())) {
            validFormValues.mobileNumber = "Please enter a valid 10 digit mobile number"
            isValid = true;
        }
        setErrorMsg(validFormValues);
        return isValid;
    }
    const onSubmit = async () => {
        // if (validate()) {
        //     return
        // }
        navigation.navigate(TAB_SCREEN)
        // navigation.navigate(PRODUCT_DETAILS)
        if (validate()) {
            return
        }
    }
    return (
        <SafeAreaView style={otpstyles.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Register"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={otpstyles.parentView}>
                <View style={otpstyles.contentHeader}>
                    <CustomTextInput
                        mode="outlined"
                        label="Enter First Name"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={50}
                        value={formValue?.firstName}
                        onChangeText={(text: any) => onChangeFormName("userName", text)}
                        error={errorMsg.firstName}
                    />
                    {errorMsg.firstName &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.firstName}</CustomFontText>
                        </View>
                    }
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Last Name"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={50}
                        value={formValue?.lastName}
                        onChangeText={(text: any) => onChangeFormName("lastName", text)}
                        error={errorMsg.lastName}
                    />
                    {errorMsg.lastName &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.lastName}</CustomFontText>
                        </View>
                    }
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Mobile Number"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={10}
                        keyboardType="numeric"
                        value={formValue?.mobileNumber}
                        onChangeText={(text: any) => onChangeFormAddress("address", text)}
                        error={errorMsg.mobileNumber}
                    />
                    {errorMsg.mobileNumber &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.mobileNumber}</CustomFontText>
                        </View>
                    }
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Address"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={150}
                        value={formValue?.address}
                        onChangeText={(text: any) => onChangeFormAddress("address", text)}
                        error={errorMsg.address}
                    />
                    {errorMsg.address &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.address}</CustomFontText>
                        </View>
                    }
                    <View style={registrationStyle.btnGenerateOtp}>
                        <CustomButton label={"Submit"} onPress={() => onSubmit()} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default RegistrationScreen;
