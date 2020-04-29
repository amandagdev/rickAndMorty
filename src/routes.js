import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/home/home';
import Details from './pages/details/details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          title: 'Rick and Morty',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Rick and Morty',
          headerTintColor: '#000',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
