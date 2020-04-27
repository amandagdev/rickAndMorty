import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Character = ({navigation, character}) => (
  <View style={styles.container}>
    <View style={styles.details}>
      <Image style={styles.image} source={{uri: character.image}} />
      <Text style={styles.title}>{character.name}</Text>
    </View>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Details')}>
      <Text style={styles.buttonText}>Detalhes</Text>
    </TouchableOpacity>
  </View>
);

export default Character;
