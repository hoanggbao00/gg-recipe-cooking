import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const features = [
	{
		title: 'Use of walnut from A to Z',
		background: 'bg-purple-200',
		image: '/images/spaghetti/Spaghetti-Carbonara-2.jpeg',
	},
	{
		title: 'Making sushi at home',
		background: 'bg-orange-200',
		image: 'images/chicken/Chicken-Tikka-Masala.webp',
	},
	{
		title: 'Super food for whole family',
		background: 'bg-blue-200',
		image: '/images/about/photo-1504674900247-0877df9cc836.jpg',
	},
	{
		title: 'Something is coming, be ready',
		background: 'bg-pink-200',
		image: '/images/chicken/chicken.jpg',
	},
];

export function FeaturedSlider() {
	return (
		<Carousel
			plugins={[Autoplay()]}
			opts={{
				loop: true,
				align: 'start',
			}}
			className='w-full'
		>
			<CarouselContent>
				{features.map((item, index) => (
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
						<div className='p-1'>
							<Card>
								<CardContent className='relative flex h-[300px] md:h-[200px] overflow-hidden'>
									<img src={item.image} alt={item.image} className='absolute inset-0 size-full object-cover rounded-lg' />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
