import React from 'react';
import {Image, View, Text } from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default function Character({navigation, character}) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image style={styles.image} source={{uri: character.image}} />
        <Text style={styles.title}>{character.name}</Text>
      </View>
      <Animatable.View
        animation="fadeInUp"
        delay={30}
        easing="ease-out-circ"
        direction="normal">
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Details', {
              character: character,
            })
          }>
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
