import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { WHITE } from '../shared/constants/color';
import { FARMERDASHBOARD, HOME_SCREEN, PRODUCT_SCREEN, INTRO_SCREEN, OTP_SCREEN, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN, TAB_SCREEN, PRODUCT_DETAILS } from './Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import FarmerDashboard from '../screens/dashboard/FarmerDashboard';
import TabScreen from '../screens/TabScreen/TabScreen';
import IntroSliderScreen from '../screens/IntroSliderScreen';
import ProductDetailsScreen from '../screens/ProductScreen/ProductDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    SelectTypeScreen: any,
    RegistrationScreen: any,
    FarmerDashboard: any,
    HomeScreen: any,
    IntroSliderScreen: any,
    ProductDetailsScreen: any,
    TabScreen: any,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator()

function AppRouter(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={REGESTRATION_SCREEN} component={RegistrationScreen} />
                <RootStack.Screen name={SELECT_TYPE_SCREEN} component={SelectTypeScreen} />
                <RootStack.Screen name={FARMERDASHBOARD} component={FarmerDashboard} />
                <RootStack.Screen name={TAB_SCREEN} options={{ headerShown: false }} component={TabScreen} />
                <RootStack.Screen name={PRODUCT_DETAILS} component={ProductDetailsScreen} />
            </RootStack.Navigator >
        </>
    );
}

export default AppRouter;
