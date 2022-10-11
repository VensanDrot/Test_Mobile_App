import React, { useEffect, useState } from "react";
import styles from "../../../styles";
import { Text, View, ScrollView, Image } from "react-native";
import icon from "../../../assets/icon.png";
import color from "../../../color";
import { max } from "react-native-reanimated";

const Mainpage = () => {
  const [Posts, SetPosts] = useState([]);
  const [Users, SetUsers] = useState([]);
  const [UserImg, SetUserimg] = useState([]);
  const [Urlss, SetUrlss] = useState([]);

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

  //Photo reducer
  const userPhotos = (data) => {
    let max_id = 0;
    Users.map((g) => {
      if (g.id > max_id) {
        max_id = g.id;
      }
    });

    const arr = [];
    const photo = data.reduce((acc, curr) => {
      if (!acc.includes(curr.albumId) && curr.albumId <= max_id) {
        arr.push(curr);
        acc.push(curr.albumId);
      }

      return acc;
    }, []);
    SetUserimg(arr);
  };

  // Get users
  const response = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "get",
  }).then((res) => res.json());

  // Get posts
  const res = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
  }).then((res) => res.json());

  // Get photo
  const respon = fetch("https://jsonplaceholder.typicode.com/photos/", {
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

    respon.then((data) => {
      userPhotos(data);
    });
  }, []);


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
      <View style={styles.flexer}>
        {Users.map((g) => {
          let smth = UserImg.map((f) => {
            if (f.albumId === g.id) {
              return f.url.toString();
            }
          });
          smth = smth[g.id - 1];
          let url = { uri: smth};

          return (
            <View style={styles.vi_cont} key={g.id}>
              <Image source={url} style={styles.vi_image} />

              <Text style={styles.vi_text}>Autor: {g.name}</Text>
              <Text style={styles.vi_text}>Company: {g.company.name}</Text>

              <Text style={styles.vi_text} numberOfLines={2}>
                Title:
                {Posts.map((f) => {
                  if (f.userId === g.id) {
                    return f.title;
                  }
                })}
              </Text>

              <Text style={[styles.vi_text, styles.vi_body]} numberOfLines={4}>
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
