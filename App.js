import React, {useMemo, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages && components
import Login_page from './src/screens/login/Login_page';
import Nav from './src/components/navbar/Nav';
import Mainpage from './src/screens/mainpage/Mainpage';

// 
import { AuthContext } from './src/components/exports/context';

export default function App() {

    const AuthLog = createStackNavigator();
    const AuthStack = createStackNavigator();
    const [UserToken, SetUserToken] = useState(null);

    
    // functions signin && signout
    const authContext = useMemo(()=> {
        return {
            signIn: (data) => {
                SetUserToken(data)
            },
            signOut: () => {
                SetUserToken(null)
            },
           
        }
    },[])

    return ( 
       <SafeAreaProvider> 
        <AuthContext.Provider value={authContext}>
        {/* Set A Nav Bar */}
        <Nav data={UserToken}/>
        <NavigationContainer>
            {
                UserToken ? (
                    <AuthLog.Navigator 
                    screenOptions= {{
                    headerShown: false
                    }}>
                         <AuthLog.Screen name='Main page' component={Mainpage} />
                    </AuthLog.Navigator>
                ) :
                (
                    <AuthStack.Navigator 
                    screenOptions= {{
                    headerShown: false
                    }}>
                        <AuthStack.Screen name='Login page' component={Login_page} />
                    </AuthStack.Navigator>
                )
            }
           
        {/*
            <AuthStack.Navigator 
            screenOptions= {{
            headerShown: false
            }}>
                <AuthStack.Screen name='Login page' component={Login_page} />
            </AuthStack.Navigator>
        */  }
        </NavigationContainer>
        </AuthContext.Provider>
        </SafeAreaProvider>
    );
}
