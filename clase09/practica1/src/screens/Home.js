
import React, {Component} from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Contador from "../components/Contador";



class Home extends Component {
    click(){
        console.log("me clickearon")
    }
    render(){
          return(
        <View style={styles.contenedor} >
            <Text style={styles.textoMundo}> Hola Mundo </Text>
            <Pressable onPress={() => this.click()}>
                <Text style={styles.texto} > clickeame </Text>
            </Pressable>
            <Contador/>
        </View>
    )
    }
  
}

const styles = StyleSheet.create({
    texto: {
        backgroundColor: "#ccc",
        padding: 4,
        marginBottom: 10,
        borderRadius: 4,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%"
    },
    textoMundo: {
        textAlign: "center",
        width: "100%"
    },
    contenedor: {
        textAlign: "center",
        padding: 10,
        width: "100%",
        
    }
    
})

export default Home;