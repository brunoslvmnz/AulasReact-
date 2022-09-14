import { StyleSheet, View, Text } from "react-native";
import React from "react";
import placa1 from "../imgs/placa1.png";
import placa2 from "../imgs/placa2.png";
import placa3 from "../imgs/placa3.png";
import placa4 from "../imgs/placa4.png";

export default function Imagens() {
  return (
    <View style={styles.container}>
      <View>
        <img src={placa1} style={styles.img}/>
        <img src={placa2} style={styles.img}/>
      </View>
      <View>
        <img src={placa3} style={styles.img}/>
        <img src={placa4} style={styles.img}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding:50,
  },

  img: {
    width: 100,
    height: 100,
    border:"1px solid black",
    borderRadius:20,
    margin:1,
  }
});


