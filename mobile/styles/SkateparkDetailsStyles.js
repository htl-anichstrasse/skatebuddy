import { StyleSheet } from 'react-native';

const SkateparkDetailsStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
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
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
  },
});

export default SkateparkDetailsStyles;
