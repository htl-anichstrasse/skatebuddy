// libraries
import React from 'react';
import { View, Pressable, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// components
import Text from '../../components/common/Text';
import Button from '../../components/common/Button';
import Header from '../../components/LoginSignup/Header';
import TextInput from '../../components/LoginSignup/TextInput';

// hooks
import {
  useAuthContext,
  useAuthContextState,
} from '../../contexts/AuthContext';

// styles
import styles from '../../styles/LoginSignupStyles';

const reviewSchema = yup.object({
  email: yup.string().required('Email leer').email('Ungültige Email-Adresse'),
});

const LoginScreen = ({ navigation }) => {
  const state = useAuthContextState();
  const { forgotPassword } = useAuthContext();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <Header text="Passwort" color="Zurücksetzen" />

        <Formik
          initialValues={{ email: '' }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            forgotPassword({ email: values.email });
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

              <Button
                title="Link senden"
                onPress={handleSubmit}
                icon="email-send-outline"
                iconType="mci"
                style={styles.button}
              />
            </>
          )}
        </Formik>
        <View style={styles.linkContainer}>
          <Text>Du weißt bereits dein Passwort?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.link}>Melde dich an</Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
