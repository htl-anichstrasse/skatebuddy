import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/SkateparksStyles';

const SkateparksListSettings = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsText}>Sort by Duration</Text>
      <View style={styles.settingsMethods}>
        <View style={styles.settingsMethod}>
          <Text style={styles.settingsMethodText}>Walking</Text>
        </View>
        <View style={styles.settingsMethod}>
          <Text style={styles.settingsMethodText}>Bicycling</Text>
        </View>
        <View style={styles.settingsMethod}>
          <Text style={styles.settingsMethodText}>Transit</Text>
        </View>
        <View style={styles.settingsMethod}>
          <Text style={styles.settingsMethodText}>Driving</Text>
        </View>
      </View>
    </View>
  );
};

export default SkateparksListSettings;
