import { cn } from '@/lib/utils';
import { Grid, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
	{
		path: '/recipe',
		label: 'Browse',
		icon: <Grid size={18} />,
	},
	{
		path: '/',
		label: 'For you',
		icon: <Heart size={18} className='fill-red-400 stroke-none' />,
	},
];

export default function Navigation() {
	const { pathname } = useLocation();

	return (
		<div className='space-y-4'>
			<h2 className='text-xs font-semibold text-gray-500'>DISCOVER</h2>
			<nav className='space-y-2'>
				{navItems.map((item) => (
					<Link
						key={item.path}
						to={item.path}
						className={cn(
							'flex items-center gap-2 hover:text-primary transition-colors rounded-lg px-2 py-1 hover:bg-primary/30',
							{
								'bg-primary/50 text-white font-semibold':
									pathname === item.path,
							}
						)}
					>
						{item.icon}
						{item.label}
					</Link>
				))}
			</nav>
		</div>
	);
}
