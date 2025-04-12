import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import Background from "../../components/background";
import {useRecipes} from "../../context/RecipeContext";
import RecipeList from "../../components/recipeList";


export default function MyRecipes() {
    const { recipes } = useRecipes()

    return (
        <>
            <TopAppBar title={'My Recipes'}/>
            <PageBody>
                <RecipeList recipes={recipes} />
            </PageBody>
            <Background/>
        </>
    )
}