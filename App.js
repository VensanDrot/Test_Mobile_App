import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//pages
import Login_page from './src/screens/login/Login_page';
import Nav from './src/components/navbar/Nav';


export default function App() {

    const AuthStack = createStackNavigator();
    return ( 
       <SafeAreaProvider> 
        <Nav></Nav>
        <NavigationContainer >
           
            <AuthStack.Navigator 
            screenOptions= {{
            headerShown: false
            }}>
                <AuthStack.Screen name='Login page' component={Login_page} />
            </AuthStack.Navigator>

        </NavigationContainer>
        </SafeAreaProvider>
    );
}
/*
<SafeAreaView style = { styles.container } >
<Login_page />
<StatusBar style = "auto" />
</SafeAreaView>
*/