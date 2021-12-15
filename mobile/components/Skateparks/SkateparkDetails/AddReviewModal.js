import React, { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import styles from '../../../styles/SkateparkDetailsStyles';

const AddReviewModal = ({ modalVisible, setModalVisible }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <Text>New Review</Text>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text>Hide Modal</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default AddReviewModal;
