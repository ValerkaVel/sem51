import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Мой список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A70F49",
        minHeight: 90,
        
    },
    text: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        alignItems: "center",
    }
});
