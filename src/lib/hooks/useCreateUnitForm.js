import { useReducer } from 'react';

import {
	createUnitFormReducer,
	CREATE_UNIT_INITIAL_STATE
} from '../reducers/createUnitFormReducer';

export const useCreateUnitForm = () => {
	const [formValues, dispatchCreateUnitForm] = useReducer(
		createUnitFormReducer,
		CREATE_UNIT_INITIAL_STATE
	);

	const { name, description, display } = formValues;

	const isFormInvalid =
		!name.value ||
		!!name.error ||
		!description.value ||
		!!description.error ||
		!display.value ||
		!!display.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchCreateUnitForm
	};
};
