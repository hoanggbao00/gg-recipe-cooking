import React from 'react';
import { RecipeCardSkeleton } from '@/pages/recipe/components/RecipeCardSkeleton';
import { IRecipe } from '@/types/recipe';
import { useRecipeServices } from '@/services/recipe/recipe';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { FeaturedSlider } from './components/FeaturedSlider';
import DailyCard from './components/DailyCard';

export default function Homepage() {
	// #region States
	const [searchParams] = useSearchParams();

	const recipeServices = useRecipeServices();
	const {
		data,
		error,
		isFetching,

		status,
	} = recipeServices.getPaginatedList({
		pageSize: 6,
		query: searchParams.get('query') || '',
	});
	// #endregion

	return (
		<div className='min-h-screen bg-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='gap-4 w-full pb-20 md:pb-0'>
					<Sidebar />
					<div className='md:pl-64 space-y-8'>
						<Header />
						<FeaturedSlider />
						<h1 className='text-4xl font-bold mb-4'>Daily Best Recipes</h1>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
							{status === 'error' ? (
								<div className='col-span-full text-center mt-8'>
									Error: {(error as Error).message}
								</div>
							) : (
								data?.pages.map((page, i) => (
									<React.Fragment key={i}>
										{page.data?.map((recipe: IRecipe, index) => (
											<DailyCard
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
					</div>
				</div>
			</div>
		</div>
	);
}
