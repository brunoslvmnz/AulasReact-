import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pratica Layout Flexbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue",
    alignItems:"center",
  },
  texto: {
    color: "white",
    fontSize:20,
  },
});
