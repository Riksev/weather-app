import {Tabs} from "expo-router";
import React from "react";

import {HapticTab} from "@/components/haptic-tab";
import {Colors} from "@/constants/theme";
import {useColorScheme} from "@/hooks/use-color-scheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import {useGetWeather} from "@/hooks/use-get-weather";
import ErrorItem from "../../components/ErrorItem";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {isLoading, error} = useGetWeather() as {
    isLoading: boolean;
    error: string | null;
  };

  return (
    isLoading ?
      <View style={styles.container}>
        <ActivityIndicator size="large" color="lightblue" />
      </View>
    : error == null ?
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarStyle: {
            height: 70,
            paddingTop: 10,
          },
          tabBarInactiveTintColor: "gray",
        }}
        initialRouteName="CurrentWeather"
      >
        <Tabs.Screen
          name="CurrentWeather"
          options={{
            title: "Current",
            tabBarIcon: ({color}) => (
              <MaterialIcons name="today" size={24} color={color} />
            ),
            animation: "fade",
          }}
        />
        <Tabs.Screen
          name="UpcomingWeather"
          options={{
            title: "Upcoming",
            tabBarIcon: ({color}) => (
              <MaterialIcons name="upcoming" size={24} color={color} />
            ),
            animation: "fade",
          }}
        />
        <Tabs.Screen
          name="City"
          options={{
            title: "City",
            tabBarIcon: ({color}) => (
              <MaterialIcons name="location-city" size={24} color={color} />
            ),
            animation: "fade",
          }}
        />
      </Tabs>
    : <ErrorItem />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
