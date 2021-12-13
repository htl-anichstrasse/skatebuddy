import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/SkateparkDetailsStyles';
import Reviews from '../components/Reviews';

const SkateparkDetails = ({ navigation, route }) => {
  const skatepark = route.params.skatepark;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{skatepark.name}</Text>
      <View style={styles.coordinates}>
        <Text>{skatepark.latitude}° N</Text>
        <Text>{skatepark.longitude}° W</Text>
      </View>

      {skatepark.address != '' ? <Text>{skatepark.address}</Text> : null}

      <View style={styles.coordinates}>
        <Text>Beste Öffi-Verbindung: {skatepark.busStop} </Text>
      </View>

      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Reviews skateparkId={skatepark.skateparkId} navigation={navigation} />
    </View>
  );
};

export default SkateparkDetails;
