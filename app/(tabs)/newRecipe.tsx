import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";
import {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import CustomImagePicker from "../../components/imagePicker";
import {useRecipes} from "../../context/RecipeContext";
import {Recipe} from "../../model/recipe";

export default function NewRecipe() {
    const [image, setImage] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    const { addRecipe, recipes } = useRecipes();

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

    const saveRecipe = () => {
        const recipe: Recipe = {
            id: `recipe-${recipes.length}`,
            title: title!!,
            description: description!!,
            image: image!!,
        }

        addRecipe(recipe);

        setTitle(null);
        setDescription(null);
        setImage(null);
    }

    const allFieldsSubmitted = title != null && title !== "" && description != null && description !== "" && image != null;

    return (
        <><TopAppBar title={'New Recipe'}/>
            <PageBody>
            <Text style={styles.addRecipeHeaderSubtitle}>
                Add a new recipe
            </Text>
                <Text style={styles.subtitle}>
                    Recipe Information
                </Text>
            <CustomTextInput title placeholder={"Title of your recipe"} setContent={setTitle} value={title}/>
            <CustomTextInput title={false} placeholder={"Description of your recipe"} setContent={setDescription} value={description}/>
                <Text style={styles.subtitle}>
                    Add an Image
                </Text>
                <CustomImagePicker pickImage={pickImage} image={image} />
                <TouchableOpacity style={[!allFieldsSubmitted ? {opacity : 0.5} : {}, styles.submitButton]} disabled={!allFieldsSubmitted} onPress={saveRecipe}>
                    <Text style={styles.submitButtonText}>Add Recipe</Text>
                </TouchableOpacity>
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
    },
    submitButton: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: '#ff2f2f',
        elevation: 10,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'white',
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
    }
})