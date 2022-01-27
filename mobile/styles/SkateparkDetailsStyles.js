import { StyleSheet } from 'react-native';
import colors from './Colors';

const SkateparkDetailsStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  headerText: {
    paddingTop: 15,
    paddingBottom: 8,
    fontSize: 25,
  },
  container: {
    alignItems: 'center',
    flex: 1,
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
  horizontalScroll: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {},
  textCenter: {
    textAlign: 'center',
  },
});

export default SkateparkDetailsStyles;
