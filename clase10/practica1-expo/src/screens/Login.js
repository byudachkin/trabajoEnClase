import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";


function Login(props) {
    return (
              <View>
                        <Pressable
                        onPress={ () => props.navigation.navigate("Register")}>
                        <Text> Ir al Registro </Text>
                        </Pressable>
                        
                        <Pressable
                         onPress={ () => props.navigation.navigate("HomeMenu")}>       
                        <Text> Entrar en la App </Text>        
                        </Pressable>
                                
                </View>
    )
}

const styles = StyleSheet.create({
      register: {
          fontWeight: "bold"
      }, 
  })

export default Login