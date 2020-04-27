import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import Character from '../../components/character/character';
import api from '../../services/api';

export default function Home() {
  return (
    <View style={styles.container}>
      <Character />
    </View>
  );
}
