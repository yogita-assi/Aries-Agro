import React from "react";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../guards/AuthNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StatusBar } from "react-native";
import IntroSliderFirstImage from "../../../svg/IntrosliderSvg/IntroSliderFirstImage";
import { accountStyle } from "../../style/accountStyle";
import { View } from "react-native";
import { WHITE } from "../../../shared/constants/color";
import ProductImage from "../../../svg/ProductImage";
import TextArchivoBold from "../../../shared/fontfamily/TextArchivoBold";
import AccountNameImage from "../../../svg/AccountSvg/AccountNameImage";
import AccountProfile from "../../../svg/AccountSvg/AccountProfile";
import AccountOrder from "../../../svg/AccountSvg/AccountOrder";
import AccountInventory from "../../../svg/AccountSvg/AccountInventory";
import AccountReprensntative from "../../../svg/AccountSvg/AccountReprensntative";
import AccountContact from "../../../svg/AccountSvg/AccountContact";
import AccountFeedback from "../../../svg/AccountSvg/AccountFeedback";
// import AccountRate from "../../../svg/AccountSvg/AccountRate";
import AccountTermsAndCondition from "../../../svg/AccountSvg/AccountTermsAndCondition";
import AccountPrivacyPolicy from "../../../svg/AccountSvg/AccountPrivacyPolicy";
import AccountVersion from "../../../svg/AccountSvg/AccountVersion";
import AccoountSetting from "../../../svg/AccountSvg/AccoountSetting";
import { PROFILE_SCREEN } from "../../../routes/Routes";

const Accounts = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={accountStyle.mainCardView}>
            <TextArchivoBold style={accountStyle.txtShopName}>Krushi Fertilizers</TextArchivoBold>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <ProductImage height={80} width={150} />
            <View style={accountStyle.mainAccountDetails}>
                <AccountNameImage height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Datta Shinde</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountProfile height={23} width={40} />
                <Pressable onPress={() => navigation.navigate(PROFILE_SCREEN)}>
                    <TextArchivoBold style={accountStyle.txtAccountName}>Profile</TextArchivoBold>
                </Pressable>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountOrder height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>My Orders</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountInventory height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Inventory</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountReprensntative height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>My Aries Representative</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountContact height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Contact Us</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountFeedback height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Feedback</TextArchivoBold>
            </View>
            {/* <View style={accountStyle.accountDetailsName}>
                <AccountRate height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Rate Us</TextArchivoBold>
            </View> */}
            <View style={accountStyle.accountDetailsName}>
                <AccountTermsAndCondition height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Terms & Conditions</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountPrivacyPolicy height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Privacy Policy</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccountVersion height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Version No. & Update</TextArchivoBold>
            </View>
            <View style={accountStyle.accountDetailsName}>
                <AccoountSetting height={23} width={40} />
                <TextArchivoBold style={accountStyle.txtAccountName}>Settings</TextArchivoBold>
            </View>
            <View style={accountStyle.txtButton}>
                <Pressable>
                    <TextArchivoBold style={accountStyle.txtDeleteProfile}>Delete Profile</TextArchivoBold>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Accounts