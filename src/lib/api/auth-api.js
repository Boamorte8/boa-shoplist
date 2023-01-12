import { alertBox } from '../events/alertEvents';
import useSupabase from '../hooks/useSupabase';
import i18next from '../utils/i18n';

const { supabase } = useSupabase();

const localStorageKey = '__auth_provider_token__';

async function getToken() {
	return window.localStorage.getItem(localStorageKey);
}

function login({ username, password }) {
	// window.localStorage.setItem(localStorageKey, user.token);
	// return client('login', { username, password }).then(handleUserResponse);
}

async function register({ email, password, ...metadata }) {
	try {
		return supabase.auth.signUp({
			email,
			password,
			options: {
				data: metadata,
				emailRedirectTo: `${window.location.origin}/login?source=email`
			}
		});
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function logout() {
	window.localStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey };
