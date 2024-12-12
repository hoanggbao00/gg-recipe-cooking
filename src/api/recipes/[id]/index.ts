import { recipes } from '@/data/recipes';

export async function getDetailRecipe(id: string) {
	const recipe = recipes.find((r) => r.id === id);

	if (!recipe) {
		throw new Error('Recipe not found');
	}

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return recipe;
}
