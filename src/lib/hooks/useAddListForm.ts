import { useReducer } from 'react';

import {
	addListFormReducer,
	ADD_LIST_FORM_INITIAL_STATE
} from '../reducers/addListFormReducer';

export const useAddListForm = () => {
	const [formValues, dispatchAddListForm] = useReducer(
		addListFormReducer,
		ADD_LIST_FORM_INITIAL_STATE
	);

	const { product, quantity } = formValues;

	const isFormInvalid =
		!product.value || !!product.error || !quantity.value || !!quantity.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchAddListForm
	};
};
