import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DetailSkeleton() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<Card>
				<CardHeader>
					<Skeleton className='h-8 w-3/4 mb-2' />
					<Skeleton className='h-4 w-1/2' />
				</CardHeader>
				<CardContent>
					<Skeleton className='h-64 w-full mb-6' />
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
						<div>
							<Skeleton className='h-6 w-1/2 mb-4' />
							<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
								{Array.from({ length: 6 }).map((_, index) => (
									<div key={index} className='flex flex-col items-center'>
										<Skeleton className='h-20 w-20 rounded-full' />
										<Skeleton className='h-4 w-16 mt-2' />
									</div>
								))}
							</div>
						</div>
						<div>
							<Skeleton className='h-6 w-1/2 mb-4' />
							{Array.from({ length: 5 }).map((_, index) => (
								<Skeleton key={index} className='h-4 w-full mb-2' />
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
