
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { INVENTORY_STATUS, ORDER_SCREEN, ORDER_VERIFICATION_SCREEN, OREDR_REGISTARTION_SCREEN, OTP_SCREEN, SELECT_DISTRIBUTOR, SIGIN_SCREEN, UPLOAD_PURCHASE_ORDER } from '../routes/Routes';
import SignIn from '../screens/SignInScreen/signIn';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import OrderScreen from '../screens/BottomTab/Order/OrderScreen';
import SelectDistributor from '../screens/SelectDistributor';
import OrderVerificationScreen from '../screens/BottomTab/Order/OrderVerificationScreen';
import UploadPurchaseOrder from '../screens/BottomTab/Order/UploadPurchaseOrder';
import OrderRegistartionScreen from '../screens/BottomTab/Order/OrderRegistartionScreen';
import InventoryStatus from '../screens/InventoryStatus';

export type RootStackParamList = {
    SignIn: any,
    OtpScreen: any,
    OrderScreen: any,
    SelectDistributor: any,
    OrderVerificationScreen: any,
    UploadPurchaseOrder: any
    OrderRegistartionScreen: any
    InventoryStatus:any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
             <RootStack.Screen options={{ headerShown: false }} name={INVENTORY_STATUS} component={InventoryStatus} />
            <RootStack.Screen options={{ headerShown: false }} name={OREDR_REGISTARTION_SCREEN} component={OrderRegistartionScreen} />
            <RootStack.Screen options={{ headerShown: false }} name={UPLOAD_PURCHASE_ORDER} component={UploadPurchaseOrder} />
            <RootStack.Screen options={{ headerShown: false }} name={ORDER_VERIFICATION_SCREEN} component={OrderVerificationScreen} />
            <RootStack.Screen options={{ headerShown: false }} name={SELECT_DISTRIBUTOR} component={SelectDistributor} />
            <RootStack.Screen options={{ headerShown: false }} name={ORDER_SCREEN} component={OrderScreen} />
            <RootStack.Screen options={{ headerShown: false }} name={SIGIN_SCREEN} component={SignIn} />
            <RootStack.Screen name={OTP_SCREEN} options={{ headerShown: false }} component={OtpScreen} />
        </RootStack.Navigator>
    );
}

export default AuthNavigator;