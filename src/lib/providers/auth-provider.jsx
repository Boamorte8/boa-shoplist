import { createContext, useContext, useMemo, useState } from 'react';

import * as auth from '../api/auth-api';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
	const [user, setUser] = useState(null);

	const login = form =>
		auth.login(form).then(data => {
			setUser(data.data.user);
			return data;
		});

	const register = form => auth.register(form);

	const logout = () => {
		auth.logout();
		setUser(null);
	};

	const value = useMemo(
		() => ({ user, login, logout, register }),
		[login, logout, register, user]
	);

	return <AuthContext.Provider value={value} {...props} />;
}

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}
	return context;
};

export { AuthProvider, useAuth };
