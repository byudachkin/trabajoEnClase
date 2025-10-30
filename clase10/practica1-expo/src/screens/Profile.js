import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Profile(props) {
    return (
             <View>
                        <Pressable
                        onPress={ () => props.navigation.navigate("Login")}>
                       
                        <Text style={styles.boton}> Desloguearse </Text>
                        
                        </Pressable>
                    </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        color: "#fff"
    }, 
     boton:{
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745"
    },
   
})

export default Profile
