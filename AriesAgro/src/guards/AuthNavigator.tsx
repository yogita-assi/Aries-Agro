
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FARMERDASHBOARD, HOME_SCREEN, OTP_SCREEN, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN } from '../routes/Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import FarmerDashboard from '../screens/dashboard/FarmerDashboard';
import HomeScreen from '../screens/BottomTab/Home/HomeScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    ForgetPassword: any,
    ResetPassword: any,
    SelectTypeScreen: any,
    RegistrationScreen: any,
    FarmerDashboard:any,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={SIGIN_SCREEN} options={{ headerShown: false }} component={signIn} />
            <RootStack.Screen name={OTP_SCREEN} options={{ headerShown: false }} component={OtpScreen} />
            <RootStack.Screen name={SELECT_TYPE_SCREEN} options={{ headerShown: false }} component={SelectTypeScreen} />
            <RootStack.Screen name={REGESTRATION_SCREEN} options={{ headerShown: false }} component={RegistrationScreen} />
            <RootStack.Screen name={FARMERDASHBOARD} options={{ headerShown: false }} component={FarmerDashboard} />


        </RootStack.Navigator>
    );
}

export default AuthNavigator;