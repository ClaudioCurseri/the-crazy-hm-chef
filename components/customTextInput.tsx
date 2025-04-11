import {StyleSheet, TextInput} from "react-native";


interface CustomTextInputProps {
    title: boolean;
    placeholder: string;
}

export default function CustomTextInput(props: CustomTextInputProps) {
    const {title, placeholder} = props;
    return (
        title ? (
            <TextInput style={styles.textInputTitle} placeholder={placeholder} enablesReturnKeyAutomatically />
            ) : (
            <TextInput style={styles.textInputText} placeholder={placeholder} enablesReturnKeyAutomatically multiline numberOfLines={15}/>
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
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    }
})