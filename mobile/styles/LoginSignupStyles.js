import { StyleSheet } from 'react-native';
import colors from './Colors';

const LoginSignupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTextColor: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
  inputLabel: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  borderFocused: {
    borderBottomColor: colors.primary,
  },
  border: {
    borderBottomColor: colors.gray1,
  },
  borderError: {
    borderBottomColor: colors.error,
  },
  input: {
    color: colors.text,
    flex: 1,
    fontSize: 18,
    textAlignVertical: 'top',
  },
  inputIcon: {
    // alignSelf: 'flex-start',
    padding: 10,
    paddingVertical: 12,
  },
  errorText: {
    marginHorizontal: 20,
    color: colors.error,
  },
  button: {
    marginVertical: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  link: {
    paddingLeft: 5,
    color: colors.secondary,
  },
});

export default LoginSignupStyles;
