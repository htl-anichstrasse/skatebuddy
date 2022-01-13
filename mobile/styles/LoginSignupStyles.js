import { StyleSheet } from 'react-native';
import colors from './Colors';

const LoginSignupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
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
    marginHorizontal: 20,
    marginTop: 40,
  },
  inputContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
    flex: 1,
    fontSize: 18,
  },
  loginButtonContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: colors.primary,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '30%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpLinkText: {
    padding: 20,
    paddingRight: 5,
  },
  signUpLink: {
    padding: 20,
    paddingLeft: 0,
    color: colors.primary,
  },
});

export default LoginSignupStyles;
