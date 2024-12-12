import { cn } from '@/lib/utils';
import { IRecipe } from '@/types/recipe';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface RecipeCardProps {
	recipe: IRecipe;
	index: number;
}

export default function DailyCard({ recipe, index }: RecipeCardProps) {
	const random = Math.floor(Math.random() * 5);

	const color = useMemo(() => {
		switch (random) {
			case 0:
				return 'bg-red-300';
			case 1:
				return 'bg-yellow-300/50';
			case 2:
				return 'bg-green-300';
			case 3:
				return 'bg-blue-300';
			case 4:
				return 'bg-pink-300/80';
		}
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.1 * index,
				duration: 0.5,
				ease: 'easeInOut',
			}}
			className='flex items-center gap-4 group w-full'
		>
			<img
				src={recipe.images[0]}
				alt={recipe.name}
				className='size-20 md:size-24 rounded-full object-cover absolute group-hover:scale-110 transition-transform duration-300'
			/>
			<div className='pl-12 md:pl-16 w-full'>
				<div className={cn('pr-2 pl-10 py-4 rounded-xl', color)}>
					<Link
						to={`/recipe/${recipe.id}`}
						className='font-medium group-hover:underline'
					>
						{recipe.name}
					</Link>
					<p className='text-xs text-gray-600 line-clamp-2'>
						{recipe.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}
