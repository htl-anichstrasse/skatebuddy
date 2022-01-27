// libraries
import React from 'react';
import { View, Pressable, Keyboard, ScrollView } from 'react-native';
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
  name: yup
    .string()
    .required('Name leer')
    .min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: yup.string().required('Email leer').email('Ungültige Email-Adresse'),
  password: yup
    .string()
    .required('Passwort leer')
    .min(8, 'Passwort muss mindestens 8 Zeichen lang sein'),
  confirmPassword: yup
    .string()
    .required('Passwort-Bestätigung leer')
    .oneOf([yup.ref('password')], 'Passwort stimmt nicht überein'),
});

const SignupScreen = ({ navigation }) => {
  const state = useAuthContextState();
  const { signUp } = useAuthContext();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <ScrollView>
          <Header text="Konto" color="Erstellen" />
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              signUp({
                name: values.name,
                email: values.email,
                password: values.password,
              });
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
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  name="name"
                  icon="card-account-details"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  touched={touched.name}
                  errors={errors.name}
                  //
                />
                <Text style={styles.errorText}>
                  {touched.name && errors.name}{' '}
                </Text>

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

                <Text style={styles.inputLabel}>Passwort bestätigen</Text>
                <TextInput
                  name="confirmPassword"
                  icon="key"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  touched={touched.confirmPassword}
                  errors={errors.confirmPassword}
                  //
                  secureTextEntry={true}
                />
                <Text style={styles.errorText}>
                  {touched.confirmPassword && errors.confirmPassword}{' '}
                </Text>

                <Button
                  title="Registrieren "
                  onPress={handleSubmit}
                  icon="account-group"
                  iconType="mci"
                  style={styles.button}
                />

                <View style={styles.linkContainer}>
                  <Text>Du hast ein Konto?</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Login');
                    }}
                  >
                    <Text style={styles.link}>Melde dich an</Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </Pressable>
    </View>
  );
};

export default SignupScreen;
