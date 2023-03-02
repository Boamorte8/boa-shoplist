import { Navigate } from 'react-router-dom';

import { AuthRoutesProps } from '@lib/types/client';

export const PublicRoute = ({ isAuthenticated, children }: AuthRoutesProps) => {
	if (isAuthenticated) {
		return <Navigate to='/list' />;
	}
	return children;
};
