import { CREATE_UNIT_FORM_ACTIONS } from '../constants/createUnitFormActions';
import { validateRequired } from '../users/userValidations';

export const CREATE_UNIT_INITIAL_STATE = {
	name: {
		value: '',
		error: undefined
	},
	description: {
		value: '',
		error: undefined
	},
	display: {
		value: '',
		error: undefined
	}
};

export const createUnitFormReducer = (state, { type, payload }) => {
	switch (type) {
		case CREATE_UNIT_FORM_ACTIONS.NAME_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, name: { value: payload, error } };
		}
		case CREATE_UNIT_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case CREATE_UNIT_FORM_ACTIONS.DISPLAY_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, display: { value: payload, error } };
		}
		case CREATE_UNIT_FORM_ACTIONS.RESET_FORM: {
			return {
				...state,
				name: { value: '', error: undefined },
				description: { value: '', error: undefined },
				display: { value: '', error: undefined }
			};
		}
		default:
			throw new Error('Invalid action type');
	}
};
