import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "../styles/MapStyles";
import Button from "../components/Button";

styles.mapContainer = {
  ...styles.mapContainer,
  height: Dimensions.get("window").width,
};

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 47.2625012,
    longitude: 11.396226,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  });

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}
          onRegionChange={setRegion}>
          <MapView.Marker
            coordinate={{
              latitude: 47.2625012,
              longitude: 11.396226,
            }}
            title={"Marker"}
            description={"Marker description"}
          />
        </MapView>
      </View>
      <Button
        title="Move map"
        onPress={() => {
          alert("Move map");
        }}
      />
    </View>
  );
};

export default Map;
