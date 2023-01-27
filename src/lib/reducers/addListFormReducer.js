import { ADD_LIST_FORM_ACTIONS } from '../constants/addListFormActions';
import { validatRequired } from '../users/userValidations';

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
			const error = validatRequired(payload);
			return { ...state, title: { value: payload, error } };
		}
		case ADD_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validatRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		default:
			throw new Error('Invalid action type');
	}
};
