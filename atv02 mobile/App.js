import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import imagem1 from "./imgs/01-tablelamps.png";
import imagem2 from "./imgs/02-ceilinglamps.png";
import imagem3 from "./imgs/03-sconces.png";
import imagem4 from "./imgs/04-floorlamps.png";
import imagem5 from "./imgs/05-lightdecor.png";
import imagem6 from "./imgs/06-garlands.png";
import imagemsacola from "./imgs/icone-sacola.png";

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.seçãosuperior}>
        <View style={styles.seçãotitulo}>
          <Text style={styles.titulo}>Lighteria</Text>
        </View>
        <View style={styles.cardicone}>
          <Image style={styles.icone} source={imagemsacola} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.categorias}>
        <Text>---------------------Categorias---------------------</Text>
      </View>

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
    padding: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imagem: {
    height: 100,
    width: 100,
  },
  icone: {
    height: 50,
    width: 50,
  },
  cardicone: {
    backgroundColor: "#fff",
    borderRadius: 100,
    textAlign: "center",
    margin: 20,
    padding: 10,
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
  categorias: {
    flexDirection: "row",
    justifyContent: "center",
  },
  seçãotitulo: {
    flexDirection:"column",
    justifyContent: "center",
  },
  seçãosuperior: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
