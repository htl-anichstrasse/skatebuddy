import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../components/common/Button';

import styles from '../../../styles/SkateparkDetailsStyles';

const AddReviewForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  return (
    <Formik
      initialValues={{ title, content, rating }}
      onSubmit={values => {
        console.log(values);
      }}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <Text>Title</Text>
          <TextInput
            name="title"
            style={styles.input}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            placeholder="Title"
          />
          <Text>Content</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            value={values.content}
            multiline={true}
            numberOfLines={4}
            placeholder="Content"
          />
          <Text>Rating</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('rating')}
            onBlur={handleBlur('rating')}
            value={values.rating}
            keyboardType="number-pad"
            placeholder="Rating"
          />
          <Button onPress={handleSubmit} title="Submit" />
        </>
      )}
    </Formik>
  );
};

export default AddReviewForm;
