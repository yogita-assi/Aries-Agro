
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FARMERDASHBOARD, INTRO_SCREEN, OTP_SCREEN, PRODUCT_DETAILS, PRODUCT_SCREEN, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN, TAB_SCREEN, VIEW_PRODUCT_DETAILS } from '../routes/Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import FarmerDashboard from '../screens/dashboard/FarmerDashboard';
import HomeScreen from '../screens/BottomTab/Home/HomeScreen';
import ProductDetailsScreen from '../screens/ProductScreen/ProductDetailsScreen';
import IntroSliderScreen from '../screens/IntroSliderScreen';
import ViewProductDetaillsScreen from '../screens/ProductScreen/ViewProductDetaillsScreen';
// import ProductScreen from '../screens/product/productScreen';
import TabScreen from '../screens/TabScreen/TabScreen';
import SignIn from '../screens/SignInScreen/signIn';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ headerShown: false }} name={SIGIN_SCREEN} component={SignIn} />
            <RootStack.Screen name={OTP_SCREEN} options={{ headerShown: false }} component={OtpScreen} />
        </RootStack.Navigator>
    );
}

export default AuthNavigator;