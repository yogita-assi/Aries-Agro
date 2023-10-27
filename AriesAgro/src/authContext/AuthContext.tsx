import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE } from '../shared/constants/infoMsgStrings';


export const MyContext = createContext<any | undefined>(undefined);

export function useAuthContext() {
    return useContext(MyContext);
}

export function MyContextProvider({ children }: any) {
    const [state, setState]: any = useState({
        isIntroSliderDone: false,
        userInfo: {},
        isAuthenticated: false
    });

    useEffect(() => {
        async function getUserFromStorage() {
            try {
                const response: any = await AsyncStorage.multiGet([ASYNC_STORAGE.ISINTROSLIDERDONE, ASYNC_STORAGE.ISAUTHENTICATED, ASYNC_STORAGE.USERINFO]);
                if (response) {
                    setState({ ...state, isIntroSliderDone: response[0]?.[1] || false, isAuthenticated: response[1]?.[1] || false, userInfo: response[2]?.[1] || {} });
                }
            } catch (error) {
                console.error('Error retrieving user from storage:', error);
            }
        }
        getUserFromStorage();
    }, []);

    const updateState = (name: any, value: any) => {
        if (name === ASYNC_STORAGE.USERINFO) {
            setState({ ...state, isAuthenticated: true, userInfo: value });
            AsyncStorage.multiSet([[ASYNC_STORAGE.ISAUTHENTICATED, JSON.stringify(true)], [name, value]]);
        }
        else {
            setState({ ...state, [name]: value });
            AsyncStorage.setItem(name, value);
        }
    };
    const logout = () => {
        setState({ ...state, isAuthenticated: false, userInfo: {} });
        AsyncStorage.multiSet([[ASYNC_STORAGE.ISAUTHENTICATED, JSON.stringify(false)], [ASYNC_STORAGE.USERINFO, JSON.stringify({})]]);
    }
    return (
        <MyContext.Provider value={{ state, updateState, logout }}>
            {children}
        </MyContext.Provider>
    );
}
