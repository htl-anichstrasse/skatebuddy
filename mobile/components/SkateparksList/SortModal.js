// libraries
import React from 'react';
import { Modal, View, Pressable } from 'react-native';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '@styles/SkateparksStyles';

const SortModal = ({ modalVisible, setModalVisible }) => {
  return (
    <>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.sortModalOpacity}>
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.sortModalContainer} />
          </Pressable>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.sortModalContainer}>
          <View style={styles.sortModalContainer} />
          <View style={styles.sortModalContent}>
            <Text>Sort</Text>

            <View style={styles.sortModalCloseContainer}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.sortModalClose}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SortModal;
