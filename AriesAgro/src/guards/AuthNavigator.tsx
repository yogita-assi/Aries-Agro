
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OTP_SCREEN, PRODUCT_SCREEN, SIGIN_SCREEN } from '../routes/Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import ProductScreen from '../screens/product/productScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen:any,
    ForgetPassword: any,
    ResetPassword: any,
    ProductScreen:any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={SIGIN_SCREEN} options={{ headerShown: false }} component={signIn} />
            <RootStack.Screen name={OTP_SCREEN} options={{ headerShown: false }} component={OtpScreen} />
            <RootStack.Screen name={PRODUCT_SCREEN} options={{ headerShown: false }} component={ProductScreen} />


        </RootStack.Navigator>
    );
}

export default AuthNavigator;