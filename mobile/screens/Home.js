import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, Pressable } from 'react-native';
import styles from '../styles/HomeStyles';

styles.column = {
  ...styles.column,
  width: Dimensions.get('window').width,
};

const Home = () => {
  const [scrollRef, setScrollRef] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={ref => {
          setScrollRef(ref);
        }}
        horizontal={true}
        pagingEnabled={true}
        persistentScrollbar={true}>
        <View style={styles.column}>
          <Text>One</Text>
        </View>
        <View style={styles.column}>
          <Text>Two</Text>
        </View>
        <View style={styles.column}>
          <Text>Three</Text>
        </View>
        <View style={styles.column}>
          <Text>Four</Text>
        </View>
        <View style={styles.column}>
          <Text>Five</Text>
        </View>
        <View style={styles.column}>
          <Text>Six</Text>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => {
            scrollRef.scrollTo({ x: 0, animated: true });
          }}>
          <View style={styles.navdot}></View>
        </Pressable>
        <Pressable
          onPress={() => {
            scrollRef.scrollTo({
              x: Dimensions.get('window').width,
              animated: true,
            });
          }}>
          <View style={styles.navdot}></View>
        </Pressable>
        <Pressable
          onPress={() => {
            scrollRef.scrollTo({
              x: Dimensions.get('window').width * 2,
              animated: true,
            });
          }}>
          <View style={styles.navdot}></View>
        </Pressable>
        <Pressable
          onPress={() => {
            scrollRef.scrollTo({
              x: Dimensions.get('window').width * 3,
              animated: true,
            });
          }}>
          <View style={styles.navdot}></View>
        </Pressable>
        <Pressable
          onPress={() => {
            scrollRef.scrollTo({
              x: Dimensions.get('window').width * 4,
              animated: true,
            });
          }}>
          <View style={styles.navdot}></View>
        </Pressable>
        <Pressable
          onPress={() => {
            scrollRef.scrollTo({
              x: Dimensions.get('window').width * 5,
              animated: true,
            });
          }}>
          <View style={styles.navdot}></View>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
