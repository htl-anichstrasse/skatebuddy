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
  entryRatingContainer: {
    padding: 5,
    backgroundColor: '#00A86B',
    borderRadius: 10,
    marginBottom: 5,
  },
  entryRatingText: {
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#fff',
  },
  entryDirectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom: 5,
  },
  entryDirectionsMethodContainer: {
    padding: 5,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryDirectionsMethodContainerBorder: {
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  entryDirectionsMethodText: {
    fontSize: 12,
    paddingRight: 5,
    color: '#000',
  },
  entryDirectionsIcon: {},
  entryImage: {
    flex: 1,
    width: '100%',
    height: null,
    borderRadius: 10,
    aspectRatio: 16 / 8,
  },
});

export default SkateparksStyles;
