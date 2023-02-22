import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { App } from './App';
import { FirstRoute } from './components/atoms/FirstRoute';
import { LoadingPage } from './components/pages/LoadingPage';
import { LoginPage } from './components/pages/auth/LoginPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { ProtectedRoute } from './components/atoms/ProtectedRoute';
import { PublicRoute } from './components/atoms/PublicRoute';
import { useAuth } from './lib/providers/AuthProvider';
const LazyListPage = lazy(() => import('./components/pages/ListPage'));
const LazyListsPage = lazy(() => import('./components/pages/ListsPage'));
const LazyProductsPage = lazy(() => import('./components/pages/ProductsPage'));
const LazyRegisterPage = lazy(() =>
	import('./components/pages/auth/RegisterPage')
);
const LazyUnitsPage = lazy(() => import('./components/pages/UnitsPage'));

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
								<Suspense fallback={<LoadingPage />}>
									<LazyRegisterPage />
								</Suspense>
							</PublicRoute>
						}
					/>
					<Route
						exact
						path='list'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyListsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path='list/:listId'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyListPage />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path='products'
						element={
							<ProtectedRoute isAuthenticated={isAuth}>
								<LazyProductsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
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
