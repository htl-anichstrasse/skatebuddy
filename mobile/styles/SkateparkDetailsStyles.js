import { StyleSheet } from 'react-native';

const SkateparkDetailsStyles = StyleSheet.create({
  title: {
    padding: 10,
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  coordinates: {
    padding: 10,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    backgroundColor: '#fff',
    margin: 20,
    borderColor: '#ddd',
    borderWidth: 2,
    borderStyle: 'solid',
  },
});

export default SkateparkDetailsStyles;
