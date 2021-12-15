import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/HomeStyles';

const Content = () => {
  return (
    <>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View style={styles.row}>
        <Text>Try editing me! 🎉</Text>
      </View>
    </>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Home;
