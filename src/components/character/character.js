import React from 'react';
import {Image, View, Text, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.details}>
      <Image style={styles.image} source={require('../../images/rick.jpg')} />
      <Text style={styles.title}>Nome Nome</Text>
    </View>

    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

export default Home;
