import React, {Component} from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';


class Contador extends Component{
    constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
}

    incrementar() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

    
    render() {
        return(
        <View style={styles.containe} >
        <Text style={styles.textoClick}> Cantidad de clicks: {this.state.clicks} </Text>

        <Pressable onPress={() => this.incrementar()}>
          <Text style={styles.click}> Click aquí para contar</Text>
        </Pressable>
        </View>
        )
    }
        
    

  }

  const styles = StyleSheet.create({
      containe: {
          margin: 5,

      },
      click: {
         padding: 7,
         backgroundColor: "rgba(0, 255, 0, 0.5)",
         marginBottom: 10,
         borderRadius: 4,
         fontWeight: "bold",
         textAlign: "center",
         width: "100%"
      },
       textoClick: {
        textAlign: "center",
        width: "100%"
    },
      
  })


export default Contador;