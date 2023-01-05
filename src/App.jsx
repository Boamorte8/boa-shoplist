import { Route, Routes } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import AppHeader from './components/molecules/AppHeader';
import ProtectedRoute from './components/atoms/ProtectedRoute';
import ListsPage from './components/pages/ListsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ListPage from './components/pages/ListPage';

const App = () => (
	<>
		<AppHeader />
		<Routes>
			<Route path='/login' element={<LoginPage />} />
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
