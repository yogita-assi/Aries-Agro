
import { View, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE } from "../shared/constants/color";
import CustomButton from "../components/button/CustomButton";
import TopHeaderFixed from "../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import { registrationStyle } from "./style/registrationStyle";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../guards/AuthNavigator";
import TextArchivoBold from "../shared/fontfamily/TextArchivoBold";
import { chooseInterestStyle } from "./style/chooseInterestStyle";
import { TAB_SCREEN } from "../routes/Routes";

const ChooseInterestScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={chooseInterestStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Choose Your Interest"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={chooseInterestStyle.parentView} contentContainerStyle={registrationStyle.mainContainerView}>
                <View>
                    <TextArchivoBold style={chooseInterestStyle.txtInterest}>
                        Choose your Interest
                    </TextArchivoBold>
                    <TextArchivoBold style={chooseInterestStyle.txtSelectFavourite}>
                        Select your favourite topics to set up your feed
                    </TextArchivoBold>
                    <View style={chooseInterestStyle.btnView}>
                        <View style={chooseInterestStyle.btnOrganicBio}>
                            <CustomButton label={"Organic & Bio Products"} />
                        </View>
                        <View style={chooseInterestStyle.btnFertilizer}>
                            <CustomButton label={"Fertilizers"} />
                        </View>
                    </View>
                    <View style={chooseInterestStyle.btnView}>
                        <View style={chooseInterestStyle.btnOrganicBio}>
                            <CustomButton label={"Plant Protection"} />
                        </View>
                        <View style={chooseInterestStyle.btnFertilizer}>
                            <CustomButton label={"Sugarcane"} />
                        </View>
                    </View>
                    <View style={chooseInterestStyle.btnView}>
                        <View style={chooseInterestStyle.btnOrganicBio}>
                            <CustomButton label={"Potato"} />
                        </View>
                        <View style={chooseInterestStyle.btnFertilizer}>
                            <CustomButton label={"Grape"} />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={chooseInterestStyle.btnContinue}>
                <CustomButton label={"Next"} onPress={() => navigation.navigate(TAB_SCREEN)} />
            </View>
        </SafeAreaView>
    )
}
export default ChooseInterestScreen;
