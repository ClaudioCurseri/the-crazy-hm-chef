import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import Background from "../../components/background";
import {useRecipes} from "../../context/RecipeContext";
import RecipeList from "../../components/recipeList";
import NoRecipes from "../../components/noRecipes";

/**
 * Page that contains a list of all saved recipes.
 */
export default function MyRecipes() {
    // recipes from context provider
    const { recipes } = useRecipes()

    return (
        <>
            <TopAppBar title={'My Recipes'}/>
            <PageBody>
                {
                    recipes.length > 0 ? (
                        <RecipeList recipes={recipes} remoteRecipes={false}/>
                    ) : (
                        <NoRecipes type={"no-recipes"} message={"There are no saved recipes yet.\nCreate new recipes or add recipes from TheMealDB!"} />
                    )
                }
            </PageBody>
            <Background/>
        </>
    )
}