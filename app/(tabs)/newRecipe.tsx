import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, Text} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";
import {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import CustomImagePicker from "../../components/imagePicker";

export default function NewRecipe() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <><TopAppBar title={'New Recipe'}/>
            <PageBody>
            <Text style={styles.addRecipeHeaderSubtitle}>
                Add a new recipe
            </Text>
                <Text style={styles.subtitle}>
                    Recipe Information
                </Text>
            <CustomTextInput title placeholder={"Title of your recipe"} />
            <CustomTextInput title={false} placeholder={"Description of your recipe"} />
                <Text style={styles.subtitle}>
                    Add an Image
                </Text>
                <CustomImagePicker pickImage={pickImage} image={image} />
        </PageBody><Background/></>
    )
}

const styles = StyleSheet.create({
    addRecipeHeaderSubtitle: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: "bold",
        color: 'lightgray',
    },
    subtitle: {
        fontSize: 18,
        paddingTop: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    }
})