import { Navigate } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, children }) => {
	if (isAuthenticated) {
		return <Navigate to='/lists' />;
	}
	return children;
};

export default PublicRoute;
