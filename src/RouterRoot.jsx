import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';

import { App } from './App';
import { FirstRoute } from './components/atoms/FirstRoute';
import { ListPage } from './components/pages/ListPage';
import { ListsPage } from './components/pages/ListsPage';
import { LoginPage } from './components/pages/auth/LoginPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProtectedRoute } from './components/atoms/ProtectedRoute';
import { PublicRoute } from './components/atoms/PublicRoute';
import { RegisterPage } from './components/pages/auth/RegisterPage';
import { useAuth } from './lib/providers/AuthProvider';

export const RouterRoot = () => {
	const { user } = useAuth();
	const isAuth = !!user;

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<App />}>
					<Route path='' element={<FirstRoute isAuthenticated={isAuth} />} />
					<Route
						path='login'
						element={
							<PublicRoute isAuthenticated={isAuth}>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path='register'
						element={
							<PublicRoute isAuthenticated={isAuth}>
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						exact
						path='list'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<ListsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path='list/:listId'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<ListPage />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path='products'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<ProductsPage />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</>
		)
	);
	return <RouterProvider router={router} />;
};
