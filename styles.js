import { StyleSheet } from "react-native";
import color from "./color"





const styles = StyleSheet.create({
    // container
    container: {
        flex: 1,
    },
    // main display settings
    form: {
        alignItems: "center",
        marginVertical: color.height * 0.15,
        alignSelf: "center",
        height: 333,
        width: 290,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
    },
    //login page content 
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
        width: color.width,
        backgroundColor: color.yellow,
        justifyContent: "space-between",
        padding: 7,
        flexDirection: "row",
        alignItems: "center",
    },
    nav_text: {
        fontSize: 24,
    },
    nav_flex: {
        flexDirection: "row",
        alignItems: "center",
    },
    //Main_Page_Containers
    vi_cont: {
        flex: 1,
        flexDirection: "column",
        width: 292,
        height: 200,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
        marginVertical: 10,
        overflow: "hidden",
        paddingHorizontal:7,
        paddingTop:3,
        paddingBottom:5,
    },
    vi_text: {
        fontSize: 16,
        marginTop: 5,
    }
});

export default styles;