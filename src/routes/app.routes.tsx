import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
;
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import NewAppointment from '../screens/NewAppointment';

const AppRoutes: React.FC = () => {

  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator tabBarOptions={{
      activeTintColor:"#0076D0"
    }} >
      <Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"Início",
          tabBarIcon: ({ color }) => 
            <MaterialCommunityIcons 
              name="calendar-today"
              color={color}  
              size={24}
            />
        }} 
      />
      <Screen 
        name="NewAppointment" 
        component={NewAppointment} 
        options={{
          title:"Novo atendimento",
          tabBarIcon: ({ color }) => 
            <MaterialCommunityIcons 
              name="calendar-plus"
              color={color}  
              size={24}
            />
        }}
      />
    </Navigator>
  );
}

export default AppRoutes;