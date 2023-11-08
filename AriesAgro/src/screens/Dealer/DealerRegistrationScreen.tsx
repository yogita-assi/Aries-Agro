
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE, JPURPLE } from "../../shared/constants/color";
import { useState } from "react";
import { otpstyles } from "../OtpScreen/otpstyles";
import CustomButton from "../../components/button/CustomButton";
import TopHeaderFixed from "../../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import CustomFontText from "../../fontfamily/CustomFontText";
import { registrationStyle } from "../style/registrationStyle";
import { ADDRESS_REGEX, NUMBER_REGEX, PAN_NUMBER_REGEX, PINCODE_REGEX, WORD_WITH_SPACE_REGEX, regex } from "../../shared/constants/regular-expressions-utilities";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import loginApi from "../../api/loginApi";
import { useModalContext } from "../../modalContext/ModalContext";
import { DEALER_APPROVAL, TAB_SCREEN } from "../../routes/Routes";

const DealerRegistrationScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { openModal }: any = useModalContext();
    const [isLoader, setLoader] = useState(false);
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        address: "",
        panNumber: "",
        pinCode: ""
    })
    const [errorMsg, setErrorMsg]: any = useState({
        firstName: null,
        lastName: null,
        address: null,
        panNumber: null,
        pinCode: null
    })
    const onChangeFormName = (name: any, text: any) => {
        const trimmedText = text.replace(WORD_WITH_SPACE_REGEX, "").trim();
        setFormValue({ ...formValue, [name]: trimmedText });
        setErrorMsg({ ...errorMsg, [name]: trimmedText ? null : errorMsg[name] });
    }
    const onChangeForm = (name: any, text: any, isNumber = false) => {
        if (isNumber) {
            setFormValue({ ...formValue, [name]: text.replace(NUMBER_REGEX, "") });
            setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
        } else {
            setFormValue({ ...formValue, [name]: text });
            setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
        }
    }
    const validate = () => {
        const validFormValues = {
            firstName: "",
            lastName: "",
            pinCode: "",
            panNumber: "",
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
        if ((formValue.pinCode.length == 0 || !PINCODE_REGEX.test(formValue.pinCode.toString()))) {
            validFormValues.pinCode = "Please enter valid Pincode Number"
            isValid = true;
        }
        if ((formValue.panNumber.length == 0 || !PAN_NUMBER_REGEX.test(formValue.panNumber.toString()))) {
            validFormValues.panNumber = "Please enter valid Pan Number"
            isValid = true;
        }
        setErrorMsg(validFormValues);
        return isValid;
    }
    const onSubmit = async () => {
        if (validate()) {
            return
        }
        const requestBody = {
            roleId: 7,
            firstName: formValue?.firstName,
            lastName: formValue?.lastName,
            address: formValue?.address,
            pincode: formValue?.pinCode
        }
        try {
            setLoader(true);
            const response = await loginApi.registerUser(requestBody);
            if (response?.data) {
                navigation.navigate(DEALER_APPROVAL)
            }
        } catch (error: any) {
            openModal(error?.response?.data);
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
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={otpstyles.parentView} contentContainerStyle={registrationStyle.mainContainerView}>
                <View style={otpstyles.contentHeader}>
                    <CustomTextInput
                        mode="outlined"
                        label="Enter First Name"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={50}
                        value={formValue?.firstName}
                        onChangeText={(text: any) => onChangeFormName("firstName", text)}
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
                        label="Pan Number"
                        autoCapitalize='characters'
                        maxLength={10}
                        style={registrationStyle.inputText}
                        value={formValue?.panNumber}
                        onChangeText={(text: any) => onChangeForm("panNumber", text)}
                        error={!!errorMsg.panNumber}
                    />
                    {errorMsg.panNumber &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.panNumber}</CustomFontText>
                        </View>
                    }
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Address"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={150}
                        value={formValue?.address}
                        onChangeText={(text: any) => onChangeFormName("address", text)}
                        error={errorMsg.address}
                    />
                    {errorMsg.address &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.address}</CustomFontText>
                        </View>
                    }
                    <CustomTextInput
                        mode="outlined"
                        label="Pincode"
                        style={registrationStyle.inputText}
                        maxLength={6}
                        keyboardType="numeric"
                        value={formValue?.pinCode}
                        onChangeText={(event: any) => onChangeForm("pinCode", event, true)}
                        error={errorMsg.pinCode}
                    />
                    {errorMsg.pinCode &&
                        <View style={registrationStyle.formTxt}>
                            <CustomFontText style={registrationStyle.erroFormTxt}>{errorMsg.pinCode}</CustomFontText>
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
export default DealerRegistrationScreen;
