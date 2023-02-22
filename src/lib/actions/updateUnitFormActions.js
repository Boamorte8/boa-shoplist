import { UPDATE_UNIT_FORM_ACTIONS } from '../constants/updateUnitFormActions';

export const nameChangedUpdateUnitForm = payload => ({
	type: UPDATE_UNIT_FORM_ACTIONS.NAME_CHANGED,
	payload
});

export const descriptionChangedUpdateUnitForm = payload => ({
	type: UPDATE_UNIT_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const displayChangedUpdateUnitForm = payload => ({
	type: UPDATE_UNIT_FORM_ACTIONS.DISPLAY_CHANGED,
	payload
});

export const resetUpdateUnitForm = payload => ({
	type: UPDATE_UNIT_FORM_ACTIONS.RESET_FORM,
	payload
});
