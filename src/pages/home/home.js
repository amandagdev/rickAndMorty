import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import Character from '../../components/character/character';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Character />
  </View>
);

export default Home;
