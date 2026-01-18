import {View, Text} from "react-native";

const RowText = (props: {
  messageOne: string;
  messageTwo: string;
  containerStyles: object;
  messageOneStyles: object;
  messageTwoStyles: object;
}) => {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
