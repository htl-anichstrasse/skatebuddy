// libraries
import React from 'react';
import { View, Modal, ScrollView } from 'react-native';

// components
import Text from '../../common/Text';
import Button from '../../common/Button';
import AddReviewForm from './AddReviewForm';

// hooks

// styles
import styles from '../../../styles/SkateparkDetailsStyles';

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
