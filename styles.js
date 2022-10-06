import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
const blue = "#27569C";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    form: {
        alignItems: "center",
        height: height * 0.5,
        width: width * 0.8,
        marginBottom: height * 0.35,
        marginLeft: width * 0.1,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: blue,
    },
    formText: {
        fontSize: 24,
        TOP: 30,
        color: blue,
    }

});

export default styles;