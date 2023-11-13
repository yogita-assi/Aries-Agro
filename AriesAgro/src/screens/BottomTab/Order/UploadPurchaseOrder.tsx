
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE } from "../../../shared/constants/color";
import TopHeaderFixed from "../../../shared/constants/TopHeaderFixed";
import { distributorStyle } from "../../../shared/styles/distributorStyle";
import TextArchivoBold from "../../../shared/fontfamily/TextArchivoBold";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/button/CustomButton";

const UploadPurchaseOrder = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={distributorStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Upload Order"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={distributorStyle.parentView} contentContainerStyle={distributorStyle.mainContainerView}>
                <View style={distributorStyle.contentHeader}>
                    <View style={distributorStyle.btnAddProduct}>
                        <CustomButton label={"Add Products"} />
                    </View>
                    <View>
                        <TextArchivoBold style={distributorStyle.txtUploadOrder}>Upload your Purchase Order Here</TextArchivoBold>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={distributorStyle.btnSubmit}>
                <CustomButton label={"Submit"} />
            </View>
        </SafeAreaView>
    )
}
export default UploadPurchaseOrder;
