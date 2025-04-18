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

/**
 * List that contains either RecipeListItem or ApiRecipeListItem. Renders as many list items as there are recipes from the props.
 */
export default function RecipeList(props: RecipeListProps) {
    const { recipes, remoteRecipes, onImagePress, onRecipeAdd} = props;

    const [expandedId, setExpandedId] = useState<string | null>(null);

    // callback that is called when pressed on a standard RecipeListItem
    // sets the id of the recipe of which the list item should be expanded
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