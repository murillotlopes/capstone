import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface RecipesProps {
    children: ReactNode
}

interface Recipe {
    id: number
    titulo: string
    porção: number
    modo_de_preparo: string
    ingredientes: string[]
    imagem: string
}

interface RecipeContextData {
    recipes: Recipe[]
}

const RecipesContext = createContext <RecipeContextData> ({} as RecipeContextData)

const useRecipes = () => useContext(RecipesContext)

const RecipesProvider = ({ children }: RecipesProps ) => {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        axios
        .get<Recipe[]>("https://capstone-json.herokuapp.com/recipes")
        .then((response) => {
            setRecipes(response.data)
        })
    }, [])

    return (
        <RecipesContext.Provider
            value={{recipes}}
        >
            {children}
        </RecipesContext.Provider>
    )
}

export { useRecipes, RecipesProvider }