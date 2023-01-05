import { createContext, useCallback, useMemo } from 'react';
// import { queryCache } from 'react-query';
import * as auth from '../utils/auth-provider';
import { useAsync } from '../hooks/useAsync';
import ErrorPage from '../../components/pages/ErrorPage';
import FullSpinner from '../../components/pages/FullSpinner';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
	const {
		data: user,
		status,
		error,
		isLoading,
		isIdle,
		isError,
		isSuccess,
		setData
	} = useAsync();

	const login = useCallback(
		form => auth.login(form).then(user => setData(user)),
		[setData]
	);
	const register = useCallback(
		form => auth.register(form).then(user => setData(user)),
		[setData]
	);
	const logout = useCallback(() => {
		auth.logout();
		// queryCache.clear();
		setData(null);
	}, [setData]);

	const value = useMemo(
		() => ({ user, login, logout, register }),
		[login, logout, register, user]
	);

	if (isLoading) {
		return <FullSpinner />;
	}

	if (isError) {
		return <ErrorPage error={error} />;
	}

	if (isSuccess || isIdle) {
		return <AuthContext.Provider value={value} {...props} />;
	}

	throw new Error(`Unhandled status: ${status}`);
}

export { AuthProvider, AuthContext };
