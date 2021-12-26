import { StyleSheet } from 'react-native';

const SkateparksStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  entryContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
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
    padding: 5,
    backgroundColor: '#00A86B',
    borderRadius: 10,
    marginBottom: 5,
    color: '#fff',

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
