import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import RowText from "@/components/RowText";
import {useGetWeather} from "@/hooks/use-get-weather";
import {weatherType} from "../utilities/weatherType";

export default function CurrentWeather() {
  const weatherData = useGetWeather().weather.list[0];
  const temp = Math.round(weatherData.main.temp);
  const feels_like = Math.round(weatherData.main.feels_like);
  const temp_min = Math.round(weatherData.main.temp_min);
  const temp_max = Math.round(weatherData.main.temp_max);
  const weather = weatherData.weather;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color={weatherType[weatherCondition].color || "#000"}
        />
        <Text
          style={[
            styles.temperature,
            {color: weatherType[weatherCondition].color || "#000"},
          ]}
        >
          {temp}°
        </Text>
        <Text
          style={[
            styles.feelsLike,
            {color: weatherType[weatherCondition].color || "#000"},
          ]}
        >
          Feels like {feels_like}°
        </Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={styles.highLowContainer}
          messageOneStyles={[
            styles.highLow,
            {color: weatherType[weatherCondition].color || "#000"},
          ]}
          messageTwoStyles={[
            styles.highLow,
            {color: weatherType[weatherCondition].color || "#000"},
          ]}
        />
      </View>
      <RowText
        messageOne={
          weather[0].description.charAt(0).toUpperCase() +
          weather[0].description.slice(1)
        }
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={styles.additionalInfo}
        messageOneStyles={[
          styles.description,
          {color: weatherType[weatherCondition].color || "#000"},
        ]}
        messageTwoStyles={[
          styles.message,
          {color: weatherType[weatherCondition].color || "#000"},
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "pink",
    flex: 1,
  },
  temperature: {
    fontSize: 48,
  },
  feelsLike: {
    fontSize: 30,
  },
  highLow: {
    fontSize: 20,
  },
  highLowContainer: {
    flexDirection: "row",
    gap: 10,
  },
  additionalInfo: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 42,
  },
  message: {
    fontSize: 25,
  },
});
