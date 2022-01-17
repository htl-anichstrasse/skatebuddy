// libraries
import React, { useState } from 'react';
import { Pressable, Keyboard } from 'react-native';

// components
import Text from '@components/common/Text';
import SortModal from './SortModal';

// hooks

// styles
import styles from '@styles/SkateparksStyles';

const SortBox = ({ state, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setModalVisible(true);
        Keyboard.dismiss();
      }}
      style={styles.sortBoxContainer}
    >
      <Text>Sort</Text>
      <SortModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        state={state}
        dispatch={dispatch}
      />
    </Pressable>
  );
};

export default SortBox;
