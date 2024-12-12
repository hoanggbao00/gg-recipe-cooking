import { useCuisinesServices } from '@/services/recipe/cuisine';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function CuisineSelect() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectedCuisine, setSelectedCuisine] = useState('all');
	const cuisineServices = useCuisinesServices();
	const { data: cuisines } = cuisineServices.getList();

	useEffect(() => {
		if (!cuisines) return;
		const params = new URLSearchParams(searchParams);
		if (selectedCuisine !== 'all') params.set('cuisine', selectedCuisine);
		else params.delete('cuisine');
		setSearchParams(params, {
			replace: true,
		});
	}, [selectedCuisine]);

	return (
		<div className='flex items-center gap-2'>
			<Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
				<SelectTrigger className='w-full sm:w-[180px] bg-white hover:bg-muted/80 rounded-lg'>
					<SelectValue placeholder='Cuisine' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='all'>All Cuisines</SelectItem>
					{cuisines?.map((c) => (
						<SelectItem key={c} value={c}>
							{c}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
