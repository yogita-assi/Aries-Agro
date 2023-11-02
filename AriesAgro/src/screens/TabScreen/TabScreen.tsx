import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GREEN, JPURPLE, WHITE } from '../../shared/constants/color';
import HomeScreen from '../BottomTab/Home/HomeScreen';
import OrderScreen from '../BottomTab/Order/OrderScreen';
import ProductScreen from '../BottomTab/Products/ProductScreen';
import DealerScreen from '../BottomTab/Dealer/DealerScreen';
import { Icon } from "@rneui/themed";

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
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon:({color,size,focused})=>(<Icon name='home' type='antdesign' color={focused ? WHITE : GREEN} ></Icon>
                    )
                }}        
            />
            <Tab.Screen name="Order" component={OrderScreen}
               options={{
                tabBarIcon:({color,size,focused})=>(<Icon name='qrcode' type='antdesign'  color={focused ? WHITE : GREEN}></Icon>
                )
            }}  />  
            <Tab.Screen name="Product" component={ProductScreen}
              options={{
                tabBarIcon:({color,size,focused})=>(<Icon name='setting' type='antdesign' color={focused ? WHITE : GREEN} ></Icon>
                )
            }}  />
                 <Tab.Screen name="Dealer" component={DealerScreen}
              options={{
                tabBarIcon:({color,size,focused})=>(<Icon name='setting' type='antdesign' color={focused ? WHITE : GREEN} ></Icon>
                )
            }}  />


            </Tab.Navigator>
    )
}

export default TabScreen