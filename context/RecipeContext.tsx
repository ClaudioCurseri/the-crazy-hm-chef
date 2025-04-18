import React, {createContext, useContext, useState} from "react";
import {Recipe} from "../model/recipe";

interface RecipeContextProps {
    recipes: Recipe[];
    addRecipe: (recipe: Recipe) => void;
    recipeExists: (recipe: Recipe) => boolean;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const useRecipes = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error("Context must be used within a RecipeProvider");
    }
    return context;
};


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