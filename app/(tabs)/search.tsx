import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, Text, View, Image, Pressable, Modal} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";
import {useState} from "react";
import {Recipe} from "../../model/recipe";
import {getRecipesByName} from "../../service/recipeAPI";
import {useDebouncedCallback} from "use-debounce";
import RecipeList from "../../components/recipeList";


export default function Search() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const fetchRecipes = useDebouncedCallback(async (text: string) => {
        if (text.trim() === '') {
            setRecipes([]);
            return;
        }
        const result = await getRecipesByName(text);
        setRecipes(result);
    }, 500);

    const onChangeSearchText = (text: string) => {
        setSearchText(text);
        fetchRecipes(text);
    };

    const onImagePress = (image: string) => {
        setSelectedImage(image);
    }

    return (
        <>
            <TopAppBar title={'Search Recipes'} />
            <PageBody>
                <View style={styles.searchContainer}>
                    <Text style={styles.subtitle}>
                        Search for Recipes using
                    </Text>
                    <Image style={styles.themealdbLogo} source={require("../../assets/themealdbLogo.png")} resizeMode="contain"/>
                    <CustomTextInput title placeholder={"Search for a recipe"} setContent={onChangeSearchText} value={searchText} />
                </View>
                <RecipeList recipes={recipes} remoteRecipes onImagePress={onImagePress} />
            </PageBody>
            <Background/>
            {selectedImage && (
                <Modal
                    visible
                    transparent
                    animationType="fade"
                    onRequestClose={() => setSelectedImage(null)}
                >
                    <Pressable style={styles.imageOverlay} onPress={() => setSelectedImage(null)}>
                        <Image source={{uri: selectedImage}} style={styles.image}></Image>
                    </Pressable>
                </Modal>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        padding: 10,
        width: '100%',
        alignItems: "center",
    },
    subtitle: {
        fontSize: 18,
        paddingTop: 10,
        fontWeight: "bold",
    },
    themealdbLogo: {
        height: 50,
        width: '50%',
    },
    imageOverlay: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        height: '100%',
        width: '100%',
        zIndex: 999,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    image: {
        width: '90%',
        height: '90%',
    }
})