import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';
import Slider from '@react-native-community/slider';

import Button from '../../../common/Button';

import styles from '../../../../styles/SkateparkDetailsStyles';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  content: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number between 1 and 5', val => {
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
          <Text>Title</Text>
          <TextInput
            name="title"
            style={styles.input}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            placeholder="Review title"
          />
          <Text style={styles.errorMessage}>
            {touched.title && errors.title}
          </Text>

          <Text>Content</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            value={values.content}
            multiline={true}
            numberOfLines={4}
            placeholder="Review content"
          />
          <Text style={styles.errorMessage}>
            {touched.content && errors.content}
          </Text>

          <Text>Rating</Text>
          <Text>{values.rating}</Text>
          <Slider
            step={1}
            style={{ width: '100%' }}
            minimumValue={1}
            maximumValue={5}
            onSlidingComplete={rating => {
              touched.rating = true;
              setFieldValue('rating', rating.toString());
            }}
            value={parseInt(values.rating)}
            minimumTrackTintColor="#666"
            maximumTrackTintColor="#000000"
          />

          <Text style={styles.errorMessage}>
            {touched.rating && errors.rating}
          </Text>

          <Button onPress={handleSubmit} title="Submit" />
        </>
      )}
    </Formik>
  );
};

export default AddReviewForm;
