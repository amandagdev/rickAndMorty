import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

export default function Input({onChangeText, placeholder}) {
  return (
    <TextInput style={styles.input} onChangeText={onChangeText} placeholder={placeholder} />
  );
}
