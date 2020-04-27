import React from 'react';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import './src/config/ReactotronConfig';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
