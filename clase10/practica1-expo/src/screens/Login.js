
import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
             email: "",
            password: "",
        }
    }

      onSubmit() {
    const { email, password } = this.state;
    console.log("Datos de login:", { email, password });
  };

    render() {
        return (
            <View style={styles.contenedor}>

                 <Pressable
                        onPress={ () => this.props.navigation.navigate("Register")}>
                        <Text> Ir al Registro </Text>
                        </Pressable>
                        
                        <Pressable
                         onPress={ () => this.props.navigation.navigate("HomeMenu")}>       
                        <Text> Entrar en la App </Text>        
                        </Pressable>

                <Text style={styles.titulo}> Formulario de Login</Text>
                <TextInput style={styles.field}
                     keyboardType="email-address"
                     placeholder="email"
                     onChangeText={text => this.setState({ email: text })}
                     value={this.state.email} />
                <TextInput style={styles.field}
                     keyboardType="default"
                     placeholder="password"
                     secureTextEntry={true}
                     onChangeText={text => this.setState({ password: text })}
                     value={this.state.password}/>
                <Pressable style={styles.boton} onPress={ () => this.onSubmit()}>
                    <Text style={styles.texto}> Logueate </Text>
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
    },
    register: {
          fontWeight: "bold"
      }, 
})



export default Login