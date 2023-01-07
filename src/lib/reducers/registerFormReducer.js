import { REGISTER_FORM_ACTIONS } from '../constants/registerFormActions';
import {
	validateConfirmationPassword,
	validateEmail,
	validatePassword
} from '../users/userValidations';

export const REGISTER_FORM_INITIAL_STATE = {
	email: {
		value: '',
		error: undefined
	},
	password: {
		value: '',
		error: undefined
	},
	confirmPassword: {
		value: '',
		error: undefined
	}
};

export const registerFormReducer = (state, { type, payload }) => {
	switch (type) {
		case REGISTER_FORM_ACTIONS.EMAIL_CHANGED: {
			const error = validateEmail(payload);
			return { ...state, email: { value: payload, error } };
		}
		case REGISTER_FORM_ACTIONS.EMAIL_ERROR_CHANGED:
			return {
				...state,
				email: {
					value: state.email.value,
					error: payload
				}
			};
		case REGISTER_FORM_ACTIONS.PASSWORD_CHANGED: {
			const error = validatePassword(payload);
			return { ...state, password: { value: payload, error } };
		}
		case REGISTER_FORM_ACTIONS.PASSWORD_ERROR_CHANGED:
			return {
				...state,
				password: {
					value: state.password.value,
					error: payload
				}
			};
		case REGISTER_FORM_ACTIONS.CONFIRM_PASSWORD_CHANGED: {
			const password = state.password.value;
			const error = validateConfirmationPassword(payload, password);
			return { ...state, confirmPassword: { value: payload, error } };
		}
		case REGISTER_FORM_ACTIONS.CONFIRM_PASSWORD_ERROR_CHANGED:
			return {
				...state,
				confirmPassword: {
					value: state.confirmPassword.value,
					error: payload
				}
			};
		default:
			throw new Error('Invalid action type');
	}
};
