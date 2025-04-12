import {StyleSheet, TextInput} from "react-native";
import React from "react";


interface CustomTextInputProps {
    title: boolean;
    placeholder: string;
    setContent: React.Dispatch<React.SetStateAction<string | null>>
    value: string | null;
}

export default function CustomTextInput(props: CustomTextInputProps) {
    const {title, placeholder, setContent, value} = props;
    return (
        title ? (
            <TextInput style={styles.textInputTitle} placeholder={placeholder} enablesReturnKeyAutomatically onChangeText={setContent} value={value ?? ''} />
            ) : (
            <TextInput style={styles.textInputText} placeholder={placeholder} enablesReturnKeyAutomatically onChangeText={setContent} multiline numberOfLines={15} value={value ?? ''} />
        )
    )
}

const styles = StyleSheet.create({
    textInputTitle: {
        marginBottom: 15,
        padding: 5,
        height: 40,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    },
    textInputText: {
        marginBottom: 15,
        padding: 5,
        height: 120,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    }
})