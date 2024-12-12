import SearchBar from '@/components/header/SearchBar';
import CuisineSelect from './CuisineSelect';
import { useLocation } from 'react-router-dom';

export default function Header() {
	const {pathname} = useLocation()

	return (
		<header className='flex gap-4 py-4 items-center sticky px-1 top-0 z-50 bg-white shadow-sm'>
			<SearchBar />
			{pathname != '/' && <CuisineSelect />}
		</header>
	);
}
