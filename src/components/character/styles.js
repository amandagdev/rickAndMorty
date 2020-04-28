import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: '#f9f07c',
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
});

export default styles;
