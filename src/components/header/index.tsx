import { APP_NAME } from '@/config/app-settings';
import { Link } from 'react-router-dom';

const navItems = [
	{
		path: '/',
		label: 'Home',
	},
	{
		path: '/about',
		label: 'About',
	},
];

export default function Header() {
	return (
		<header className='md:container h-14 px-4 mx-auto fixed top-0 inset-x-0'>
			<div className='border rounded-md h-full flex items-center justify-between pr-4 bg-white'>
				<Link
					to={'/'}
					className='font-bold text-lg rounded-md hover:bg-muted w-auto py-2 px-4 transition-colors hover:text-primary'
				>
					{APP_NAME}
				</Link>
				<nav>
					{navItems.map((item) => (
						<Link key={item.path} to={item.path} className='mx-2 hover:text-primary font-semibold'>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
