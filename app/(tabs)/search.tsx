import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, Text, View, Image} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";
import {useState} from "react";
import {Recipe} from "../../model/recipe";
import {getRecipesByName} from "../../service/recipeAPI";
import {useDebouncedCallback} from "use-debounce";


export default function Search() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

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
            </PageBody>
            <Background/>
        </>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
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
    }
})