import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthGuard from './src/guards/AuthGuard';
import AppRouter from './src/routes/AppRouter';
import { MyContextProvider, useAuthContext } from './src/authContext/AuthContext';
import { ModalProvider } from './src/modalContext/ModalContext';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => { setTimeout(() => SplashScreen.hide(), 1000) }, []);
  return (
    <NavigationContainer>
      <AuthGuard>
        <AppRouter />
      </AuthGuard>
    </NavigationContainer>
  );
}
export default () => (
  <ModalProvider>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </ModalProvider>
);