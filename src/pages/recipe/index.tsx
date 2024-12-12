import { Route, Routes } from 'react-router-dom';
import RecipeDetailPage from './recipe.$id';
import RecipeLayout from './layout';

export default function AdminCustomerRoute() {
	return (
		<Routes>
			<Route path='/' element={<RecipeLayout />}>
				<Route path='/:id' element={<RecipeDetailPage />} />
			</Route>
		</Routes>
	);
}
