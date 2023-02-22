import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { LoadingPage } from '../pages/LoadingPage';

export const ProtectedRoute = ({ isAuthenticated, children }) => {
	if (!isAuthenticated) {
		return <Navigate to='/login' />;
	}
	return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};
