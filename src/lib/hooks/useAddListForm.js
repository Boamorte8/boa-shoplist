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

	const { title, description } = formValues;

	const isFormInvalid =
		!title.value || !!title.error || !description.value || !!description.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchAddListForm
	};
};
