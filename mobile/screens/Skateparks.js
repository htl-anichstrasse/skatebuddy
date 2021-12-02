import React from "react";
import { View, Text } from "react-native";

const Skateparks = () => {
  const fetchSkateparks = () => {
    return fetch("http://localhost:3000/skateparks")
      .then(response => response.json())
      .then(json => {
        return json.skateparks;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text>Skateparks</Text>
    </View>
  );
};

export default Skateparks;
