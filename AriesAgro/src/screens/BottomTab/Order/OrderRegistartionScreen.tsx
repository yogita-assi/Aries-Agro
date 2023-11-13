import React from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../guards/AuthNavigator";
import { View } from 'react-native';
import TextArchivoBold from "../../../shared/fontfamily/TextArchivoBold";
import { orderRegisterationStyle } from "../../../shared/styles/orderRegisterationStyle";
import TopHeaderFixed from "../../../shared/constants/TopHeaderFixed";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginSvg from "../../../svg/LoginSvg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from "../../../components/button/CustomButton";

const OrderRegistartionScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={orderRegisterationStyle.dashboardContainer}>
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Select Type"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={orderRegisterationStyle.parentView}>
                <TextArchivoBold style={orderRegisterationStyle.txtOrderSubmitted}>Order Submitted</TextArchivoBold>
                <View>
                    <View style={orderRegisterationStyle.imageContainer}>
                        <LoginSvg height={157} />
                    </View>
                    <TextArchivoBold style={orderRegisterationStyle.txtThankYou}>
                        Thank You!
                    </TextArchivoBold>
                    <TextArchivoBold style={orderRegisterationStyle.txtReceived}>
                        We have received your order and it is being processed.
                    </TextArchivoBold>
                </View>
                <View style={orderRegisterationStyle.btnReturnToHome}>
                    <CustomButton label={"Return To Home"} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default OrderRegistartionScreen