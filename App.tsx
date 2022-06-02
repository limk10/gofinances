import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Welcome from "./src/Components/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title="Funcionou o TS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
