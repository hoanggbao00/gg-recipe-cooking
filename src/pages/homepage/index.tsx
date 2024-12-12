import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SearchBar from '@/pages/homepage/components/SearchBar';
import { RecipeCardSkeleton } from '@/pages/recipe/components/RecipeCardSkeleton';
import RecipeCard from '@/pages/recipe/components/RecipeCard';
import { IRecipe } from '@/types/recipe';
import { useCuisinesServices } from '@/services/recipe/cuisine';
import { useRecipeServices } from '@/services/recipe/recipe';
import { useSearchParams } from 'react-router-dom';
import { APP_NAME } from '@/config/app-settings';

export default function Homepage() {
	// #region States
	const [searchParams, setSearchParams] = useSearchParams();
	const cuisineServices = useCuisinesServices();
	const { data: cuisinesData } = cuisineServices.getList();

	const recipeServices = useRecipeServices();
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = recipeServices.getPaginatedList({
		pageSize: 4,
		cuisine: searchParams.get('cuisine') || 'all',
		query: searchParams.get('query') || '',
	});

	const { ref, inView } = useInView();
	// #endregion

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage, hasNextPage]);

	const pageTitle = `${searchParams.get('cuisine') ?? 'All'} Recipes`;

	return (
		<div className='min-h-screen bg-gradient-to-br from-white via-orange-50 to-amber-100'>
			<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-8 text-center'>
				{APP_NAME} App
			</h1>
			<h2 className='text-3xl font-semibold mb-6 text-center'>{pageTitle}</h2>
			<SearchBar
				cuisines={cuisinesData || []}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
				{status === 'error' ? (
					<div className='col-span-full text-center mt-8'>
						Error: {(error as Error).message}
					</div>
				) : (
					data?.pages.map((page, i) => (
						<React.Fragment key={i}>
							{page.data?.map((recipe: IRecipe) => (
								<RecipeCard key={recipe.id} recipe={recipe} />
							))}
						</React.Fragment>
					))
				)}
				{isFetching &&
					Array.from({ length: 3 }).map((_, index) => (
						<RecipeCardSkeleton key={index} />
					))}
			</div>
			<div ref={ref} className='mt-8 text-center'>
				{isFetchingNextPage
					? Array.from({ length: 3 }).map((_, index) => (
							<RecipeCardSkeleton key={`next-page-${index}`} />
					  ))
					: hasNextPage
					? 'Loading more...'
					: !isFetching && 'No more recipes'}
			</div>
		</div>
		</div>
	);
}
