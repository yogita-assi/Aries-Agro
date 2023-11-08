
import { View, StatusBar, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE, JPURPLE } from "../../../shared/constants/color";
import CustomButton from "../../../components/button/CustomButton";
import TopHeaderFixed from "../../../shared/constants/TopHeaderFixed";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import { profileStyle } from "../../../shared/styles/profileStyle";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../guards/AuthNavigator";
import { useModalContext } from "../../../modalContext/ModalContext";
import ProductImage from "../../../svg/ProductImage";
import ProfilePicIcon from "../../../svg/ProfilePicIcon";
import AccountImage from "../../../svg/AccountSvg/AccountImage";

const ProfileScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { openModal }: any = useModalContext();
    return (
        <SafeAreaView style={profileStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <TopHeaderFixed
                leftIcon="arrow-back"
                leftIconSize={20}
                headerTxt="Profile"
                onGoBack={() => navigation.goBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={profileStyle.parentView} contentContainerStyle={profileStyle.mainContainerView}>
                <View style={profileStyle.imageView}>
                    <AccountImage height={90} width={150} />
                </View>
                <View style={profileStyle.contentHeader}>
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Shop Name"
                        style={profileStyle.inputText}
                        outlineColor={JPURPLE}
                    />
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Dealer Name"
                        style={profileStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={50}
                    />
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Contact Number"
                        style={profileStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={10}
                        keyboardType="numeric"
                    />
                    <CustomTextInput
                        mode="outlined"
                        label="Enter Address"
                        style={profileStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={150}
                    />
                    <CustomTextInput
                        mode="outlined"
                        label="Distributor Code"
                        style={profileStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={150}
                    />
                    <CustomTextInput
                        mode="outlined"
                        label="Location"
                        style={profileStyle.inputText}
                        outlineColor={JPURPLE}
                        maxLength={150}
                    />
                    <View style={profileStyle.btnGenerateOtp}>
                        <CustomButton label={"Upload"} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default ProfileScreen;
