import {Recipe} from "../model/recipe";
import {StyleSheet, View} from "react-native";
import RecipeListItem from "./recipeListItem";
import {useState} from "react";
import ApiRecipeListItem from "./apiRecipeListItem";


interface RecipeListProps {
    recipes: Recipe[];
    remoteRecipes: boolean;
    onImagePress?: (image: string) => void;
    onRecipeAdd?: (recipe: Recipe) => void;
}

export default function RecipeList(props: RecipeListProps) {
    const { recipes, remoteRecipes, onImagePress, onRecipeAdd} = props;

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleItemPress = (id: string) => {
        setExpandedId(recipeId => (recipeId === id ? null : id));
    };

    return (
        <View style={styles.container}>
            {recipes.map(recipe => (
                remoteRecipes ? (
                    <ApiRecipeListItem recipe={recipe} key={recipe.id} onImagePress={onImagePress} onRecipeAdd={onRecipeAdd}/>
                ) : (
                    <RecipeListItem recipe={recipe} key={recipe.id} expanded={recipe.id === expandedId} onPress={() => handleItemPress(recipe.id)}/>
                )
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    }
})