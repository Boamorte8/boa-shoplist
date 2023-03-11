import { useReducer } from 'react';

import {
	getUpdateFormInitialState,
	updateListFormReducer
} from '../reducers/updateListFormReducer';

export const useUpdateListForm = list => {
	const [formValues, dispatchUpdateListForm] = useReducer(
		updateListFormReducer,
		list,
		getUpdateFormInitialState
	);

	const { title, description } = formValues;

	const isFormInvalid =
		areInitialValues(formValues, list) ||
		!title.value ||
		!!title.error ||
		!description.value ||
		!!description.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchUpdateListForm
	};
};

const areInitialValues = (formValues, { title, description }) =>
	formValues.title.value === title &&
	formValues.description.value === description;
