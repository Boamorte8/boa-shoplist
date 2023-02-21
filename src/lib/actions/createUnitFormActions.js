import { CREATE_UNIT_FORM_ACTIONS } from '../constants/createUnitFormActions';

export const nameChangedCreateUnitForm = payload => ({
	type: CREATE_UNIT_FORM_ACTIONS.NAME_CHANGED,
	payload
});

export const descriptionChangedCreateUnitForm = payload => ({
	type: CREATE_UNIT_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const displayChangedCreateUnitForm = payload => ({
	type: CREATE_UNIT_FORM_ACTIONS.DISPLAY_CHANGED,
	payload
});

export const resetCreateUnitForm = () => ({
	type: CREATE_UNIT_FORM_ACTIONS.RESET_FORM
});
