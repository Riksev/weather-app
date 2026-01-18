import {View, Text, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        Error fetching weather data. Please try again later.
      </Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "white",
    fontSize: 30,
    marginHorizontal: 10,
    textAlign: "center",
  },
});

export default ErrorItem;
