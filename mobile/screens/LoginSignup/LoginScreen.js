// libraries
import React from 'react';
import { View, Pressable, Keyboard, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// components
import Text from '../../components/common/Text';
import Button from '../../components/common/Button';
import TextInput from '../../components/common/TextInput';
import Header from '../../components/LoginSignup/Header';

// hooks
import { useAuthContext } from '../../contexts/AuthContext';

// styles
import styles from '../../styles/LoginSignupStyles';

const reviewSchema = yup.object({
  email: yup.string().required('Email leer').email('Ungültige Email-Adresse'),
  password: yup.string().required('Passwort leer'),
});

const LoginScreen = ({ navigation }) => {
  const { signIn } = useAuthContext();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <ScrollView>
          <Header text="Skate" color="Buddy" />

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={reviewSchema}
            onSubmit={values => {
              signIn({ email: values.email, password: values.password });
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
                  keyboardType="email-address"
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
                  secureTextEntry
                />
                <Text style={styles.errorText}>
                  {touched.password && errors.password}{' '}
                </Text>

                <View style={styles.linkContainer}>
                  <Text>Passwort vergessen?</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('ForgotPassword');
                    }}
                  >
                    <Text style={styles.link}>Zurücksetzen</Text>
                  </Pressable>
                </View>

                <Button
                  title="Anmelden"
                  onPress={handleSubmit}
                  icon="location-enter"
                  iconType="mci"
                  style={styles.button}
                />
              </>
            )}
          </Formik>
          <View style={styles.linkContainer}>
            <Text>Du hast kein Konto?</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              <Text style={styles.link}>Registrieren</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
