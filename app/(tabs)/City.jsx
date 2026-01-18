import {SafeAreaView} from "react-native-safe-area-context";
import {Text, StyleSheet, ImageBackground, StatusBar, View} from "react-native";
import IconText from "@/components/IconText";
import {useGetWeather} from "@/hooks/use-get-weather";
import moment from "moment";

const City = () => {
  const cityData = useGetWeather().weather.city;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/city_background.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={[styles.cityName, styles.text]}>{cityData.name}</Text>
        <Text style={[styles.countryName, styles.text]}>
          {cityData.country}
        </Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName="user"
            iconColor="red"
            text={cityData.population}
            textStyles={styles.populationText}
          />
        </View>
        <View style={[styles.sunWrapper, styles.rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor="red"
            text={moment.unix(cityData.sunrise).format("hh:mm:ss a")}
            textStyles={styles.sunText}
          />
          <IconText
            iconName="sunset"
            iconColor="red"
            text={moment.unix(cityData.sunset).format("hh:mm:ss a")}
            textStyles={styles.sunText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  sunWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  sunText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
