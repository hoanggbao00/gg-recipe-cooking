'use client';

import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface SearchBarProps {
	cuisines: string[];
	searchParams?: URLSearchParams;
	setSearchParams?: (params: URLSearchParams) => void;
}

export default function SearchBar({
	cuisines,
	searchParams,
	setSearchParams,
}: SearchBarProps) {
	const [query, setQuery] = useState({
		query: searchParams?.get('query') || '',
		cuisine: searchParams?.get('cuisine') || 'all',
	});
	const [debouncedQuery] = useDebounce(query, 300);

	const handleSearch = useCallback(
		(_params: { query: string; cuisine: string }) => {
			const params = new URLSearchParams(_params);
			if(params.get('cuisine') === 'all') params.delete('cuisine');
			if(params.get('query') === '') params.delete('query');
			setSearchParams?.(params);
		},
		[setSearchParams]
	);

	useEffect(() => {
		handleSearch(debouncedQuery);
	}, [debouncedQuery]);

	return (
		<div className='flex flex-col sm:flex-row gap-2'>
			<Input
				type='text'
				placeholder='Search recipes...'
				value={query?.query || ''}
				onChange={(e) =>
					setQuery((prev) => ({ ...prev, query: e.target.value?.trim() }))
				}
				className='flex-grow bg-white'
			/>
			<Select
				value={query?.cuisine || 'all'}
				onValueChange={(value) =>
					setQuery((prev) => ({ ...prev, cuisine: value }))
				}
			>
				<SelectTrigger className='w-full sm:w-[180px] bg-white hover:bg-muted/80'>
					<SelectValue placeholder='Cuisine' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='all'>All Cuisines</SelectItem>
					{cuisines.map((c) => (
						<SelectItem key={c} value={c}>
							{c}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
