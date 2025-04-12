import React, {createContext, useContext, useState} from "react";
import {Recipe} from "../model/recipe";


const recipes: Recipe[] = []

const RecipeContext = createContext({
    recipes,
    addRecipe: (_ :Recipe) => {},
    recipeExists: (_ :Recipe): boolean =>{return false}
})

export const useRecipes = () => useContext(RecipeContext);

export function RecipeProvider({ children }: { children: React.ReactNode }) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const recipeExists = (recipe: Recipe) => {
        return recipes.some(r => r.id === recipe.id);
    }

    const addRecipe = (recipe: Recipe) => {
        if (!recipeExists(recipe)) setRecipes(prev => [...prev, recipe]);
    };

    return (
        <RecipeContext.Provider
        value={{recipes, addRecipe, recipeExists}}>
            {children}
        </RecipeContext.Provider>
    )
}