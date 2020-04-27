import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Character from '../../components/character/character';
import api from '../../services/api';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const totalPages = 25;

  async function loadPage(page = pages) {
    console.tron.log(pages, 'pages');
    if (totalPages && page > totalPages) return;
    try {
      const response = await api.get(`/character/?page=${page}`);
      const data = await response.data.results;
      setCharacters([...characters, ...data]);
      setPages(page + 1);
    } catch (error) {
      console.tron.log(error);
    }
  }

  // const awaitCharacter = useCallback(() => {

  // }, []);

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <View style={styles.container}>
      {characters.length > 0 ? (
        <FlatList
          style={{width: '100%'}}
          onEndReached={() => loadPage()}
          onEndReachedThreshold={0.1}
          data={characters}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Character character={item} />}
        />
      ) : (
        <View>
          <Text>Carregando</Text>
        </View>
      )}
    </View>
  );
}
