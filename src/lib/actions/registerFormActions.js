import { REGISTER_FORM_ACTIONS } from '../constants/registerFormActions';

export const emailChangedRegisterForm = payload => ({
	type: REGISTER_FORM_ACTIONS.EMAIL_CHANGED,
	payload
});

export const emailErrorChangedRegisterForm = payload => ({
	type: REGISTER_FORM_ACTIONS.EMAIL_ERROR_CHANGED,
	payload
});

export const passwordChangedRegisterForm = payload => ({
	type: REGISTER_FORM_ACTIONS.PASSWORD_CHANGED,
	payload
});

export const passwordErrorChangedRegisterForm = payload => ({
	type: REGISTER_FORM_ACTIONS.PASSWORD_ERROR_CHANGED,
	payload
});

export const confirmPasswordChangedRegisterForm = payload => ({
	type: REGISTER_FORM_ACTIONS.CONFIRM_PASSWORD_CHANGED,
	payload
});

export const confirmPasswordErrorChangedRegisterForm = payload => ({
	type: REGISTER_FORM_ACTIONS.CONFIRM_PASSWORD_ERROR_CHANGED,
	payload
});
