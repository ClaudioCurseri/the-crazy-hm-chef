import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import Background from "../../components/background";
import {useRecipes} from "../../context/RecipeContext";
import RecipeList from "../../components/recipeList";
import NoRecipes from "../../components/noRecipes";


export default function MyRecipes() {
    const { recipes } = useRecipes()

    return (
        <>
            <TopAppBar title={'My Recipes'}/>
            <PageBody>
                {
                    recipes.length > 0 ? (
                        <RecipeList recipes={recipes} remoteRecipes={false}/>
                    ) : (
                        <NoRecipes type={"no-recipes"} message={"There are no saved recipes yet.\nCreate new recipes to display them here!"} />
                    )
                }
            </PageBody>
            <Background/>
        </>
    )
}