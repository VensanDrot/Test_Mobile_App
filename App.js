import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Login_page from './src/screens/login/Login_page';
import styles from './styles'

export default function App() {
    return ( 
        <SafeAreaView style = { styles.container } >
        <Login_page />
        <StatusBar style = "auto" />
        </SafeAreaView>
    );
}
