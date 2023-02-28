import { useReducer } from 'react';

import {
	createListFormReducer,
	CREATE_LIST_FORM_INITIAL_STATE
} from '../reducers/createListFormReducer';

export const useCreateListForm = () => {
	const [formValues, dispatchCreateListForm] = useReducer(
		createListFormReducer,
		CREATE_LIST_FORM_INITIAL_STATE
	);

	const { title, description } = formValues;

	const isFormInvalid =
		!title.value || !!title.error || !description.value || !!description.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchCreateListForm
	};
};
