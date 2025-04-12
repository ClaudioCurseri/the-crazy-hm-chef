import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, View, Image, Pressable, Modal} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";
import {useState} from "react";
import {Recipe} from "../../model/recipe";
import {getRecipesByName} from "../../service/recipeAPI";
import {useDebouncedCallback} from "use-debounce";
import RecipeList from "../../components/recipeList";
import NoRecipes from "../../components/noRecipes";


export default function Search() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchRecipes = useDebouncedCallback(async (text: string) => {
        if (text.trim() === '') {
            setRecipes([]);
            setLoading(false);
            return;
        }
        const result = await getRecipesByName(text);
        setRecipes(result);
        setLoading(false);
    }, 500);

    const onChangeSearchText = (text: string) => {
        setLoading(true);
        setSearchText(text);
        fetchRecipes(text);
    };

    const onImagePress = (image: string) => {
        setSelectedImage(image);
    }

    return (
        <>
            <TopAppBar title={'Search Recipes'} />
                <View style={styles.searchContainer}>
                    <Image style={styles.themealdbLogo} source={require("../../assets/themealdbLogo.png")} tintColor={'rgba(251,84,84,1)'} resizeMode="contain"/>
                    <CustomTextInput title placeholder={"Search for a recipe"} setContent={onChangeSearchText} value={searchText} />
                </View>
            <PageBody>
            {recipes.length > 0 ? (
                    <RecipeList recipes={recipes} remoteRecipes onImagePress={onImagePress} />
                ) : searchText && !loading ? (
                    <NoRecipes type={"no-recipes"} message={"No recipes found."} />
                ) : (
                    <NoRecipes type={"yet-to-search"} message={"Search for recipes on TheMealDB to display them here and add them to your collection!"} />
                )}
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