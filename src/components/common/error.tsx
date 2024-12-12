import React from 'react';

export const ErrorPage: React.FC<{ message?: string }> = ({ message }) => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-6xl font-bold'>Error</h1>
			<p className='text-xl'>{message}</p>
		</div>
	);
};
