import React, {useContext} from 'react';
import { Pressable, Text, View, Image, Button } from 'react-native';
import styles from '../../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../exports/context';
import ExitSvg from '../exports/exit';
import Icon from '../exports/logo';

function Nav(user_state) {
    const inset = useSafeAreaInsets();
    const { signOut } = useContext(AuthContext);

    //Check if session user isset
    const Check = () => {
      if(user_state.data !== null) {
        return (
        <Pressable onPress={Exit} >
          <ExitSvg />
        </Pressable>
          )}
        }

    //Rip User Session
    const Exit = () => {
      signOut();
    }  
   
    /* Test Button
      <Button
        onPress={Exit}
        title="Exit"
        accessibilityLabel="Exit"
        />
    */


  return (
    <View  style={[{marginTop:inset.top},styles.nav_cont]}>
        <View style={styles.nav_flex}>
        <Icon />
            <Text style={styles.nav_text}>Каналсервис</Text>
        </View>
        
        <Check  />
    </View>
  );
}

export default Nav