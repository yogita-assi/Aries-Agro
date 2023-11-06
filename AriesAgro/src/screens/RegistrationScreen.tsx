
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE, JPURPLE } from "../shared/constants/color";
import { useState } from "react";
import { otpstyles } from "./OtpScreen/otpstyles";
import CustomButton from "../components/button/CustomButton";
import TopHeaderFixed from "../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../components/inputs/CustomTextInput";
import CustomFontText from "../fontfamily/CustomFontText";
import { registrationStyle } from "./style/registrationStyle";
import { ADDRESS_REGEX, WORD_WITH_SPACE_REGEX, regex } from "../shared/constants/regular-expressions-utilities";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../guards/AuthNavigator";
import loginApi from "../api/loginApi";
import { useModalContext } from "../modalContext/ModalContext";
import { TAB_SCREEN } from "../routes/Routes";

const RegistrationScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { openModal }: any = useModalContext();
    const [isLoader, setLoader] = useState(false);
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
        const trimmedText = text.replace(WORD_WITH_SPACE_REGEX, "").trim();
        setFormValue({ ...formValue, [name]: trimmedText });
        setErrorMsg({ ...errorMsg, [name]: trimmedText ? null : errorMsg[name] });
    }
    const onChangeInput = (event: any, name: any) => {
        const { text } = event.nativeEvent;
        setFormValue({ ...formValue, [name]: text.replace(/\D/g, "") });
        setErrorMsg({ ...errorMsg, mobileNumber: null });
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
        navigation.navigate(TAB_SCREEN)
        if (validate()) {
            return
        }
        const requestBody = {
            email: "",
            phoneNumber: formValue?.mobileNumber,
            roleId: 4,
            firstName: formValue?.firstName,
            middleName: "",
            lastName: formValue?.lastName,
            photo: "",
            bio: "",
            isActive: true,
            deleted: false,
            joiningDate: 2023 - 11 - 2,
            department: "",
            reportingTo: ""
        }
        try {
            setLoader(true);
            const response = await loginApi.registerUser(requestBody);
            if (response?.data) {
                navigation.navigate(TAB_SCREEN)
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
                        label="Enter Mobile Number"
                        style={registrationStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={10}
                        keyboardType="numeric"
                        value={formValue?.mobileNumber}
                        onChange={(e: any) => onChangeInput(e, 'mobileNumber')}
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
                        onChangeText={(text: any) => onChangeFormName("address", text)}
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
