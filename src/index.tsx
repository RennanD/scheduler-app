import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'

import { AuthProvider } from './hooks/authHook';

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default src;