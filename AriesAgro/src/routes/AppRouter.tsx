import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { WHITE } from '../shared/constants/color';
import { INTRO_SCREEN, OTP_SCREEN, PRODUCT_DETAILS, PRODUCT_SCREEN, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN } from './Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import IntroSliderScreen from '../screens/IntroSliderScreen';
import ProductDetailsScreen from '../screens/ProductScreen/ProductDetailsScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    ProductScreen: any,
    SelectTypeScreen: any,
    RegistrationScreen: any,
    IntroSliderScreen: any,
    ProductDetailsScreen: any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppRouter(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={INTRO_SCREEN} component={IntroSliderScreen} />
                <RootStack.Screen name={OTP_SCREEN} component={OtpScreen} />
                <RootStack.Screen name={SELECT_TYPE_SCREEN} component={SelectTypeScreen} />
                <RootStack.Screen name={REGESTRATION_SCREEN} component={RegistrationScreen} />
                <RootStack.Screen name={PRODUCT_DETAILS} component={ProductDetailsScreen} />
            </RootStack.Navigator >
        </>
    );
}

export default AppRouter;
