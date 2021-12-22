import { StyleSheet } from 'react-native';

const SkateparksStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  entryContainer: {
    margin: 10,
    marginTop: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entryName: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryRating: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  entryImage: {
    flex: 1,
    width: '100%',
    height: null,
    borderRadius: 10,
    aspectRatio: 16 / 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default SkateparksStyles;
