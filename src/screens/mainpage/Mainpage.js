import React, { useEffect, useState } from "react";
import styles from "../../../styles";
import { Text, View, ScrollView, Image } from "react-native";
import icon from "../../../assets/icon.png";
import color from "../../../color";

const Mainpage = () => {
  const [Posts, SetPosts] = useState([]);
  const [Users, SetUsers] = useState([]);
  const [Photos, SetPhotos] = useState();

  //reduce posts 
  const gettingPost = (res) => {
    const arr = [];
    const user = res.reduce((acc, curr) => {
      if (!acc.includes(curr.userId)) {
        arr.push(curr);
        acc.push(curr.userId);
      }
      return acc;
    }, []);
    SetPosts(arr);
    // return arr;
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

  const getPhoto = (id) => {
    Photos.map((f) => {
      if (f.albumId === id) {
        console.log(f.url)
        return (f.url)
      }
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center"}}  >
      <View style={styles.flexer}>
      {Users.map((g) => {
        

        return (
         
          <View style={styles.vi_cont} key={g.id}>
            <Image style={styles.vi_image} source={{uri : "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"}} />

            <Text style={styles.vi_text}>Autor: {g.name}</Text>
            <Text style={styles.vi_text}>Company: {g.company.name}</Text>

            <Text style={styles.vi_text}>
              Title:
              {Posts.map((f) => {
                if (f.userId === g.id) {
                  return f.title;
                }
              })}
            </Text>

            <Text style={[styles.vi_text, styles.vi_body]} numberOfLines={4}>
              Body:
              {Posts.map((f) => {
                if (f.userId === g.id) {
                  return f.body;
                }
              })}
            </Text>
          </View>
        );
      })}
      </View>
    </ScrollView>
  );
};

export default Mainpage;
