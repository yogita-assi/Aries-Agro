import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BLUE, DARK_GREEN, GREEN, GREY, JPURPLE, RED, WHITE } from '../../shared/constants/color';
import HomeScreen from '../BottomTab/Home/HomeScreen';
import OrderScreen from '../BottomTab/Order/OrderScreen';
import ProductScreen from '../BottomTab/Products/ProductScreen';
import DealerScreen from '../BottomTab/Dealer/DealerScreen';
import FarmerDashboard from '../dashboard/FarmerDashboard';
import ProductDetailsScreen from '../ProductScreen/ProductDetailsScreen';
import OrderIcon from '../../svg/OrderIcon';
import RevenueIcon from '../../svg/RevenueIcon';
import ProductsIcon from '../../svg/ProductsIcon';
import AccountIcon from '../../svg/AccountIcon';
import HomeIconFill from '../../svg/HomeIconFill';
import HomeIcon from '../../svg/HomeIcon';
import OrderIconFill from '../../svg/OrderIconFill';
import ProductsIconFill from '../../svg/ProductsIconFill';
import AccountIconFill from '../../svg/AccountIconFill';

const Tab = createBottomTabNavigator()
const TabScreen = () => {

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: DARK_GREEN,
            tabBarInactiveTintColor: GREY,
            tabBarActiveBackgroundColor: WHITE,
            tabBarLabelStyle: { fontSize: 14 },
            headerShown: false

        }}>
            <Tab.Screen name="Home" component={FarmerDashboard}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (focused ?<HomeIconFill width={70} height={45} /> :<HomeIcon width={70} height={45} />
                    )
                }}
            />
           
            <Tab.Screen name="Order" component={OrderScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (focused ? <OrderIconFill width={24} height={45}/>:<OrderIcon width={60} height={25} />
                    )
                }} />
                 {/* <Tab.Screen name="Revenue" component={ProductDetailsScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (<RevenueIcon width={70} height={70}/>
                    )
                }} /> */}
            <Tab.Screen name="Products" component={ProductDetailsScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (focused ? <ProductsIconFill width={55} height={45}/>:<ProductsIcon width={25} height={40}/>
                    )
                }} />

            <Tab.Screen name="Account" component={DealerScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (focused ? <AccountIconFill width={25} height={40}/>:<AccountIcon width={25} height={40} />
                    )
                }} />


        </Tab.Navigator>
    )
}

export default TabScreen