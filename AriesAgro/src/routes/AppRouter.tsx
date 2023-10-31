import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { WHITE } from '../shared/constants/color';
import { OTP_SCREEN, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN } from './Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    SelectTypeScreen: any,
    RegistrationScreen: any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppRouter(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={SIGIN_SCREEN} component={signIn} />
                <RootStack.Screen name={OTP_SCREEN} component={OtpScreen} />
                <RootStack.Screen name={SELECT_TYPE_SCREEN} component={SelectTypeScreen} />
                <RootStack.Screen name={REGESTRATION_SCREEN} component={RegistrationScreen} />
            </RootStack.Navigator >
        </>
    );
}

export default AppRouter;
