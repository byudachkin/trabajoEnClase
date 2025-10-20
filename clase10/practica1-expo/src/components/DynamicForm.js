import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: "",
    };
  }

  onSubmit = () => {
    const { comentario } = this.state;
    console.log("Comentario enviado:", { comentario });


    if (this.props.onSubmit) {
      this.props.onSubmit({ comentario });
    }

   
  };

  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Dejá tu comentario</Text>

        <TextInput
          style={styles.field}
          placeholder="Escribí tu comentario:"
          value={this.state.comentario}
          onChangeText={(text) => this.setState({ comentario: text })}
        />

        <Pressable style={styles.buton} onPress={this.onSubmit}>
          <Text style={styles.texto}>Enviar</Text>
        </Pressable>
      </View>
    );
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
})

export default DynamicForm