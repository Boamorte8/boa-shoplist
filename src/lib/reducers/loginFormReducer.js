import { LOGIN_FORM_ACTIONS } from '../constants/loginFormActions';
import { validateEmail, validatePassword } from '../users/userValidations';

export const LOGIN_FORM_INITIAL_STATE = {
	email: {
		value: '',
		error: undefined
	},
	password: {
		value: '',
		error: undefined
	}
};

export const loginFormReducer = (state, { type, payload }) => {
	switch (type) {
		case LOGIN_FORM_ACTIONS.EMAIL_CHANGED: {
			const error = validateEmail(payload);
			return { ...state, email: { value: payload, error } };
		}
		case LOGIN_FORM_ACTIONS.PASSWORD_CHANGED: {
			const error = validatePassword(payload);
			return { ...state, password: { value: payload, error } };
		}
		default:
			throw new Error('Invalid action type');
	}
};
