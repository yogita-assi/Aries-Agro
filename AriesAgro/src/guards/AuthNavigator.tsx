
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SIGIN_SCREEN } from '../routes/Routes';
import signIn from '../screens/SignInScreen/signIn';

export type RootStackParamList = {
    SignIn: any,
    ForgetPassword: any,
    ResetPassword: any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={SIGIN_SCREEN} options={{ headerShown: false }} component={signIn} />
        </RootStack.Navigator>
    );
}

export default AuthNavigator;