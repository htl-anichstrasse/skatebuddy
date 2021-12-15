import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';

import { Formik } from 'formik';

import styles from '../../../styles/SkateparkDetailsStyles';

const AddReviewModal = ({ modalVisible, setModalVisible }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('0');

  return (
    <Modal
      hardwareAccelerated={true}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <ScrollView>
        <View style={styles.modalContainer}>
          <Text>New Review</Text>

          <Formik
            initialValues={{ title, content, rating }}
            onSubmit={values => {
              console.log(values);
            }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Text>Title</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
                <Text>Content</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  value={values.content}
                  multiline={true}
                  numberOfLines={4}
                />
                <Text>Rating</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('rating')}
                  onBlur={handleBlur('rating')}
                  value={values.rating}
                  keyboardType="numeric"
                />
                <Pressable onPress={handleSubmit}>
                  <Text>Submit</Text>
                </Pressable>
              </>
            )}
          </Formik>

          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddReviewModal;
