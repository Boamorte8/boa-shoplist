import { Route, Routes } from 'react-router-dom';

import AppHeader from './components/molecules/AppHeader';
import ListPage from './components/pages/ListPage';
import ListsPage from './components/pages/ListsPage';
import LoginPage from './components/pages/auth/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ProtectedRoute from './components/atoms/ProtectedRoute';
import PublicRoute from './components/atoms/PublicRoute';
import RegisterPage from './components/pages/auth/RegisterPage';

const App = () => (
	<>
		<AppHeader />
		<Routes>
			<Route
				path='/login'
				element={
					<PublicRoute isAuthenticated={false}>
						<LoginPage />
					</PublicRoute>
				}
			/>
			<Route
				path='/register'
				element={
					<PublicRoute isAuthenticated={false}>
						<RegisterPage />
					</PublicRoute>
				}
			/>
			<Route
				exact
				path='/list'
				element={
					<ProtectedRoute isAuthenticated={false}>
						<ListsPage />
					</ProtectedRoute>
				}
			/>
			<Route
				exact
				path='/list/:listId'
				element={
					<ProtectedRoute isAuthenticated={false}>
						<ListPage />
					</ProtectedRoute>
				}
			/>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	</>
);

export default App;
