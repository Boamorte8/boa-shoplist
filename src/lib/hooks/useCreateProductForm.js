import { useReducer } from 'react';

import {
	createProductFormReducer,
	CREATE_PRODUCT_INITIAL_STATE
} from '../reducers/createProductFormReducer';

export const useCreateProductForm = () => {
	const [formValues, dispatchCreateProductForm] = useReducer(
		createProductFormReducer,
		CREATE_PRODUCT_INITIAL_STATE
	);

	const { title, description, unit } = formValues;

	const isFormInvalid =
		!title.value ||
		!!title.error ||
		!description.value ||
		!!description.error ||
		!unit.value ||
		!!unit.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchCreateProductForm
	};
};
