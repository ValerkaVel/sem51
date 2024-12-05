import React from 'react';
import { StyleSheet, TextInput, Text, Button, View} from 'react-native';
import { useState } from "react";

export default function Form({addHandler}) {
    const [text, setValue] = useState("")
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput
            onChangeText={onChange}
            placeholder='Что надо сделать?' />

            <Button 
            color="#E54381"
            onPress={() => addHandler(text)}
            title="Добавить задачку" />
        </View>
    );
}

const styles = StyleSheet.create({
    TextInput:{
        color: "#000000",
        textAlign: "center",
        backgroundColor: "#000000",
    },
    btn:{
        color: "#000000",
    }


});