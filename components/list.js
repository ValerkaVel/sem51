import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={()=>deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#FFDDEA",
        borderWidth: 3,
        borderColor: '#A70F49',
        marginTop: 20, 
        width: "30%", 
        marginLeft: "35%",
    },
});