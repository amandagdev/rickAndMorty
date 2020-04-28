import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#b5d5ea',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 380,
  },
  textContainer: {
    padding: 10,
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 45,
    color: '#c3c3c3',
  },
});

export default styles;
