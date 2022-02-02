import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

interface RecipesProps {
  children: ReactNode;
}

interface Recipe {
  id: number;
  title: string;
  serves: number;
  method: string;
  time: number;
  type: string;
  ingredients: string[];
  searchIngredients: string[];
  image: string;
}

interface RecipeContextData {
  recipes: Recipe[];
  recipeRender: Recipe;
  getRecipeById: (recipeId: number) => void;
}

const RecipesContext = createContext<RecipeContextData>(
  {} as RecipeContextData
);

const useRecipes = () => useContext(RecipesContext);

const RecipesProvider = ({ children }: RecipesProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios
      .get<Recipe[]>("https://capstone-json.herokuapp.com/recipes")
      .then((response) => {
        setRecipes(response.data);
      });
  }, []);

  const [recipeRender, setRecipeRender] = useState<Recipe>({} as Recipe);
  const history = useHistory();

  const getRecipeById = (recipeId: number) => {
    axios
      .get<Recipe>(`https://capstone-json.herokuapp.com/recipes/${recipeId}`)
      .then((response) => {
        setRecipeRender(response.data);
        history.push(`recipe/${recipeId}`);
      });
  };

  return (
    <RecipesContext.Provider value={{ recipes, recipeRender, getRecipeById }}>
      {children}
    </RecipesContext.Provider>
  );
};

export { useRecipes, RecipesProvider };
