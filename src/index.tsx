import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default src;