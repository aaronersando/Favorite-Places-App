import { StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
  function handleGetLocation() {}
  function handlePickOnMap() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton onPress={handleGetLocation} icon={"location"}>
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={handlePickOnMap} icon={"map"}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
