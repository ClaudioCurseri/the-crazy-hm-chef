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

/**
 * Page that contains a form to create a new recipe.
 */
export default function NewRecipe() {
    // selected title, description and image of the recipe
    const [image, setImage] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    // recipes from context
    const { addRecipe, recipes } = useRecipes();

    // function that opens the gallery image selector
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

    // function that saves the recipe in the context.
    const saveRecipe = () => {
        // create recipes from attributes
        const recipe: Recipe = {
            id: `recipe-${recipes.length}`,
            title: title!!,
            description: description!!,
            image: image!!,
        }
        // add recipe to context
        addRecipe(recipe);
        // clear all forms
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
            <CustomTextInput small placeholder={"Title of your recipe"} setContent={setTitle} value={title}/>
            <CustomTextInput small={false} placeholder={"Description of your recipe"} setContent={setDescription} value={description}/>
                <Text style={styles.subtitle}>
                    Recipe Image
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