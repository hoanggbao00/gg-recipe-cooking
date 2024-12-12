import { getCuisines } from '@/api/cuisines';
// import createBaseServices from '@/services/create-services';
import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = 'cuisines';
// const API_PATH = '/cuisines';

// export const useCuisinesServices = () =>
// 	createBaseServices<string>(QUERY_KEY, API_PATH);

export const useCuisinesServices = () => {
	return {
		getList: (params?: { [key: string]: any }) =>
			useQuery({
				queryKey: [QUERY_KEY, params],
				queryFn: async () => {
					const res = await getCuisines();
					return res;
				},
			}),
	};
};
