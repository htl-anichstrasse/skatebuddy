import React from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';

import AddReviewForm from './AddReviewForm';
import Button from '../../../../components/common/Button';

import styles from '../../../../styles/SkateparkDetailsStyles';

const AddReviewModal = ({ modalVisible, setModalVisible, newReview }) => {
  return (
    <Modal
      hardwareAccelerated={true}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <ScrollView>
        <View style={styles.modalContainer}>
          <Text>New Review</Text>

          <AddReviewForm
            newReview={newReview}
            setModalVisible={setModalVisible}
          />

          <Button
            title="Hide Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddReviewModal;
