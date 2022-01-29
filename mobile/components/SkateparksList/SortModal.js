// libraries
import React from 'react';
import { Modal, View, Pressable } from 'react-native';

// components
import Text from '@components/common/Text';
import SortMethod from './SortMethod';

// hooks

// styles
import styles from '@styles/SkateparksStyles';

const SortModal = ({ modalVisible, setModalVisible, state, dispatch }) => {
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
            <Text>Sortieren nach</Text>
            <SortMethod
              display="Gehen"
              method="walking"
              state={state}
              dispatch={dispatch}
            />
            <SortMethod
              display="Fahrrad"
              method="bicycling"
              state={state}
              dispatch={dispatch}
            />
            <SortMethod
              display="Öffis"
              method="transit"
              state={state}
              dispatch={dispatch}
            />
            <SortMethod
              display="Auto"
              method="driving"
              state={state}
              dispatch={dispatch}
            />

            <View style={styles.sortModalCloseContainer}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.sortModalClose}>Zurück</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SortModal;
