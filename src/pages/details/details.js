import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Details({route}) {
  const {name, gender, species, status, image, origin} = route.params.character;
  const navigation = useNavigation();

  useEffect(() => {
    function changeTitle() {
      navigation.setOptions({title: `${name}`});
    }
    changeTitle();
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.textContainer}>
        <Animatable.View
          animation="fadeInUp"
          delay={30}
          easing="ease-out-circ"
          direction="normal">
          <Text style={styles.text}>
            Nome: <Text style={styles.teste}>{name}</Text>
          </Text>
          <Text style={styles.text}>Espécie: {species}</Text>
          <Text style={styles.text}>Genero: {gender}</Text>
          <Text style={styles.text}>Origem: {origin.name}</Text>
          <Text style={styles.text}>Status de vida: {status}</Text>
        </Animatable.View>
      </View>
    </View>
  );
}
