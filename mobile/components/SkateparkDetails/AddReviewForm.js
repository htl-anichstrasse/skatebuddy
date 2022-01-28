// libraries
import React, { useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Slider from '@react-native-community/slider';

// components
import Text from '../common/Text';
import Button from '../common/Button';
import TextInput from '../LoginSignup/TextInput';

// hooks

// styles
import styles from '@styles/SkateparkDetailsStyles';
import colors from '@styles/Colors';

const reviewSchema = yup.object({
  title: yup
    .string()
    .required('Titel leer')
    .min(4, 'Der Titel muss mindestens 4 Zeichen lang sein')
    .max(17, 'Der Titel darf maximal 17 Zeichen lang sein'),
  content: yup
    .string()
    .required('Inhalt leer')
    .min(8, 'Der Inhalt muss mindestens 8 Zeichen lang sein'),
  rating: yup
    .string()
    .required('Bewertung leer')
    .test('is-num-1-5', 'Bewertung muss zwischen 1 und 5 liegen', val => {
      return val < 6 && val > 0;
    }),
});

const AddReviewForm = ({ newReview, setModalVisible }) => {
  return (
    <Formik
      initialValues={{ title: '', content: '', rating: '3' }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        //! TODO values.userId = session.getCurrentUser().userId;
        values.userId = 0;
        newReview(values);
        setModalVisible(false);
      }}
    >
      {({
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <>
          <Text style={styles.inputLabel}>Titel</Text>
          <TextInput
            name="title"
            icon="alpha-t-box"
            value={values.title}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            touched={touched.title}
            errors={errors.title}
            color={colors.secondary}
          />

          <Text style={styles.errorText}>{touched.title && errors.title} </Text>

          <Text style={styles.inputLabel}>Inhalt</Text>
          <TextInput
            name="content"
            icon="text-box"
            value={values.content}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            touched={touched.content}
            errors={errors.content}
            color={colors.secondary}
            //
            multiline={true}
            numberOfLines={4}
          />

          <Text style={styles.errorText}>
            {touched.content && errors.content}{' '}
          </Text>

          <Text style={styles.inputLabel}>Bewertung</Text>
          <Text style={styles.ratingValue}>{values.rating}</Text>
          <Slider
            step={1}
            style={styles.ratingSlider}
            minimumValue={1}
            maximumValue={5}
            onSlidingComplete={rating => {
              touched.rating = true;
              setFieldValue('rating', rating.toString());
            }}
            value={parseInt(values.rating)}
            minimumTrackTintColor={colors.secondarySoft}
            maximumTrackTintColor="#000"
            thumbTintColor={colors.secondary}
          />

          <Text style={styles.errorMessage}>
            {touched.rating && errors.rating}
          </Text>

          <Button
            onPress={handleSubmit}
            title="Senden"
            style={styles.button}
            icon="send"
            iconType="ii"
            iconSize={20}
          />
        </>
      )}
    </Formik>
  );
};

export default AddReviewForm;
