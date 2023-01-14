import { useReducer } from 'react';

import {
	loginFormReducer,
	LOGIN_FORM_INITIAL_STATE
} from '../reducers/loginFormReducer';

export const useLoginForm = () => {
	const [formValues, dispatchLoginForm] = useReducer(
		loginFormReducer,
		LOGIN_FORM_INITIAL_STATE
	);

	const { email, password } = formValues;

	const isFormInvalid =
		!email.value || !!email.error || !password.value || !!password.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchLoginForm
	};
};
