import { LOGIN_FORM_ACTIONS } from '../constants/loginFormActions';

export const emailChangedLoginForm = payload => ({
	type: LOGIN_FORM_ACTIONS.EMAIL_CHANGED,
	payload
});

export const passwordChangedLoginForm = payload => ({
	type: LOGIN_FORM_ACTIONS.PASSWORD_CHANGED,
	payload
});
