
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE } from "../shared/constants/color";
import TopHeaderFixed from "../shared/constants/TopHeaderFixed";
import { distributorStyle } from "../shared/styles/distributorStyle";
import TextArchivoBold from "../shared/fontfamily/TextArchivoBold";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../guards/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/button/CustomButton";

const SelectDistributor = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={distributorStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Select Distributor"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={distributorStyle.parentView} contentContainerStyle={distributorStyle.mainContainerView}>
                <View style={distributorStyle.contentHeader}>
                    <View>
                        <TextArchivoBold style={distributorStyle.txtOr}> Select a Distributor </TextArchivoBold>
                    </View>
                    <View style={distributorStyle.btnAddProduct}>
                        <CustomButton label={"Add Products"} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default SelectDistributor;
