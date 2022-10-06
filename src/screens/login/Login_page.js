import React from 'react'
import styles from '../../styles';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const Login_page = () => {
    return (
        <View style={styles.form}>
            <Text style={styles.formText}>Authorization</Text>
        </View>
    )
}

export default Login_page