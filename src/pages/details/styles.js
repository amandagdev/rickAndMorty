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
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    lineHeight: 45,
    color: '#fff',
    backgroundColor: '#b5d5ea',
    padding: 3,
    marginTop: 5,
  },
});

export default styles;
