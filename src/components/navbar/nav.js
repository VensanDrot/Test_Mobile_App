import React, {useContext} from 'react';
import { SafeAreaView, Text, View, Image, Button } from 'react-native';
import styles from '../../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Group from "../svg/logo1.png"
import { AuthContext } from '../exports/context';



function Nav() {
    const inset = useSafeAreaInsets();
    const { signOut } = useContext(AuthContext);

   
      const Exit = () => {
        signOut();
      }
  return (
    <View  style={[{marginTop:inset.top},styles.nav_cont]}>
        <View style={styles.nav_flex}>
            <Image source={Group} />
            <Text style={styles.nav_text}>Каналсервис</Text>
            <Button
            onPress={Exit}
            title="Exit"
            accessibilityLabel="Exit"
            />
        </View>
    </View>
  );
}

export default Nav