import { UPDATE_UNIT_FORM_ACTIONS } from '../constants/updateUnitFormActions';
import { validateRequired } from '../users/userValidations';

export const getUpdateUnitFormInitialState = ({
	name,
	description,
	display
}) => ({
	name: {
		value: name,
		error: undefined
	},
	description: {
		value: description,
		error: undefined
	},
	display: {
		value: display,
		error: undefined
	}
});

export const updateUnitFormReducer = (state, { type, payload }) => {
	switch (type) {
		case UPDATE_UNIT_FORM_ACTIONS.NAME_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, name: { value: payload, error } };
		}
		case UPDATE_UNIT_FORM_ACTIONS.DESCRIPTION_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, description: { value: payload, error } };
		}
		case UPDATE_UNIT_FORM_ACTIONS.DISPLAY_CHANGED: {
			const error = validateRequired(payload);
			return { ...state, display: { value: payload, error } };
		}
		case UPDATE_UNIT_FORM_ACTIONS.RESET_FORM: {
			return getUpdateUnitFormInitialState(payload);
		}
		default:
			throw new Error('Invalid action type');
	}
};
