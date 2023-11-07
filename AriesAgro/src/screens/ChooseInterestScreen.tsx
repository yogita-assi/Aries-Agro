
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLACK, WHITE } from "../shared/constants/color";
import CustomButton from "../components/button/CustomButton";
import TopHeaderFixed from "../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import { registrationStyle } from "./style/registrationStyle";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../guards/AuthNavigator";
import TextArchivoBold from "../shared/fontfamily/TextArchivoBold";
import { chooseInterestStyle } from "./style/chooseInterestStyle";
import { TAB_SCREEN } from "../routes/Routes";
import { useEffect, useState } from "react";
import loginApi from "../api/loginApi";
import { useModalContext } from "../modalContext/ModalContext";

const ChooseInterestScreen = () => {
    const { openModal }: any = useModalContext();
    const [interestData, setInterestData]: any = useState();
    useEffect(() => {
        getInterestDetails();
    }, [])
    const getInterestDetails = async () => {
        try {
            const response = await loginApi.interestDetails()
            setInterestData(response?.data)
        } catch (error: any) {
            console.log(error)
        }
    }
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const buttonsPerRow = 2;
    const numRows = Math.ceil(interestData.length / buttonsPerRow);
    const rows = Array.from({ length: numRows }, (_, index) =>
        interestData.slice(index * buttonsPerRow, (index + 1) * buttonsPerRow)
    );
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
            <View style={chooseInterestStyle.skipView}>
                <Pressable onPress={() => navigation.navigate(TAB_SCREEN)} style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1.0 }
                ]}>
                    <TextArchivoBold style={chooseInterestStyle.skipBtn}>Skip
                    </TextArchivoBold>
                </Pressable>
            </View>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={chooseInterestStyle.parentView} contentContainerStyle={registrationStyle.mainContainerView}>
                <View>
                    <TextArchivoBold style={chooseInterestStyle.txtInterest}>
                        Choose your Interest
                    </TextArchivoBold>
                    <TextArchivoBold style={chooseInterestStyle.txtSelectFavourite}>
                        Select your favourite topics to set up your feed
                    </TextArchivoBold>

                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={chooseInterestStyle.btnView}>
                            {row.map((item: any, index: any) => (
                                <View key={index} style={chooseInterestStyle.btnOrganicBio}>
                                    <CustomButton
                                        style={chooseInterestStyle.btnButtonStyle}
                                        label={item.description}
                                        textstyle={chooseInterestStyle.txtOragnic}
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </KeyboardAwareScrollView>
            <View style={chooseInterestStyle.btnContinue}>
                <CustomButton label={"Next"} onPress={() => navigation.navigate(TAB_SCREEN)} />
            </View>
        </SafeAreaView>
    );

}
export default ChooseInterestScreen;
