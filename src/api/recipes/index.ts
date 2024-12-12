import { recipes } from '@/data/recipes';
import { findMostSimilarWord } from '@/lib/find-most-similar-word';

export async function getRecipes(searchParams: {
	query?: string;
	cuisine?: string;
	page?: number;
	pageSize?: number;
}) {
	const { query, cuisine = 'all', page = 1, pageSize = 4 } = searchParams;

	let filteredRecipes = recipes;

	// Filter cuisine first
	if (cuisine !== 'all') {
		filteredRecipes = recipes.filter((recipe) => recipe.cuisine === cuisine);
	}

	if (query) {
		filteredRecipes = filteredRecipes.filter(
			(recipe) =>
				recipe.name.toLowerCase().includes(query.toLowerCase()) ||
				recipe.ingredients.some((ingredient) =>
					ingredient.name.toLowerCase().includes(query.toLowerCase())
				)
		);
	}

	const totalPages = Math.ceil(filteredRecipes.length / pageSize);
	let paginatedRecipes = filteredRecipes.slice(
		(page - 1) * pageSize,
		page * pageSize
	);

	if (paginatedRecipes.length === 0 && query) {
		console.log(query)
		const mostSimilarWord = findMostSimilarWord(
			query,
			recipes.map((recipe) => recipe.name)
		);

		if (mostSimilarWord) {
			paginatedRecipes = recipes
				.filter(
					(recipe) =>
						recipe.name.toLowerCase().includes(mostSimilarWord.toLowerCase()) ||
						recipe.ingredients.some((ingredient) =>
							ingredient.name
								.toLowerCase()
								.includes(mostSimilarWord.toLowerCase())
						)
				)
				.slice((page - 1) * pageSize, page * pageSize);
		}
	}

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		data: paginatedRecipes,
		totalPages,
		currentPage: page,
	};
}
