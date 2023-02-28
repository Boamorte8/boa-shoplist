import { CREATE_LIST_FORM_ACTIONS } from '../constants/createListFormActions';
import { validateRequired } from '../users/userValidations';

export const CREATE_LIST_FORM_INITIAL_STATE = {
	title: {
		value: '',
		error: undefined
	},
	description: {
		value: '',
		error: undefined
	}
};

export const createListFormReducer = (state, { type, payload }) => {
	switch (type) {
		case CREATE_LIST_FORM_ACTIONS.TITLE_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, title: { value: payload, error } };
		}
		case CREATE_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case CREATE_LIST_FORM_ACTIONS.RESET_FORM: {
			return {
				...state,
				title: { value: '', error: undefined },
				description: { value: '', error: undefined }
			};
		}
		default:
			throw new Error('Invalid action type');
	}
};
