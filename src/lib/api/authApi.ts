import { alertBox } from '../events/alertEvents';
import i18next from '../utils/i18n';
import { supabase } from './client';

const localStorageKey = '__auth_provider_token__';

async function getToken() {
	return window.localStorage.getItem(localStorageKey);
}

type LoginProps = {
	email: string;
	password: string;
};

async function login({ email, password }: LoginProps) {
	try {
		return supabase.auth.signInWithPassword({ email, password }).then(data => {
			if (!data.error) {
				window.localStorage.setItem(
					localStorageKey,
					data.data.session?.access_token || ''
				);
			}
			return data;
		});
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function register({ email, password, ...metadata }: LoginProps) {
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
	try {
		return supabase.auth.signOut().then(data => {
			if (!data.error) {
				window.localStorage.removeItem(localStorageKey);
			}
			return data;
		});
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getToken, login, register, logout };
