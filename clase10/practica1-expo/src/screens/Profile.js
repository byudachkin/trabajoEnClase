import React from "react";
import { View, Text, Pressable } from "react-native";

function Profile(props) {
    return (
             <View>
                        <Pressable
                        onPress={ () => props.navigation.navigate("Login")}>
                       
                        <Text> Desloguearse </Text>
                        
                        </Pressable>
                    </View>
    )
}

export default Profile
