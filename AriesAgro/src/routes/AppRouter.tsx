import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { WHITE } from '../shared/constants/color';
import { OTP_SCREEN, PRODUCT_SCREEN, SIGIN_SCREEN } from './Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import ProductScreen from '../screens/product/productScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    ProductScreen:any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppRouter(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={SIGIN_SCREEN} component={signIn} />
                <RootStack.Screen name={OTP_SCREEN} component={OtpScreen} />
                <RootStack.Screen name={PRODUCT_SCREEN} component={ProductScreen} />


            </RootStack.Navigator >
        </>
    );
}

export default AppRouter;
