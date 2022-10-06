import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Login_page from './components/login/Login_page';
import styles from './styles'

export default function App() {
    return ( 
        <View style = { styles.container } >
        <Login_page />
        <StatusBar style = "auto" />
        </View>
    );
}
