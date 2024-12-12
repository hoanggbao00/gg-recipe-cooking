import { Route, Routes } from 'react-router-dom';
import RecipeDetailPage from './recipe.$id';
import RecipeList from './recipe.list';

export default function AdminCustomerRoute() {
	return (
		<Routes>
			<Route index path='/' element={<RecipeList />} />
			<Route path='/:id' element={<RecipeDetailPage />} />
		</Routes>
	);
}
