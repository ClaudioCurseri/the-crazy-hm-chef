import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, View, Image, Pressable, Modal, Switch, Text} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";
import {useState} from "react";
import {Recipe} from "../../model/recipe";
import {getRecipesByName} from "../../service/recipeAPI";
import {useDebouncedCallback} from "use-debounce";
import RecipeList from "../../components/recipeList";
import NoRecipes from "../../components/noRecipes";
import {useRecipes} from "../../context/RecipeContext";


export default function Search() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const { recipeExists } = useRecipes();

    const filterRecipes = (recipesToFilter: Recipe[], filterEnabled: boolean) => {
        if (filterEnabled) {
            setFilteredRecipes(recipesToFilter.filter(recipe => !recipeExists(recipe)));
        } else {
            setFilteredRecipes(recipesToFilter);
        }
    }

    const fetchRecipes = useDebouncedCallback(async (text: string) => {
        if (text.trim() === '') {
            setRecipes([]);
            setFilteredRecipes([]);
            setLoading(false);
            return;
        }
        const result = await getRecipesByName(text);
        setRecipes(result);
        filterRecipes(result, isEnabled);
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

    const toggleSwitch = () => {
        const newState = !isEnabled
        setIsEnabled(newState);
        filterRecipes(recipes, newState);
    }

    const onRecipeAdd = (recipe: Recipe) => {
        setFilteredRecipes(filteredRecipes.filter(r => r.id !== recipe.id));
    }

    return (
        <>
            <TopAppBar title={'Search Recipes'} />
                <View style={styles.searchContainer}>
                    <Image style={styles.themealdbLogo} source={require("../../assets/themealdbLogo.png")} tintColor={'rgba(251,84,84,1)'} resizeMode="contain"/>
                    <CustomTextInput title placeholder={"Search for a recipe"} setContent={onChangeSearchText} value={searchText} />
                    <View style={styles.switchContainer}>
                        <Text>Non-added recipes only</Text>
                        <Switch style={styles.switch}
                            trackColor={{true: "#52bd60"}}
                            thumbColor={isEnabled ? "green" : "#d1ccd1"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            <PageBody>
            {filteredRecipes.length > 0 ? (
                    <RecipeList recipes={filteredRecipes} remoteRecipes onImagePress={onImagePress} onRecipeAdd={isEnabled ? onRecipeAdd : undefined}/>
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
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    switch : {
        paddingLeft: 10,
    }
})