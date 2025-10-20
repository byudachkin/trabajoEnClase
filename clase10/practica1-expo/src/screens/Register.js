import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
             email: "",
            username: "",
            password: "",
        }
    }

      onSubmit() {
    const { email, username, password } = this.state;
    console.log("Datos de registro:", { email, username, password });
  };

    render() {
        return (
            <View style={styles.contenedor}>
                <Pressable
                    onPress={() => props.navigation.navigate("Login")}>
                    <Text> Ir a Login </Text>
                </Pressable>

                <Text style={styles.titulo}> Formulario de Registro</Text>
                <TextInput style={styles.field}
                     keyboardType="email-address"
                     placeholder="email"
                     onChangeText={text => this.setState({ email: text })}
                     value={this.state.email} />
                <TextInput style={styles.field}
                     keyboardType="default"
                     placeholder="userName"
                     onChangeText={text => this.setState({ username: text })}
                     value={this.state.username}/>
                <TextInput style={styles.field}
                     keyboardType="default"
                     placeholder="password"
                     secureTextEntry={true}
                     onChangeText={text => this.setState({ password: text })}
                     value={this.state.password}/>
                <Pressable style={styles.boton} onPress={ () => this.submit()}>
                    <Text style={styles.texto}> Registrate </Text>
                </Pressable>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    field:{
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10, 
        borderRadius: 6,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderWidth: 1,
        marginVertical: 10
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
    texto:{
        color: "#fff"
    }, 
    titulo: {
         fontWeight: "bold"
    }
})



export default Register


