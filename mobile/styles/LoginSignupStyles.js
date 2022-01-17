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
    marginBottom: 40,
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
    color: colors.text,
    flex: 1,
    fontSize: 18,
  },
  errorText: {
    marginHorizontal: 20,
    color: colors.error,
  },
  loginButtonContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: colors.primary,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpLink: {
    paddingLeft: 5,
    color: colors.pGradient[5],
  },
  forgotPasswordLink: {
    paddingLeft: 5,
    color: colors.pGradient[5],
  },
});

export default LoginSignupStyles;
