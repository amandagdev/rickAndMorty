import React from 'react';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import './src/config/ReactotronConfig';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#b5d5ea" />
      <Routes />
    </NavigationContainer>
  );
}
