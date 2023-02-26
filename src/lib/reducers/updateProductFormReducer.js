import { UPDATE_PRODUCT_FORM_ACTIONS } from '../constants/updateProductFormActions';
import { validateRequired } from '../users/userValidations';

export const getUpdateProductFormInitialState = ({
	title,
	description,
	units
}) => ({
	title: {
		value: title,
		error: undefined
	},
	description: {
		value: description,
		error: undefined
	},
	unit: {
		value: units,
		error: undefined
	}
});

export const updateProductFormReducer = (state, { type, payload }) => {
	switch (type) {
		case UPDATE_PRODUCT_FORM_ACTIONS.TITLE_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, title: { value: payload, error } };
		}
		case UPDATE_PRODUCT_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case UPDATE_PRODUCT_FORM_ACTIONS.UNIT_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, unit: { value: payload, error } };
		}
		case UPDATE_PRODUCT_FORM_ACTIONS.RESET_FORM: {
			return getUpdateProductFormInitialState(payload);
		}
		default:
			throw new Error('Invalid action type');
	}
};
