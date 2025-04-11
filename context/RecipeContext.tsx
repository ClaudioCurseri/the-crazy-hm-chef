import React, {createContext, useContext} from "react";
import {Recipe} from "../model/recipe";


const recipes: Recipe[] = []

const RecipeContext = createContext({
    recipes,
    getRecipeById: (id: string) => recipes.find(recipe => recipe.id === id),
    addRecipe: (recipe: Recipe) => {recipes.push(recipe)}
})

export const useRecipes = () => useContext(RecipeContext);

export function RecipeProvider({ children }: { children: React.ReactNode }) {
    return (
        <RecipeContext.Provider
        value={useContext(RecipeContext)}>
            {children}
        </RecipeContext.Provider>
    )
}