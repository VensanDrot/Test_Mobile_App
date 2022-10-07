import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
const blue = "#27569C";
const black = "#000";
const grey = "#D9D9D9";
const yellow = "#E4B062";
const red = "#ED4337"


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
        borderColor: blue,
    },
    //login page content settings
    formText: {
        fontSize: 24,
        TOP: 30,
        color: blue,
    },
    inputform: {
        width: 212,

    },
    input_text: {
        fontSize: 24,
        marginTop: 13,
        color: black,
    },
    input: {
        borderWidth: 3,
        borderRadius: 6,
        height: 39,
        marginTop: 7,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderColor: blue,
        backgroundColor: grey,
    },
    button: {
        backgroundColor: yellow,
        height: 43,
        marginTop: 25,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    bt_text: {
        fontSize: 24,
    },
    error: {
        color: red,
    }
});

export default styles;