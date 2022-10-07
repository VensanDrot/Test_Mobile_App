import React, {useState} from 'react'
import styles from '../../../styles';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable } from 'react-native';

const Login_page = () => {
    //variables for user input
    const [login, SetLogin] = useState("");
    const [password, SetPassword] = useState("");
    //err variables to handle input err
    const [Log_err, SetLog_err] = useState("");
    const [Pass_err, SetPass_err] = useState("");


    const OnSubmit = () => {
        //Clean err variable 
        SetLog_err("");
        SetPass_err("");

        //console.log(login, ' ',password);
        //check for errors
        if(!login) {
            console.log('here');
            SetLog_err('Login is empty');
        }
        if(!password) {
            console.log('here');
            SetPass_err('Password is empty');
        }
    }

    // Error display functions 
    const Check_Pass_Err = () => {
        if (Pass_err){
            return <Text style={styles.error}>{Pass_err}</Text>
        }
    }
    const Check_Log_Err = () => {
        if (Log_err){
            return <Text style={styles.error}>{Log_err}</Text>
        }
    }


    return (
        <View style={styles.form}>
            <Text style={styles.formText}>Authorization</Text>
            <View style={styles.inputform}>
                <Text style={styles.input_text}>login</Text>
                {Check_Log_Err()}
                <TextInput 
                style={styles.input} 
                onChangeText={(e)=> SetLogin(e)}
                value={login}
                />
                <Text style={styles.input_text}>password</Text>
                {Check_Pass_Err()}
                <TextInput
                 style={styles.input}
                 onChangeText={(e)=> SetPassword(e)}
                 value={password}
                 secureTextEntry={true} 
                 />
                <Pressable onPress={OnSubmit} style={styles.button}>
                    <Text style={styles.bt_text}>Submit</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default Login_page