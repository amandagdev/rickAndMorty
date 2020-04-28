import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';

// import styles from './styles';

export default function Details({route}) {
  const {name, gender, species, status, image, origin} = route.params.character;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Espécie: {species}</Text>
      <Text style={styles.text}>Genero: {gender}</Text>
      <Text style={styles.text}>Origem: {origin.name}</Text>
      <Text style={styles.text}>Status de vida: {status}</Text>
     </View>
    </View>
  );
}
