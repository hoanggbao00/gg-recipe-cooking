/* eslint-disable react-hooks/rules-of-hooks */
import apiClient from '@/config/api-client';
import {
	useInfiniteQuery,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';

//* Method: GET, POST, PUT, DELETE
type Paginated<T> = {
	data?: T[];
	totalPages: number;
	currentPage: number;
};

/**
 * Tạo CRUD Service với React Query sử dụng Axios Custom từ utils/token.ts
 * @param queryKey Query key để lưu cache (cũng như global state cho data)
 * @param apiPath Endpoint của API, bắt đầu bằng /{apiPath}. VD: /api/lop-hoc
 * @returns CRUD Services
 */
export default function createBaseServices<T>(
	queryKey: string,
	apiPath: string
) {
	const queryClient = useQueryClient();

	const services = {
		/**
		 * Get List Data from API with token included (if has)
		 * @description Get list data
		 * @param params Object truyền tham số theo backend để pagination {page: 1, pageSize: 20, ...}
		 * @returns data, isLoading, error, refetch,....
		 */
		getList: (params?: { [key: string]: any }) =>
			useQuery({
				queryKey: [queryKey, params],
				queryFn: async () => {
					const searchParams = new URLSearchParams(params).toString();
					const res = await apiClient.get<T[]>(`${apiPath}?${searchParams}`);
					return res.data;
				},
			}),
		getPaginatedList: (params: { pageSize: any } & { [key: string]: any }) =>
			useInfiniteQuery({
				queryKey: [queryKey, params],
				queryFn: async ({ pageParam }) => {
					const _p = {
						...params,
						page: pageParam,
					};
					const searchParams = new URLSearchParams(_p).toString();
					const res = await apiClient.get<Paginated<T>>(
						`${apiPath}?${searchParams}`
					);
					return res.data;
				},
				initialPageParam: params.page || 1,
				getNextPageParam: (lastPage) =>
					lastPage.currentPage < lastPage.totalPages
						? lastPage.currentPage + 1
						: undefined,
			}),
		// Get Detail by Id
		getDetail: (id: number | string) =>
			useQuery({
				queryKey: [queryKey, { id }],
				queryFn: async () => {
					const res = await apiClient.get<T>(`${apiPath}/${id}`);
					return res.data;
				},
			}),
		// Thêm mới
		addData: async (data: Partial<T>) => {
			const res = await apiClient.post<T>(apiPath, data);
			if (res.data) {
				queryClient.invalidateQueries({ queryKey: [queryKey] });
			}
			return res.data;
		},
		// Cập nhật
		updateData: async (id: string | number, data: Partial<T>) => {
			const res = await apiClient.put<T>(`${apiPath}/${id}`, data);
			// const res = await apiClient.patch<T>(`${apiPath}/${id}`, data);
			if (res.data) {
				queryClient.invalidateQueries({ queryKey: [queryKey] });
			}
			return res.data;
		},
		// Xóa
		deleteData: async (id: string | number) => {
			const res = await apiClient.delete<T>(`${apiPath}/${id}`);
			if (res.data) {
				queryClient.invalidateQueries({ queryKey: [queryKey] });
			}
			return res.data;
		},
	};

	return {
		...services,
	};
}
