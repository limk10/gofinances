import React from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
}

const Welcome = ({ title }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Welcome;
