
import { View, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE } from "../../shared/constants/color";
import CustomButton from "../../components/button/CustomButton";
import TopHeaderFixed from "../../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import { registrationStyle } from "../style/registrationStyle";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../guards/AuthNavigator";
import TextArchivoBold from "../../shared/fontfamily/TextArchivoBold";
import { dealerStyle } from "../style/dealerStyle";
import { FARMERDASHBOARD, TAB_SCREEN } from "../../routes/Routes";

const DealerApprovalScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={dealerStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Approval"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={dealerStyle.parentView} contentContainerStyle={registrationStyle.mainContainerView}>
                <View>
                    <View style={dealerStyle.btnPendingApproval}>
                        <CustomButton label={"Pending Approval"} />
                    </View>
                    <TextArchivoBold style={dealerStyle.txtHeader}>
                        You can continue setting up your profile while we verify all of your information
                    </TextArchivoBold>
                </View>
            </KeyboardAwareScrollView>
            <View style={dealerStyle.btnContinue}>
                <CustomButton label={"Continue"} onPress={() => navigation.navigate(TAB_SCREEN)} />
            </View>
        </SafeAreaView>
    )
}
export default DealerApprovalScreen;
