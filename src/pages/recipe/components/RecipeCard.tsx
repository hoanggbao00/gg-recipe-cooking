'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PreviewPopup from './PreviewPopup';
import { Carousel } from '@/components/Carousel';
import { IRecipe } from '@/types/recipe';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

interface RecipeCardProps {
	recipe: IRecipe;
	index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });
	console.log("🚀 ~ RecipeCard ~ isInView:", index, isInView)

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isHovered) {
			timer = setTimeout(() => setShowPopup(true), 1000);
		}
		return () => {
			clearTimeout(timer);
			setShowPopup(false);
		};
	}, [isHovered]);

	const handleClickCuisine = useCallback((cuisine: string) => {
		window.location.replace(`?cuisine=${cuisine}`);
	}, []);

	return (
		<motion.div
			ref={ref}
			initial={{
				opacity: 0,
				y: 150,
			}}
			animate={{
				opacity: isInView ? 1 : 0,
				y: isInView ? 0 : 150,
			}}
			transition={{
				delay: index * 0.1,
				duration: '0.5',
				ease: 'easeInOut',
			}}
			style={{
				opacity: isInView ? 0 : 1,
				transform: isInView ? "none" : "translateY(-150px)",
			}}
			className='relative'
		>
			<Card className='overflow-hidden flex flex-col h-full'>
				<CardHeader className='p-0'>
					<div
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<Carousel images={recipe.images} hideNavigation={true} />
					</div>
				</CardHeader>
				<CardContent className='p-4 flex-grow'>
					<CardTitle className='text-xl mb-2'>{recipe.name}</CardTitle>
					<p className='text-sm text-gray-500 mb-2'>
						Cuisine:{' '}
						<span
							className='hover:underline cursor-pointer hover:text-primary transition-colors'
							onClick={() => handleClickCuisine(recipe.cuisine)}
						>
							{recipe.cuisine}
						</span>
					</p>
					<p className='text-sm mb-2'>
						Ingredients:{' '}
						{recipe.ingredients
							.slice(0, 4)
							.map((i) => i.name)
							.join(', ')}
						...
					</p>
				</CardContent>
				<CardFooter>
					<Link to={`/recipe/${recipe.id}`} className='w-full'>
						<Button className='w-full'>View full recipe</Button>
					</Link>
				</CardFooter>
			</Card>
			<PreviewPopup recipe={recipe} isVisible={showPopup} />
		</motion.div>
	);
}
