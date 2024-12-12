import { getRecipes } from '@/api/recipes';
import { getDetailRecipe } from '@/api/recipes/[id]';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const QUERY_KEY = 'recipes';
// const API_PATH = '/recipes';

// export const useRecipeServices = () =>
// 	createBaseServices<IRecipe>(QUERY_KEY, API_PATH);

export const useRecipeServices = () => {
	return {
		getPaginatedList: (params: { pageSize: number } & { [key: string]: any }) =>
			useInfiniteQuery({
				queryKey: [QUERY_KEY, params],
				queryFn: async ({ pageParam }) => {
					const res = await getRecipes({ ...params, page: pageParam });
					return res;
				},
				initialPageParam: 1,
				getNextPageParam: (lastPage) =>
					lastPage.currentPage < lastPage.totalPages
						? lastPage.currentPage + 1
						: undefined,
			}),
		// Get Detail by Id
		getDetail: (id: number | string) =>
			useQuery({
				queryKey: [QUERY_KEY, { id }],
				queryFn: async () => {
					const res = await getDetailRecipe(id.toString());
					return res;
				},
			}),
	};
};
