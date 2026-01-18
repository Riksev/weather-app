import Feather from "@expo/vector-icons/Feather";
import type {ComponentProps} from "react";
import {StyleSheet, View, Text} from "react-native";

const IconText = (props: {
  iconName: ComponentProps<typeof Feather>["name"];
  iconColor: string;
  iconSize?: number;
  text: string;
  textStyles?: object;
}) => {
  const {iconName, iconColor, text, iconSize = 50, textStyles} = props;
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default IconText;
