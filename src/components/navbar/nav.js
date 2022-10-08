import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from '../../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Group from "../svg/logo1.png"



function Nav() {
    const inset = useSafeAreaInsets();
    
  return (
    <View  style={[{marginTop:inset.top},styles.nav_cont]}>
        <View style={styles.nav_flex}>
            <Image source={Group} />
            <Text style={styles.nav_text}>Каналсервис</Text>
        </View>
    </View>
  );
}

export default Nav