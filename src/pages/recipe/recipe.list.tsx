import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { RecipeCardSkeleton } from '@/pages/recipe/components/RecipeCardSkeleton';
import RecipeCard from '@/pages/recipe/components/RecipeCard';
import { IRecipe } from '@/types/recipe';
import { useRecipeServices } from '@/services/recipe/recipe';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

export default function RecipeList() {
	// #region States
	const [searchParams] = useSearchParams();
	const ref = useRef<HTMLDivElement>(null);

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

	const isInView = useInView(ref);
	// #endregion

	useEffect(() => {
		if (isInView && hasNextPage) {
			fetchNextPage();
		}
	}, [isInView, fetchNextPage, hasNextPage]);

	const pageTitle = `${searchParams.get('cuisine') ?? 'All'} Recipes`;

	return (
		<div className='min-h-screen bg-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='gap-4 w-full'>
					<Sidebar />
					<div className='md:pl-64 space-y-8'>
						<Header />
						<h1 className='text-4xl font-bold'>{pageTitle}</h1>
						<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
							{status === 'error' ? (
								<div className='col-span-full text-center mt-8'>
									Error: {(error as Error).message}
								</div>
							) : (
								data?.pages.map((page, i) => (
									<React.Fragment key={i}>
										{page.data?.map((recipe: IRecipe, index) => (
											<RecipeCard
												key={recipe.id}
												recipe={recipe}
												index={index}
											/>
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
			</div>
		</div>
	);
}
