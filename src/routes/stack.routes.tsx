import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Comments } from '../screens/Comments';

import AuthRoutes from './tab.routes';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: 'black'
      }
    }}
  >
    <StackRoutes.Screen name="Home" component={AuthRoutes} />
    <StackRoutes.Screen name="Comments" component={Comments} />
  </StackRoutes.Navigator>
)

export default AppRoutes;
