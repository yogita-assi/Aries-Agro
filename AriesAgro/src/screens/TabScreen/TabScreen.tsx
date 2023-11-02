import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BLUE, GREEN, JPURPLE, RED, WHITE } from '../../shared/constants/color';
import HomeScreen from '../BottomTab/Home/HomeScreen';
import OrderScreen from '../BottomTab/Order/OrderScreen';
import ProductScreen from '../BottomTab/Products/ProductScreen';
import DealerScreen from '../BottomTab/Dealer/DealerScreen';
import { Icon } from '@rneui/themed';
import FarmerDashboard from '../dashboard/FarmerDashboard';
import ProductDetailsScreen from '../ProductScreen/ProductDetailsScreen';

const Tab =createBottomTabNavigator()
const TabScreen =()=>{

    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor:WHITE,
            tabBarInactiveTintColor:GREEN,
            tabBarActiveBackgroundColor:JPURPLE,
            tabBarLabelStyle:{fontSize:14},
            headerShown:false
            
        }}>
            <Tab.Screen name="Home" component={FarmerDashboard} 
                options={{
                    tabBarIcon:({color,size,focused})=>(<Icon name='home' type='antdesign' color={focused ? WHITE : GREEN} ></Icon>
                    )
                }}        
            />
            <Tab.Screen name="Dealer" component={OrderScreen}
               options={{
                tabBarIcon:({color,size,focused})=>(<Icon name='home' type='antdesign'  color={focused ? WHITE : GREEN}></Icon>
                )
            }}  />  
            <Tab.Screen name="Product" component={ProductDetailsScreen}
              options={{
                tabBarIcon:({color,size,focused})=>(<Icon name='home' type='antdesign' color={focused ? WHITE : GREEN} ></Icon>
                )
            }}  />
                 <Tab.Screen name="Account" component={DealerScreen}
              options={{
                tabBarIcon:({color,size,focused})=>(<Icon name='home' type='antdesign' color={focused ? WHITE : GREEN} ></Icon>
                )
            }}  />


            </Tab.Navigator>
    )
}

export default TabScreen