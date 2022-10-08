import React,{useEffect, useState} from 'react'
import styles from '../../../styles';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';


const Mainpage = () => {

    const [Posts, SetPosts] = useState([]);
    const [Users, SetUsers] = useState([]);

    const response = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "get",
    }).then((res) => res.json());

    useEffect(() => {
    response.then((data) => {
      SetUsers(data);
    });
     }, []);
     




  return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems:"center" }} >
            {Users.map((g)=>{
           
            
                return (
                    <View style={styles.vi_cont} key={g.id}>
                        <Text style={styles.vi_text}>
                            Autor: {g.name}
                        </Text>
                        <Text style={styles.vi_text}>
                            Company: {g.company.name}
                        </Text>
                        {
                            
                        }
                        <Text style={styles.vi_text}>
                        Title: 
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
  )
}

export default Mainpage