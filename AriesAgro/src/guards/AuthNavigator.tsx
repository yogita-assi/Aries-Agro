
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OTP_SCREEN, SIGIN_SCREEN } from '../routes/Routes';
import SignIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';

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