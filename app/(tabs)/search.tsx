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


/**
 * Page that can be used to search for recipes on themealdb.
 */
export default function Search() {
    // text that the user typed in the search bar
    const [searchText, setSearchText] = useState<string | null>(null);
    // two separate lists of recipes (unfiltered and filtered)
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
    // image of the recipe that the user presses on
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    // flag to indicate whether a search is currently ongoing
    const [loading, setLoading] = useState<boolean>(false);
    // flag of the switch that activates the recipe filter
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    // recipes from context
    const { recipeExists } = useRecipes();

    // function that sets the filtered recipes list based on whether the filter switch is enabled or not
    const filterRecipes = (recipesToFilter: Recipe[], filterEnabled: boolean) => {
        if (filterEnabled) {
            setFilteredRecipes(recipesToFilter.filter(recipe => !recipeExists(recipe)));
        } else {
            setFilteredRecipes(recipesToFilter);
        }
    }

    // debounced function with a timeout of 500ms
    // calls the api service and sets the recipe lists
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

    // callback that is called when the text in the search bar changes
    // triggers the debounced search
    const onChangeSearchText = (text: string) => {
        setLoading(true);
        setSearchText(text);
        fetchRecipes(text);
    };

    // callback that is called when the user presses on an image
    // sets the selected image
    const onImagePress = (image: string) => {
        setSelectedImage(image);
    }

    // callback that is called when the switch is toggled
    // sets the corresponding flag and filters the list of recipes
    const toggleSwitch = () => {
        const newState = !isEnabled
        setIsEnabled(newState);
        filterRecipes(recipes, newState);
    }

    // callback that is called when an image is added
    // updates the filtered recipes list
    const onRecipeAdd = (recipe: Recipe) => {
        setFilteredRecipes(filteredRecipes.filter(r => r.id !== recipe.id));
    }

    return (
        <>
            <TopAppBar title={'Search Recipes'} />
                <View style={styles.searchContainer}>
                    <Image style={styles.themealdbLogo} source={require("../../assets/themealdbLogo.png")} tintColor={'rgba(251,84,84,1)'} resizeMode="contain"/>
                    <CustomTextInput small placeholder={"Search for a recipe"} setContent={onChangeSearchText} value={searchText} />
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