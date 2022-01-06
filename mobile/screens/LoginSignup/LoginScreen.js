// libraries
import React from 'react';
import { Text, View, Pressable, Keyboard } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { Formik } from 'formik';
import * as yup from 'yup';

// components
import LoginScreenHeader from '../../components/LoginSignup/Header';
import TextInput from '../../components/LoginSignup/TextInput';
import LoginButton from '../../components/LoginSignup/LoginButton';

// hooks
import {
  useAuthContext,
  useAuthContextState,
} from '../../contexts/AuthContext';

// styles
import styles from '../../styles/LoginSignupStyles';

const reviewSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
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
              <Text style={styles.inputLabel}>Email</Text>
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

              <Text style={styles.inputLabel}>Password</Text>
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
              <View style={styles.signUpLinkContainer}>
                <Text style={styles.signUpLinkText}>Forgot password?</Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}
                >
                  <Text style={styles.signUpLink}>Recover here</Text>
                </Pressable>
              </View>

              <LoginButton handleSubmit={handleSubmit} />
            </>
          )}
        </Formik>
        <View style={styles.signUpLinkContainer}>
          <Text style={styles.signUpLinkText}>Don't have an account? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text style={styles.signUpLink}>Sign-up here</Text>
          </Pressable>
        </View>
      </Pressable>

      {/* <Button
        title="Sign in"
        onPress={() => signIn({ username: email, password })}
      />
      <Button
        title="Print auth state"
        onPress={() => {
          console.log(state);
          Keychain.getInternetCredentials('jwt').then(creds => {
            console.log(creds);
          });
        }}
      /> */}
    </View>
  );
};

export default LoginScreen;
