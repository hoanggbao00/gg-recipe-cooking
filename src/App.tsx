import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './routes';
import Homepage from './pages/homepage';
import NotFound from './components/common/not-found';
import AboutPage from './pages/about';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route index path='/' element={<Homepage />} />
				{APP_ROUTES.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						Component={route.component}
					/>
				))}
				<Route path="/about" element={<AboutPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
