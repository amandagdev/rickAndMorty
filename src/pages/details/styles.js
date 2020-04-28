import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  textContainer: {
    padding: 10,
    flex: 1,
    marginTop: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 50,
    color: '#b5d5ea',
  },
});

export default styles;
