import { useReducer } from 'react';

import {
	getUpdateUnitFormInitialState,
	updateUnitFormReducer
} from '../reducers/updateUnitFormReducer';

export const useUpdateUnitForm = unit => {
	const [formValues, dispatchUpdateUnitForm] = useReducer(
		updateUnitFormReducer,
		unit,
		getUpdateUnitFormInitialState
	);

	const { name, description, display } = formValues;

	const isFormInvalid =
		areInitialValues(formValues, unit) ||
		!name.value ||
		!!name.error ||
		!description.value ||
		!!description.error ||
		!display.value ||
		!!display.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchUpdateUnitForm
	};
};

const areInitialValues = (formValues, { name, description, display }) =>
	formValues.name.value === name &&
	formValues.description.value === description &&
	formValues.display.value === display;
