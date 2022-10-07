import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../../../styles';
import Login_page from '../../screens/login/Login_page';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



function Nav() {
    const inset = useSafeAreaInsets();
    
  return (
    <View  style={[{marginTop:inset.top},styles.nav_cont]}>
        <Text style={styles.bt_text}>dsads</Text>
    </View>
  );
}

export default Nav