import { getBackgroundColor } from 'react-native/Libraries/LogBox/UI/LogBoxStyle';
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    position: 'absolute',
    backgroundColor: '#000',
    height: 20,
    width: 150,
    bottom: 20,
  },
  navdot: {
    backgroundColor: '#fff',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});

export default HomeStyles;
