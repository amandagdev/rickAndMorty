import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#b5d5ea',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
