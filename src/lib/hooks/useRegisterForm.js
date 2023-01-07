import { useReducer } from 'react';

import {
	registerFormReducer,
	REGISTER_FORM_INITIAL_STATE
} from '../reducers/registerFormReducer';

export const useRegisterForm = () => {
	const [formValues, dispatchRegisterForm] = useReducer(
		registerFormReducer,
		REGISTER_FORM_INITIAL_STATE
	);

	const { email, password, confirmPassword } = formValues;

	const isFormInvalid =
		!email.value ||
		!!email.error ||
		!password.value ||
		!!password.error ||
		!confirmPassword.value ||
		!!confirmPassword.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchRegisterForm
	};
};
