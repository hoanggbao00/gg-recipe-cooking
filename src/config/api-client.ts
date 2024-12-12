import axios from 'axios';
import { API_URL } from './app-settings';

const apiClient = axios.create({
	baseURL: API_URL,
	timeout: 10000,
});

apiClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token.split('|')[0]}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	(response) => {
		if (response.status === 401) {
			localStorage.removeItem('token');
			if (window.location.pathname !== '/login')
				window.location.href = '/login';
		}
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default apiClient;
