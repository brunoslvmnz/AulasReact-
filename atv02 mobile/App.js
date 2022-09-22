import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import imagem1 from "./imgs/01-tablelamps.png";
import imagem2 from "./imgs/02-ceilinglamps.png";
import imagem3 from "./imgs/03-sconces.png";
import imagem4 from "./imgs/04-floorlamps.png";
import imagem5 from "./imgs/05-lightdecor.png";
import imagem6 from "./imgs/06-garlands.png";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.seção}>
        <View style={styles.card}>
          <Image style={styles.imagem} source={imagem1} resizeMode="contain" />
          <Text>Abajur</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.imagem} source={imagem2} resizeMode="contain" />
          <Text>Lampada de texto</Text>
        </View>
      </View>
      <View style={styles.seção}>
        <View style={styles.card}>
          <Image style={styles.imagem} source={imagem3} resizeMode="contain" />
          <Text>Arendela</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.imagem} source={imagem4} resizeMode="contain" />
          <Text>Luminária de Chão</Text>
        </View>
      </View>
      <View style={styles.seção}>
        <View style={styles.card}>
          <Image style={styles.imagem} source={imagem5} resizeMode="contain" />
          <Text>Luz decorativa</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.imagem} source={imagem6} resizeMode="contain" />
          <Text>Luminária de jardim</Text>
        </View>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  imagem: {
    height: 200,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    textAlign: "center",
    margin: 20,
    padding: 30,
  },
  seção: {
    flexDirection: "row",
  },
});
