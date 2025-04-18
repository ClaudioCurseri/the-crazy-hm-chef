import {Recipe} from "../model/recipe";

const theMealDBUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

/**
 * Fetches recipes from themealdb with a given search text.
 */
export async function getRecipesByName(name: string): Promise<Recipe[]> {
    try {
        const response = await fetch(theMealDBUrl + name)
        const data = await response.json()

        if (!data.meals) {
            return [];
        }

        return data.meals.map((recipe: any): Recipe => {
            return {
                id: recipe["idMeal"],
                title: recipe["strMeal"],
                description: recipe["strInstructions"],
                image: recipe["strMealThumb"],
                category: recipe["strArea"]
            }
        });

    } catch (error) {
        console.log(error);
    }
    return [];
}