import { CREATE_PRODUCT_FORM_ACTIONS } from '../constants/createProductFormActions';
import { validateRequired } from '../users/userValidations';

export const CREATE_PRODUCT_INITIAL_STATE = {
	title: {
		value: '',
		error: undefined
	},
	description: {
		value: '',
		error: undefined
	},
	unit: {
		value: '',
		error: undefined
	}
};

export const createProductFormReducer = (state, { type, payload }) => {
	switch (type) {
		case CREATE_PRODUCT_FORM_ACTIONS.TITLE_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, title: { value: payload, error } };
		}
		case CREATE_PRODUCT_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case CREATE_PRODUCT_FORM_ACTIONS.UNIT_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, unit: { value: payload, error } };
		}
		case CREATE_PRODUCT_FORM_ACTIONS.RESET_FORM: {
			return {
				...state,
				title: { value: '', error: undefined },
				description: { value: '', error: undefined },
				unit: { value: '', error: undefined }
			};
		}
		default:
			throw new Error('Invalid action type');
	}
};
