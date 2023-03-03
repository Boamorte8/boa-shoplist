import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { App } from './App';
import { FirstRoute } from '@atoms/routes/FirstRoute';
import { LoadingPage } from '@pages/LoadingPage';
import { LoginPage } from '@pages/auth/LoginPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProtectedRoute } from '@atoms/routes/ProtectedRoute';
import { PublicRoute } from '@atoms/routes/PublicRoute';
import { useAuth } from '@lib/providers/AuthProvider';
const LazyListPage = lazy(() => import('@pages/ListPage'));
const LazyListsPage = lazy(() => import('@pages/ListsPage'));
const LazyProductsPage = lazy(() => import('@pages/ProductsPage'));
const LazyRegisterPage = lazy(() => import('@pages/auth/RegisterPage'));
const LazyUnitsPage = lazy(() => import('@pages/UnitsPage'));

export const RouterRoot = () => {
	const { user } = useAuth();
	const isAuth = !!user;

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<App />}>
					<Route path='' element={<FirstRoute />} />
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
								<Suspense fallback={<LoadingPage />}>
									<LazyRegisterPage />
								</Suspense>
							</PublicRoute>
						}
					/>
					<Route
						path='list'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyListsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='list/:listId'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyListPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='products'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyProductsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='units'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyUnitsPage />
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
