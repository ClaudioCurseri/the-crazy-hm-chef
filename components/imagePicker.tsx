import {Image, Pressable, StyleSheet, Text} from "react-native";

interface CustomImagePickerProps {
    pickImage: () => Promise<void>;
    image: string | null;
}

export default function CustomImagePicker(props: CustomImagePickerProps) {
    const { pickImage, image } = props;

    return (
        <Pressable style={styles.imagePicker} onPress={pickImage}>
            {image == null ? (
                <Text style={styles.imagePickerHint}>
                    Press to select an image from your gallery
                </Text>
            ) : (
                <Image source={{uri: image}} style={styles.image}/>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    imagePicker: {
        marginBottom: 15,
        justifyContent: 'center',
        width: '80%',
        height: 240,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    },
    imagePickerHint: {
        padding: 5,
        color: 'gray',
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    }
})