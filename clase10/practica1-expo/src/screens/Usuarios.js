import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, FlatList } from "react-native";
import { db, auth } from "../firebase/config";

class Usuarios extends Component {
      constructor(props) {
        super(props);
        this.state = {
            usuario: [],
            loading: true
        }
    }
        componentDidMount() {
            db.collection("users").onSnapshot(
                docs => {
                    let users = [];
                    docs.forEach( doc => {
                        users.push({
                            id: doc.id,
                            data: doc.data()
                        })
                        this.setState({
                            usuario: users,
                            loading: false
                        })
                    })
                }
            )

        };

        render() {
                console.log(this.state.usuario)
                return(
                       <View style={styles.contenedor} >
                            <FlatList 
                            data={ this.state.usuario } 
                            keyExtractor={ item => item.id}
                            renderItem={ ({item}) => <Text>{item.data.email}</Text> }
                            />
                        </View>
                )
            }

}

const styles = StyleSheet.create({
    contenedor: {
        width: "100%",
        flex: 1
    },
})

export default Usuarios