import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';

const AuthRoutes: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}

export default AuthRoutes;