import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel } from '@/components/Carousel';
import { useRecipeServices } from '@/services/recipe/recipe';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@/components/common/not-found';
import { buttonVariants } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { ErrorPage } from '@/components/common/error';
import DetailSkeleton from './components/DetailSkeleton';
import { motion } from 'framer-motion';

export default function RecipeDetailPage() {
	const params = useParams();
	const recipeServices = useRecipeServices();
	const {
		data: recipe,
		isLoading,
		error,
	} = recipeServices.getDetail(params.id!);

	if (error) return <ErrorPage message={error.message} />;

	if (isLoading) return <DetailSkeleton />;

	if (!isLoading && !recipe) return <NotFound />;

	return (
		!isLoading &&
		recipe && (
			<div className='container mx-auto px-4 space-y-4 overflow-hidden mt-4 pb-8'>
				<Link
					to={'/'}
					className={buttonVariants({
						variant: 'secondary',
						className: 'hover:text-primary',
					})}
				>
					<ChevronLeft /> Back
				</Link>
				<Card>
					<CardHeader>
						<CardTitle className='text-3xl font-bold'>{recipe.name}</CardTitle>
						<p className='text-gray-500'>Cuisine: {recipe.cuisine}</p>
					</CardHeader>
					<CardContent className='flex flex-col lg:flex-row gap-4 items-start'>
						<Carousel
							images={recipe.images}
							autoplayInterval={5000}
							className='mb-6'
							hideNavigation
						/>
						<div>
							<p className='text-lg mb-4'>{recipe.description}</p>
							<div className='grid grid-cols-2 gap-4 mb-6'>
								<div>
									<p>
										<strong>Prep Time:</strong> {recipe.prepTime}
									</p>
									<p>
										<strong>Cook Time:</strong> {recipe.cookTime}
									</p>
								</div>
								<div>
									<p>
										<strong>Servings:</strong> {recipe.servings}
									</p>
									<p>
										<strong>Difficulty:</strong> {recipe.difficulty}
									</p>
								</div>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
								<div>
									<h2 className='text-2xl font-semibold mb-2'>Ingredients</h2>
									<ul className=''>
										{recipe.ingredients.map((ingredient, index) => (
											<motion.li
												initial={{
													opacity: 0,
													y: 50,
												}}
												animate={{
													opacity: 1,
													y: 0,
												}}
												transition={{
													duration: 0.5,
													ease: 'easeInOut',
													delay: index * 0.1,
												}}
												key={index}
												className='mb-2'
											>
												<div className='flex items-center'>
													<img
														src={ingredient.image || ''}
														alt={ingredient.name}
														className='rounded-full mr-2 size-[40px]'
													/>
													<span>
														{ingredient.amount} {ingredient.name}
													</span>
												</div>
											</motion.li>
										))}
									</ul>
								</div>
								<div>
									<h2 className='text-2xl font-semibold mb-2'>Instructions</h2>
									<ol className='list-decimal pl-5'>
										{recipe.instructions.map((step, index) => (
											<motion.li
												initial={{
													opacity: 0,
													x: 100,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													ease: 'easeInOut',
													delay: index * 0.1 + 0.2 * recipe.ingredients.length,
												}}
												key={index}
												className='mb-2'
											>
												{step}
											</motion.li>
										))}
									</ol>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		)
	);
}
