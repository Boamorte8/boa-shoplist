import { useReducer } from 'react';

import {
	updateProductFormReducer,
	getUpdateProductFormInitialState
} from '../reducers/updateProductFormReducer';

export const useUpdateProductForm = product => {
	const [formValues, dispatchUpdateProductForm] = useReducer(
		updateProductFormReducer,
		product,
		getUpdateProductFormInitialState
	);

	const { title, description, unit } = formValues;

	const isFormInvalid =
		areInitialValues(formValues, product) ||
		!title.value ||
		!!title.error ||
		!description.value ||
		!!description.error ||
		!unit.value ||
		!!unit.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchUpdateProductForm
	};
};

const areInitialValues = (formValues, { title, description, unit }) =>
	formValues.title.value === title &&
	formValues.description.value === description &&
	formValues.unit.value.id === unit.id;
