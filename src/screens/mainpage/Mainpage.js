import React, { useEffect, useState } from "react";
import styles from "../../../styles";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";

const Mainpage = () => {
  //Variables
  const [Posts, SetPosts] = useState([]);
  const [Users, SetUsers] = useState([]);

  // Select only 1 value from where userid 
  const gettingPost = (res) => {
    const arr = [];
    const users = res.reduce((acc, curr) => {
      if (!acc.includes(curr.userId)) {
        arr.push(curr);
        acc.push(curr.userId);
      }
      return acc;
    }, []);
    SetPosts(arr);
  };

  // Get users
  const response = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "get",
  }).then((res) => res.json());
  
  // Get posts
  const res = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
  }).then((res) => res.json());

  //Put them to Users and Posts variable
  useEffect(() => {
    response.then((data) => {
      SetUsers(data);
    });
    res.then((data) => {
      gettingPost(data);
    });
  }, []);

  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>

      {Users.map((g) => {
        return (

          <View style={styles.vi_cont} key={g.id}>
            
            <Text style={styles.vi_text}>Autor: {g.name}</Text>
            <Text style={styles.vi_text}>Company: {g.company.name}</Text>

            <Text style={styles.vi_text}>
              Title:{" "}
              {Posts.map((f) => {
                if (f.userId === g.id) {
                  return f.title;
                }
              })}
            </Text>

          </View>
        );
      })}

    </ScrollView>
  );
};

export default Mainpage;
