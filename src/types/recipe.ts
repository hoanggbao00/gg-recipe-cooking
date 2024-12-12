import { Ingredient } from "./ingredients";

export interface IRecipe {
  id: string;
  name: string;
  images: string[];
  ingredients: Ingredient[];
  instructions: string[];
  cuisine: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  description: string;
}