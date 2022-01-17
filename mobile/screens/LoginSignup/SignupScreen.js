// libraries
import React from 'react';
import { View, Pressable, Keyboard } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { Formik } from 'formik';
import * as yup from 'yup';

// components
import Text from '../../components/common/Text';
import SignupScreenHeader from '../../components/LoginSignup/Header';
import TextInput from '../../components/LoginSignup/TextInput';
import SignupButton from '../../components/LoginSignup/SendButton';

// hooks
import {
  useAuthContext,
  useAuthContextState,
} from '../../contexts/AuthContext';

// styles
import styles from '../../styles/LoginSignupStyles';

const reviewSchema = yup.object({
  firstname: yup.string().required().min(2),
  lastname: yup.string().required().min(2),
  email: yup
    .string()
    .required('Email-Feld leer')
    .email('Ungültige Email-Adresse'),
  password: yup.string().required('Passwort-Feld leer'),
  confirmPassword: yup
    .string()
    .required()
    .min(8)
    .oneOf([yup.ref('password')], 'Passwort stimmt nicht überein'),
});

const SignupScreen = ({ navigation }) => {
  const state = useAuthContextState();
  const { signIn } = useAuthContext();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
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

              <SignupButton
                text="Registrieren"
                handleSubmit={handleSubmit}
                icon="send-outline"
              />
            </>
          )}
        </Formik>
      </Pressable>
    </View>
  );
};

export default SignupScreen;
