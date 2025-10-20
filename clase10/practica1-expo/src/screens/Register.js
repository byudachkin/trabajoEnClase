import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Register(props) {
    return (
        <View>
            <Pressable
            onPress={ () => props.navigation.navigate("Login")}>
           
            <Text> Ir a Login </Text>
            
            </Pressable>
        </View>
    )
}

export default Register


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