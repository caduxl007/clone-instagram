import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { Home } from '../screens/Home';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#444',
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: 'black',
          height: 42,
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Home2"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="play-circle" size={size} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Home3"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Home4"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
