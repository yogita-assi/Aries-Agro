
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { INTRO_SCREEN, OTP_SCREEN, PRODUCT_DETAILS, PRODUCT_SCREEN, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN, VIEW_PRODUCT_DETAILS } from '../routes/Routes';
import signIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ProductDetailsScreen from '../screens/ProductScreen/ProductDetailsScreen';
import IntroSliderScreen from '../screens/IntroSliderScreen';
import ViewProductDetaillsScreen from '../screens/ProductScreen/ViewProductDetaillsScreen';
// import ProductScreen from '../screens/product/productScreen';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    ForgetPassword: any,
    ResetPassword: any,
    ProductScreen: any,
    SelectTypeScreen: any,
    RegistrationScreen: any,
    IntroSliderScreen: any,
    ProductDetailsScreen: any,
    ViewProductDetaillsScreen:any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ headerShown: false }} name={SIGIN_SCREEN} component={IntroSliderScreen} />
            {/* <RootStack.Screen name={SIGIN_SCREEN} options={{ headerShown: false }} component={signIn} /> */}
            <RootStack.Screen name={OTP_SCREEN} options={{ headerShown: false }} component={OtpScreen} />
            <RootStack.Screen name={SELECT_TYPE_SCREEN} options={{ headerShown: false }} component={SelectTypeScreen} />
            <RootStack.Screen name={REGESTRATION_SCREEN} options={{ headerShown: false }} component={RegistrationScreen} />
            <RootStack.Screen name={PRODUCT_DETAILS} options={{ headerShown: false }} component={ProductDetailsScreen} />
            <RootStack.Screen name={VIEW_PRODUCT_DETAILS} options={{ headerShown: false }} component={ViewProductDetaillsScreen} />
            {/* <RootStack.Screen name={PRODUCT_SCREEN} options={{ headerShown: false }} component={ProductScreen} /> */}
        </RootStack.Navigator>
    );
}

export default AuthNavigator;