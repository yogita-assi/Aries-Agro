import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { WHITE } from '../shared/constants/color';
import { SIGIN_SCREEN } from './Routes';
import signIn from '../screens/SignInScreen/signIn';

export type RootStackParamList = {
    SignIn: any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppRouter(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={SIGIN_SCREEN} component={signIn} />
            </RootStack.Navigator >
        </>
    );
}

export default AppRouter;
