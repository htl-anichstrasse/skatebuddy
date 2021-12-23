import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  reload: {
    textAlign: 'center',
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default HeaderStyles;
