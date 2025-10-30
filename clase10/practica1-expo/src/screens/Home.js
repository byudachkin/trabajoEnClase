
import { View, Text, StyleSheet, FlatList } from "react-native";
import DynamicForm from "../components/DynamicForm";
import Post from "../components/Post";
import React, { Component } from "react";
import { db, auth } from "../firebase/config";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posteos: [],
    };
  }

componentDidMount() {
  db.collection("posts").onSnapshot(docs => {
    let posts = [];
    docs.forEach(doc => {
      posts.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    this.setState({ posteos: posts }); 
  });
}

  render() {
    return (
      <View>
        <Text style={styles.titulo}>HOME PAGE</Text>
        <DynamicForm/>

        <FlatList
          data={this.state.posteos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post data={item.data} />}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
    titulo: {
         fontWeight: "bold"
    },
})

export default Home