import { Route, Routes } from 'react-router-dom';

import AlertBox from './components/atoms/alerts/AlertBox';
import AppFooter from './components/molecules/AppFooter';
import AppHeader from './components/molecules/AppHeader';
import FirstRoute from './components/atoms/FirstRoute';
import ListPage from './components/pages/ListPage';
import ListsPage from './components/pages/ListsPage';
import LoginPage from './components/pages/auth/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ProtectedRoute from './components/atoms/ProtectedRoute';
import PublicRoute from './components/atoms/PublicRoute';
import RegisterPage from './components/pages/auth/RegisterPage';
import { useAuth } from './lib/providers/AuthProvider';

const App = () => {
	const { user } = useAuth();
	const isAuth = !!user;
	return (
		<>
			<AppHeader />
			<AlertBox />
			<Routes>
				<Route path='/' element={<FirstRoute isAuthenticated={isAuth} />} />
				<Route
					path='/login'
					element={
						<PublicRoute isAuthenticated={isAuth}>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path='/register'
					element={
						<PublicRoute isAuthenticated={isAuth}>
							<RegisterPage />
						</PublicRoute>
					}
				/>
				<Route
					exact
					path='/list'
					element={
						<ProtectedRoute isAuthenticated={isAuth}>
							<ListsPage />
						</ProtectedRoute>
					}
				/>
				<Route
					exact
					path='/list/:listId'
					element={
						<ProtectedRoute isAuthenticated={isAuth}>
							<ListPage />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<AppFooter />
		</>
	);
};

export default App;
