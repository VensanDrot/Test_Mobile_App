import React, { useEffect, useState } from 'react'
import styles from '../../../styles';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';


const Mainpage = () => {

    const [Posts, SetPosts] = useState([]);
    const [Users, SetUsers] = useState([]);
    const [EachUserPost, SetPost] = useState();


    const gettingPost = (res) => {
        const arr = [];
        const users = res.reduce((acc, curr) => {
            if (!acc.includes(curr.userId)) {
                arr.push(curr);
                acc.push(curr.userId);
            }
            return acc;
        }, []);
        SetPosts(arr)
        // return arr;
    };


    const response = fetch("https://jsonplaceholder.typicode.com/users", {
        method: "get",
    }).then((res) => res.json());

    useEffect(() => {
        response.then((data) => {
            SetUsers(data);
        });
    }, []);

    const res = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "get",
    }).then((res) => res.json());


    useEffect(() => {
        res.then((data) => {
            gettingPost(data)
        });
    }, []);




    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }} >
            {Users.map((g) => {


                return (
                    <View style={styles.vi_cont} key={g.id}>
                        <Text style={styles.vi_text}>
                            Autor: {g.name}
                        </Text>
                        <Text style={styles.vi_text}>
                            Company: {g.company.name}
                        </Text>

                        <Text style={styles.vi_text}>
                            Title: {Posts[g.id - 1].title}
                        </Text>
                        
                        <Text style={styles.vi_text} numberOfLines={4}>
                            Body: {Posts[g.id - 1].body}
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Mainpage