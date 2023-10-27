import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthGuard from './src/guards/AuthGuard';
import AppRouter from './src/routes/AppRouter';
import { MyContextProvider, useAuthContext } from './src/authContext/AuthContext';
import { ModalProvider } from './src/modalContext/ModalContext';

function App(): JSX.Element {
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