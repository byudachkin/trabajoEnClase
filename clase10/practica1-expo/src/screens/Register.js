import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { db, auth } from "../firebase/config";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
             email: "",
            username: "",
            password: "",
        }
    }

      onSubmit(email, password, username) {
        console.log(this.state);
        
    auth.createUserWithEmailAndPassword(email, password)
    .then( response => {
        console.log(response);
        
         this.setState({registered: true});
        db.collection("users").add({
            email: auth.currentUser.email,
            name: this.state.username,
            createdAt: Date.now(),
        })
        .then( r => console.log(r))
        .catch( e => console.log(e))
    this.props.navigation.navigate("Login")
    })
    .catch( error => { 
        console.log(error);
        
        this.setState({error: "Fallo en el registro"})
    })
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
                <Pressable style={styles.boton} onPress={ () => this.onSubmit(this.state.email, this.state.password)}>
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


