import { UPDATE_LIST_FORM_ACTIONS } from '../constants/updateListFormActions';
import { validateRequired } from '../users/userValidations';

export const getUpdateFormInitialState = ({ title, description }) => ({
	title: {
		value: title,
		error: undefined
	},
	description: {
		value: description,
		error: undefined
	}
});

export const updateListFormReducer = (state, { type, payload }) => {
	switch (type) {
		case UPDATE_LIST_FORM_ACTIONS.TITLE_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, title: { value: payload, error } };
		}
		case UPDATE_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case UPDATE_LIST_FORM_ACTIONS.RESET_FORM: {
			return getUpdateFormInitialState(payload);
		}
		default:
			throw new Error('Invalid action type');
	}
};
