// libraries
import React from 'react';
import { View, Pressable, Keyboard } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { Formik } from 'formik';
import * as yup from 'yup';

// components
import Text from '../../components/common/Text';
import LoginScreenHeader from '../../components/LoginSignup/Header';
import TextInput from '../../components/LoginSignup/TextInput';
import SendButton from '../../components/LoginSignup/SendButton';

// hooks
import {
  useAuthContext,
  useAuthContextState,
} from '../../contexts/AuthContext';

// styles
import styles from '../../styles/LoginSignupStyles';

const reviewSchema = yup.object({
  email: yup
    .string()
    .required('Email-Feld leer')
    .email('Ungültige Email-Adresse'),
  password: yup.string().required('Passwort-Feld leer'),
});

const LoginScreen = ({ navigation }) => {
  const state = useAuthContextState();
  const { signIn } = useAuthContext();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <LoginScreenHeader />

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            signIn({ username: values.email, password: values.password });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <Text style={styles.inputLabel}>Email-Adresse</Text>
              <TextInput
                name="email"
                icon="email"
                autoComplete="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                touched={touched.email}
                errors={errors.email}
                //
                keyboardType={'email-address'}
              />

              <Text style={styles.errorText}>
                {touched.email && errors.email}{' '}
              </Text>

              <Text style={styles.inputLabel}>Passwort</Text>
              <TextInput
                name="password"
                icon="lock"
                autoComplete="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                touched={touched.password}
                errors={errors.password}
                //
                secureTextEntry={true}
              />
              <Text style={styles.errorText}>
                {touched.password && errors.password}{' '}
              </Text>

              <View style={styles.signUpLinkContainer}>
                <Text style={styles.signUpLinkText}>Passwort vergessen?</Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}
                >
                  <Text style={styles.forgotPasswordLink}>Zurücksetzen</Text>
                </Pressable>
              </View>

              <SendButton
                text="Login"
                handleSubmit={handleSubmit}
                icon="log-in-outline"
              />
            </>
          )}
        </Formik>
        <View style={styles.signUpLinkContainer}>
          <Text style={styles.signUpLinkText}>Du hast kein Konto?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text style={styles.signUpLink}>Registrieren</Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
