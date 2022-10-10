import React, { useContext } from "react";
import { Pressable, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../exports/context";
//Icons
import ExitSvg from "../exports/exit";
import Icon from "../exports/logo";

//styles and color components
import styles from "../../../styles";
import color from "../../../color";

function Nav(user_state) {
  const inset = useSafeAreaInsets();
  const { signOut } = useContext(AuthContext);

  //Check if session user isset
  const Check = () => {
    if (user_state.data !== null) {
      return (
        <Pressable onPress={Exit}>
          <ExitSvg />
        </Pressable>
      );
    }
  };

  //Rip User Session
  const Exit = () => {
    signOut();
  };

  //Text display or no
  const Text_Check = () => {
    if (color.width > 500) {
      return <Text style={styles.nav_text}>Каналсервис</Text>;
    }
  };

  /* Test Button
    <Button
      onPress={Exit}
      title="Exit"
      accessibilityLabel="Exit"
      />
  */

  return (
    <View style={[{ marginTop: inset.top }, styles.nav_cont]}>
     
      <View style={styles.nav_flex}>
        <Icon />
        <Text_Check />
      </View>

      <Check />
    </View>
  );
}

export default Nav;
