import { recipes } from "@/data/recipes"

export async function getCuisines() {
  const uniqueCuisines = Array.from(new Set(recipes.map(recipe => recipe.cuisine)))

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500))

  return uniqueCuisines
}

