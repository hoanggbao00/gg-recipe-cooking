import { Loader2 } from 'lucide-react';
import { lazy, Suspense } from 'react';

const loadable = (importFunc: any) => {
	const LazyComponent = lazy(importFunc);
	return (props: any) => (
		<Suspense
			fallback={
				<div className='fixed inset-0 bg-black/20 grid place-items-center'>
					<Loader2 size={128} className='animate-spin text-primary' />
				</div>
			}
		>
			<LazyComponent {...props} />
		</Suspense>
	);
};
export { loadable };
