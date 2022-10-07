import { StyleSheet, Dimensions } from "react-native";
import color from "./color"
const { height, width } = Dimensions.get('window');




const styles = StyleSheet.create({
    // container
    container: {
        flex: 1,
    },
    // main display settings
    form: {
        alignItems: "center",
        marginVertical: height * 0.15,
        alignSelf: "center",
        height: 333,
        width: 290,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
    },
    //login page content settings
    formText: {
        fontSize: 24,
        TOP: 30,
        color: color.blue,
    },
    inputform: {
        width: 212,

    },
    input_text: {
        fontSize: 24,
        marginTop: 10,
        color: color.black,
    },
    input: {
        borderWidth: 3,
        borderRadius: 6,
        height: 39,
        marginTop: 4,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderColor: color.blue,
        backgroundColor: color.grey,
    },
    button: {
        backgroundColor: color.yellow,
        height: 43,
        marginTop: 24,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    bt_text: {
        fontSize: 24,
    },
    error: {
        color: color.red,
        fontSize: 17,
        marginTop: 3,
    },
    //Nav bar display settings 
    nav_cont: {
        height: 118,
        width: width,
        backgroundColor: color.yellow,
        justifyContent: "center",
        padding: 7,
    },
    nav_text: {
        fontSize: 24,
    },
    nav_flex: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    }
});

export default styles;