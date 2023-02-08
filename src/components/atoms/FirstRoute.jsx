import { Navigate } from 'react-router-dom';

import { useAuth } from '../../lib/providers/AuthProvider';

export const FirstRoute = () => {
	const { user } = useAuth();
	if (user) {
		return <Navigate to='list' />;
	}
	return <Navigate to='login' />;
};
