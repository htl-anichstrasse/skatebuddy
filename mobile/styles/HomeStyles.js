import { getBackgroundColor } from 'react-native/Libraries/LogBox/UI/LogBoxStyle';
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeStyles;
