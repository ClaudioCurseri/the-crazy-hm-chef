import {StyleSheet, TextInput} from "react-native";
import React from "react";


interface CustomTextInputProps {
    small: boolean;
    placeholder: string;
    setContent: (text: string) => void;
    value: string | null;
}

/**
 * Custom text input field.
 * Can be small or large depending on the props.
 */
export default function CustomTextInput(props: CustomTextInputProps) {
    const {small, placeholder, setContent, value} = props;
    return (
        small ? (
            <TextInput style={styles.textInputSmall} placeholder={placeholder} enablesReturnKeyAutomatically onChangeText={setContent} value={value ?? ''} />
            ) : (
            <TextInput style={styles.textInput} placeholder={placeholder} enablesReturnKeyAutomatically onChangeText={setContent} multiline numberOfLines={15} value={value ?? ''} />
        )
    )
}

const styles = StyleSheet.create({
    textInputSmall: {
        marginBottom: 15,
        padding: 5,
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    },
    textInput: {
        marginBottom: 15,
        padding: 5,
        height: 120,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    }
})