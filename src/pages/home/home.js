import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Character from '../../components/character/character';
import api from '../../services/api';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const awaitCharacter = useCallback(() => {
    try {
      async function handleCharacter() {
        const response = await api.get('/character');
        setCharacters(response.data.results);
      }
      handleCharacter();
    } catch (error) {
      console.tron.log(error);
    }
  }, []);

  useEffect(() => {
    awaitCharacter();
  }, [awaitCharacter]);

  return (
    <View style={styles.container}>
      {characters.length > 0 ? (
        <FlatList
          style={{width: '100%'}}
          data={characters}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Character character={item} />
          )}
        />
      ) : (
        <View>
          <Text>Carregando</Text>
        </View>
      )}
    </View>
  );
}
