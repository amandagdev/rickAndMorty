import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import Character from '../../components/character/character';
import api from '../../services/api';
import Input from '../../components/input/input';

export default function Home({navigation}) {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = 25;
  const [filterChar, onChangeText] = useState('');
  const [character, setCharacter] = useState([]);

  async function loadPage(page = pages) {
    if (totalPages && page > totalPages) return;
    setLoading(true);
    try {
      const response = await api.get(`/character/?page=${page}`);
      const data = await response.data.results;
      setCharacters([...characters, ...data]);
      setPages(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function filterCharacter() {
      try {
        const response = await api.get(`/character/?name=${filterChar}`);
        const data = response.data.results;
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    }

    filterCharacter();
  }, [filterChar]);

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Input
          onChangeText={text => onChangeText(text)}
          value={filterChar}
          placeholder="Buscar"
        />
      </View>
      {characters < 0 && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#f9f07c" />
        </View>
      )}
      {filterChar === '' ? (
        <FlatList
          style={{width: '100%'}}
          onEndReached={() => loadPage()}
          onEndReachedThreshold={0.1}
          data={characters}
          ListFooterComponent={
            loading && <ActivityIndicator size="large" color="#f9f07c" />
          }
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Character character={item} navigation={navigation} />
          )}
        />
      ) : (
        <FlatList
          style={{width: '100%'}}
          data={character}
          ListFooterComponent={
            loading && <ActivityIndicator size="large" color="#f9f07c" />
          }
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Character character={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
}
