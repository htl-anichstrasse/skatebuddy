import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mapContainer: {
    width: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
