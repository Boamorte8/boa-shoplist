import { ADD_LIST_FORM_ACTIONS } from '../constants/addListFormActions';
import { validateRequired } from '../users/userValidations';

export const ADD_LIST_FORM_INITIAL_STATE = {
	title: {
		value: '',
		error: undefined
	},
	description: {
		value: '',
		error: undefined
	}
};

export const addListFormReducer = (state, { type, payload }) => {
	switch (type) {
		case ADD_LIST_FORM_ACTIONS.TITLE_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, title: { value: payload, error } };
		}
		case ADD_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case ADD_LIST_FORM_ACTIONS.RESET_FORM: {
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
