import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Probando imagenes </Text>
      <Image style={styles.image}
              source={require("../practica2/assets/zonaMedia.jpeg")}
              resizeMode='contain'/>
      <Image  style={styles.image}
              source={require("../practica2/assets/auto9.jpg")}
              resizeMode='contain'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 30
  },
  image: {
    height: 400,
  }
});
