
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FARMERDASHBOARD, TAB_SCREEN, INTRO_SCREEN, OTP_SCREEN, PRODUCT_DETAILS, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN } from '../routes/Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import FarmerDashboard from '../screens/dashboard/FarmerDashboard';
import HomeScreen from '../screens/BottomTab/Home/HomeScreen';
import ProductDetailsScreen from '../screens/ProductScreen/ProductDetailsScreen';
import IntroSliderScreen from '../screens/IntroSliderScreen';
import TabScreen from '../screens/TabScreen/TabScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    ForgetPassword: any,
    ResetPassword: any,
    SelectTypeScreen: any,
    RegistrationScreen: any,
    FarmerDashboard: any,
    IntroSliderScreen: any,
    ProductDetailsScreen: any
    TabScreen: any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ headerShown: false }} name={SIGIN_SCREEN} component={IntroSliderScreen} />
            <RootStack.Screen name={OTP_SCREEN} options={{ headerShown: false }} component={OtpScreen} />
            <RootStack.Screen name={SELECT_TYPE_SCREEN} options={{ headerShown: false }} component={SelectTypeScreen} />
            <RootStack.Screen name={REGESTRATION_SCREEN} options={{ headerShown: false }} component={RegistrationScreen} />
            <RootStack.Screen name={FARMERDASHBOARD} options={{ headerShown: false }} component={FarmerDashboard} />
            <RootStack.Screen name={PRODUCT_DETAILS} options={{ headerShown: false }} component={ProductDetailsScreen} />
            <RootStack.Screen name={TAB_SCREEN} options={{ headerShown: false }} component={TabScreen} />
        </RootStack.Navigator>
    );
}

export default AuthNavigator;