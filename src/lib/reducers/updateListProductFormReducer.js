import { UPDATE_LIST_PRODUCT_FORM_ACTIONS } from '@lib/constants/updateListProductFormActions';
import { validateRequired } from '../users/userValidations';

export const getUpdateListProductFormInitialState = ({
	product,
	quantity
}) => ({
	product: {
		value: product,
		error: undefined
	},
	quantity: {
		value: quantity,
		error: undefined
	}
});

export const updateListProductFormReducer = (state, { type, payload }) => {
	switch (type) {
		case UPDATE_LIST_PRODUCT_FORM_ACTIONS.PRODUCT_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, product: { value: payload, error } };
		}
		case UPDATE_LIST_PRODUCT_FORM_ACTIONS.QUANTITY_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, quantity: { value: payload, error } };
		}
		case UPDATE_LIST_PRODUCT_FORM_ACTIONS.RESET_FORM: {
			return getUpdateListProductFormInitialState(payload);
		}
		default:
			throw new Error('Invalid action type');
	}
};
