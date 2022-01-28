// libraries
import React from 'react';
import { View, Modal, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Text from '../common/Text';
import Button from '../common/Button';
import AddReviewForm from './AddReviewForm';

// hooks

// styles
import styles from '@styles/SkateparkDetailsStyles';
import colors from '../../styles/Colors';

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
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>Neue Bewertung</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.modalCancelContainer}
            >
              <Ionicons name="close" size={30} color={colors.secondary} />
              <Text style={styles.modalCancelText}>Zurück</Text>
            </Pressable>
          </View>

          <AddReviewForm
            newReview={newReview}
            setModalVisible={setModalVisible}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddReviewModal;
