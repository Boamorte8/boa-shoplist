import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react';
import { User } from '@supabase/supabase-js';

import { alertBox } from '../events/alertEvents';
import {
	AuthContextProps,
	AuthFormProps,
	AuthProviderProps
} from '@lib/types/auth';
import i18next from '../utils/i18n';
import * as auth from '../api/authApi';

const AuthContext = createContext<AuthContextProps | null>(null);
AuthContext.displayName = 'AuthContext';

function AuthProvider(props: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);
	const [openConfirmLogout, setOpenConfirmLogout] = useState(false);

	const login = useCallback(
		(form: AuthFormProps) =>
			auth.login(form).then(data => {
				setUser(data?.data.user || null);
				return data;
			}),
		[]
	);

	const register = useCallback(
		(form: AuthFormProps) => auth.register(form),
		[]
	);

	const logout = useCallback(() => {
		auth.logout().then(response => {
			if (!response?.error) {
				alertBox.success(i18next.t('auth.logoutSuccess'));
			} else {
				alertBox.error(i18next.t('auth.errors.logout'));
			}
			setUser(null);
		});
	}, []);

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
			register,
			openConfirmLogout,
			setOpenConfirmLogout
		}),
		[login, logout, register, user, openConfirmLogout, setOpenConfirmLogout]
	);

	return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}
	return context;
}

export { AuthProvider, useAuth };
