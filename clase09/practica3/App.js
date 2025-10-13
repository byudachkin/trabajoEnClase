import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './src/screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Probando FlatList </Text>
      <ProductsList/>
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
  title: {
    fontWeight: "bold",
    fontSize: 30
  },
});
