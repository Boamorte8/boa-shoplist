import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { LoadingPage } from '@pages/LoadingPage';
import { AuthRoutesProps } from '@lib/types/client';

export const ProtectedRoute = ({
	isAuthenticated,
	children
}: AuthRoutesProps) => {
	if (!isAuthenticated) {
		return <Navigate to='/login' />;
	}
	return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};
