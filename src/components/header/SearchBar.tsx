'use client';

import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
	// #region States
	const [searchParams, setSearchParams] = useSearchParams();
	const [query, setQuery] = useState({
		query: searchParams?.get('query') || '',
		cuisine: searchParams?.get('cuisine') || 'all',
	});
	const [debouncedQuery] = useDebounce(query, 300);
	// #endregion

	const handleSearch = useCallback(
		(_params: { query: string; cuisine: string }) => {
			const params = new URLSearchParams(_params);
			if (params.get('cuisine') === 'all') params.delete('cuisine');
			if (params.get('query') === '') params.delete('query');
			setSearchParams?.(params);
		},
		[setSearchParams]
	);

	useEffect(() => {
		handleSearch(debouncedQuery);
	}, [debouncedQuery]);

	return (
		<input
			type='text'
			placeholder='Search recipes by name, ingredient and etc...'
			value={query?.query || ''}
			onChange={(e) =>
				setQuery((prev) => ({ ...prev, query: e.target.value?.trim() }))
			}
			className='rounded-full text-lg px-4 py-2 w-full focus:outline-primary outline-none'
		/>
	);
}
