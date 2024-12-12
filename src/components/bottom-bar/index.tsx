import { cn } from '@/lib/utils';
import { Grid, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
	{
		path: '/recipe',
		label: 'Browse',
		icon: <Grid size={24} />,
	},
	{
		path: '/',
		label: 'For you',
		icon: <Heart size={34} className='fill-red-400 stroke-none' />,
	},
	{
		path: '/about',
		label: 'About',
		icon: <Info size={24} />,
	},
];

export default function BottomBar() {
	return (
		<nav className='fixed bottom-0 left-0 w-full h-14 py-2 bg-white md:hidden z-50 rounded-t-xl border-t'>
			<ul className='flex gap-2 items-center justify-evenly h-full'>
				{navItems.map((item) => (
					<li
						key={item.path}
						className={cn(
							'flex items-center justify-center h-full rounded-full aspect-square transition-all',
							{
								'bg-primary/50 text-white font-semibold scale-125':
									item.path === window.location.pathname,
							}
						)}
					>
						<Link to={item.path}>{item.icon}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
