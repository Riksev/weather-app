import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, FlatList, StatusBar, ImageBackground} from "react-native";
import UpcomingDay from "../../components/UpcomingDay";
import {useGetWeather} from "@/hooks/use-get-weather";

const UpcomingWeather = () => {
  const weatherData = useGetWeather().weather.list;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/upcoming_background.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <FlatList
          data={weatherData}
          renderItem={({item}) => (
            <UpcomingDay
              dt_txt={item.dt_txt}
              temp_min={item.main.temp_min}
              temp_max={item.main.temp_max}
              condition={item.weather[0].main}
            />
          )}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    marginTop: StatusBar.currentHeight || 0,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default UpcomingWeather;
