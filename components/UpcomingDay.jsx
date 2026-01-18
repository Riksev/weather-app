import Feather from "@expo/vector-icons/Feather";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import moment from "moment";
import {weatherType} from "@/app/utilities/weatherType";

const UpcomingDay = (props) => {
  const {dt_txt, temp_min, temp_max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={styles.date}>{moment(dt_txt).format("h:mm a")}</Text>
      </View>
      <Text style={styles.temperature}>
        {Math.round(temp_min)}°/{Math.round(temp_max)}°
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "pink",
    borderRadius: 50,
  },
  temperature: {
    color: "white",
    fontSize: 20,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
  date: {
    color: "white",
    fontSize: 18,
    paddingHorizontal: 15,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default UpcomingDay;
