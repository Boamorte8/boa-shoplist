import { ADD_LIST_FORM_ACTIONS } from '../constants/addListFormActions';
import { validateRequired } from '../users/userValidations';

export const ADD_LIST_FORM_INITIAL_STATE = {
	product: {
		value: null,
		error: undefined
	},
	quantity: {
		value: 1,
		error: undefined
	}
};

export const addListFormReducer = (state, { type, payload }) => {
	switch (type) {
		case ADD_LIST_FORM_ACTIONS.PRODUCT_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, product: { value: payload, error } };
		}
		case ADD_LIST_FORM_ACTIONS.QUANTITY_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, quantity: { value: payload, error } };
		}
		case ADD_LIST_FORM_ACTIONS.RESET_FORM: {
			return {
				...state,
				product: { value: null, error: undefined },
				quantity: { value: 1, error: undefined }
			};
		}
		default:
			throw new Error('Invalid action type');
	}
};
