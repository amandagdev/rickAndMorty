import React from 'react';
import {Image, View, Text, Button} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.details}>
      <Image style={styles.image} source={require('../../images/rick.jpg')} />
      <Text style={styles.title}>Nome Nome</Text>
    </View>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Details')}>
      <Text style={styles.buttonText}>Detalhes</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
