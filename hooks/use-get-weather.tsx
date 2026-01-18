import {createContext, useContext, useEffect, useState} from "react";
import * as Location from "expo-location";

export const WeatherContext = createContext<object | null>(null);

export const WeatherProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<object>({});

  const fetchWeatherData = async (location: Location.LocationObject) => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          location?.coords.latitude +
          "&lon=" +
          location?.coords.longitude +
          "&appid=" +
          process.env.EXPO_PUBLIC_WEATHER_API_KEY +
          "&units=metric"
      );
      const data = await response.json();
      if (data.cod !== "200") {
        throw new Error("Could not fetch weather data");
      }
      setWeather(data);
    } catch (error) {
      setError("Could not fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      await fetchWeatherData(location);
    })();
  }, []);

  return (
    <WeatherContext.Provider value={{isLoading, error, weather}}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useGetWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within WeatherProvider");
  }
  return context;
};
