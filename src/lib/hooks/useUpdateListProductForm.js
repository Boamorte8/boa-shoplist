import { useReducer } from 'react';

import {
	getUpdateListProductFormInitialState,
	updateListProductFormReducer
} from '@lib/reducers/updateListProductFormReducer';

export const useUpdateListProductForm = listProduct => {
	const [formValues, dispatchUpdateListProductForm] = useReducer(
		updateListProductFormReducer,
		listProduct,
		getUpdateListProductFormInitialState
	);

	const { product, quantity } = formValues;

	const isFormInvalid =
		areInitialValues(formValues, listProduct) ||
		!product.value ||
		!!product.error ||
		!quantity.value ||
		!!quantity.error;

	return {
		...formValues,
		isFormInvalid,
		dispatchUpdateListProductForm
	};
};

const areInitialValues = (formValues, { product, quantity }) =>
	formValues.product.value.id === product.id &&
	formValues.quantity.value === quantity;
