import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { WHITE } from '../shared/constants/color';
import { FARMERDASHBOARD, REGESTRATION_SCREEN, SELECT_TYPE_SCREEN, SIGIN_SCREEN, TAB_SCREEN, PRODUCT_DETAILS, VIEW_PRODUCT_DETAILS, DEALER_REGISTRATION, DEALER_APPROVAL, CHOOSE_INTEREST } from './Routes';
import SelectTypeScreen from '../screens/SelectType/SelectTypeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import FarmerDashboard from '../screens/dashboard/FarmerDashboard';
import TabScreen from '../screens/TabScreen/TabScreen';
import ProductDetailsScreen from '../screens/ProductScreen/ProductDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewProductDetaillsScreen from '../screens/ProductScreen/ViewProductDetaillsScreen';
import { useAuthContext } from '../authContext/AuthContext';
import DealerRegistrationScreen from '../screens/Dealer/DealerRegistrationScreen';
import DealerApprovalScreen from '../screens/Dealer/DealerApprovalScreen';
import ChooseInterestScreen from '../screens/ChooseInterestScreen';

export type RootStackParamList = {
    SelectTypeScreen: any,
    RegistrationScreen: any,
    FarmerDashboard: any,
    IntroSliderScreen: any,
    ProductDetailsScreen: any,
    ViewProductDetaillsScreen: any
    TabScreen: any
    DealerRegistrationScreen: any
    DealerApprovalScreen: any
    ChooseInterestScreen: any
}
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator()

function AppRouter(): JSX.Element {
    const { state }: any = useAuthContext();
    const isUserVerify = JSON.parse(state?.userInfo)?.isUser
    console.log(isUserVerify, "...")
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {isUserVerify ? (
                    <RootStack.Screen name={FARMERDASHBOARD} options={{ headerShown: false }} component={FarmerDashboard} />
                ) : (
                    <>
                        <RootStack.Screen name={SELECT_TYPE_SCREEN} options={{ headerShown: false }} component={SelectTypeScreen} />
                        <RootStack.Screen name={REGESTRATION_SCREEN} options={{ headerShown: false }} component={RegistrationScreen} />
                        <RootStack.Screen name={CHOOSE_INTEREST} options={{ headerShown: false }} component={ChooseInterestScreen} />
                        <RootStack.Screen name={FARMERDASHBOARD} options={{ headerShown: false }} component={FarmerDashboard} />
                    </>
                )}
            </RootStack.Navigator >
        </>
    );
}
export default AppRouter;
