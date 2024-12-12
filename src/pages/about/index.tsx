import React from 'react';
import { Utensils, Heart, Globe, CheckCircle } from 'lucide-react';
import { APP_NAME } from '@/config/app-settings';
import Header from '@/components/header';

const AboutPage: React.FC = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-white via-orange-50 to-amber-100 py-16 px-4'>
			<Header />
			<div className='md:container px-4 mx-auto'>
				<div className='bg-white shadow-2xl rounded-xl overflow-hidden'>
					<div className='bg-gradient-to-r from-amber-500 to-orange-600 text-white p-12 text-center'>
						<h1 className='text-5xl font-extrabold mb-4 tracking-tight'>
							{APP_NAME}
						</h1>
						<p className='text-xl opacity-90'>
							Where Passion Meets Flavor, One Recipe at a Time
						</p>
					</div>

					<div className='p-12 space-y-10'>
						<section className='grid md:grid-cols-2 gap-8 items-center'>
							<div>
								<h2 className='text-3xl font-bold mb-4 text-amber-700 flex items-center'>
									<Utensils className='mr-3 text-amber-600' size={36} />
									Our Mission
								</h2>
								<p className='text-gray-700 leading-relaxed'>
									At Culinary Canvas, we believe cooking is an art form. Our
									mission is to inspire home cooks, connect food lovers, and
									make cooking accessible, enjoyable, and creative for everyone.
								</p>
							</div>
							<div className='flex justify-center'>
								<img
									src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
									alt='Cooking workspace'
									className='rounded-2xl shadow-lg'
								/>
							</div>
						</section>

						<div className='border-t border-amber-100 my-8'></div>

						<section>
							<h2 className='text-3xl font-bold mb-6 text-center text-amber-700'>
								Our Core Values
							</h2>
							<div className='grid md:grid-cols-2 gap-6'>
								<div className='bg-amber-50 p-6 rounded-2xl shadow-md flex items-start space-x-4'>
									<Heart className='text-red-500 mt-1' size={28} />
									<div>
										<h3 className='font-bold text-xl mb-2'>Passion</h3>
										<p className='text-gray-700'>
											We're driven by a deep love for food and the joy of
											cooking.
										</p>
									</div>
								</div>
								<div className='bg-amber-50 p-6 rounded-2xl shadow-md flex items-start space-x-4'>
									<Globe className='text-green-500 mt-1' size={28} />
									<div>
										<h3 className='font-bold text-xl mb-2'>Community</h3>
										<p className='text-gray-700'>
											Connecting food lovers from around the world, sharing
											cultures through cuisine.
										</p>
									</div>
								</div>
							</div>
						</section>

						<div className='border-t border-amber-100 my-8'></div>

						<section>
							<h2 className='text-3xl font-bold mb-6 text-center text-amber-700'>
								What Sets Us Apart
							</h2>
							<div className='grid md:grid-cols-3 gap-6'>
								{[
									{
										icon: <CheckCircle className='text-green-500' size={32} />,
										title: 'Curated Recipes',
										description:
											'Hand-picked, tested recipes from professional chefs and home cooks.',
									},
									{
										icon: <CheckCircle className='text-green-500' size={32} />,
										title: 'User-Friendly',
										description:
											'Intuitive interface that makes cooking fun and accessible.',
									},
									{
										icon: <CheckCircle className='text-green-500' size={32} />,
										title: 'Interactive',
										description:
											'Share, save, and customize recipes to suit your taste.',
									},
								].map((feature, index) => (
									<div
										key={index}
										className='text-center p-6 bg-white border border-amber-100 rounded-2xl shadow-md hover:shadow-lg transition-all'
									>
										<div className='flex justify-center mb-4'>
											{feature.icon}
										</div>
										<h3 className='font-bold text-xl mb-3 text-amber-800'>
											{feature.title}
										</h3>
										<p className='text-gray-700'>{feature.description}</p>
									</div>
								))}
							</div>
						</section>
					</div>

					<footer className='bg-amber-600 text-white p-6 text-center'>
						<p>&copy; 2024 {APP_NAME}. All rights reserved.</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
