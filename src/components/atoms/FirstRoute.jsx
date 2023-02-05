import { Navigate } from 'react-router-dom';

const FirstRoute = ({ isAuthenticated, children }) => {
	if (isAuthenticated) {
		return <Navigate to='/list' />;
	}
	return <Navigate to='/login' />;
};

export default FirstRoute;
