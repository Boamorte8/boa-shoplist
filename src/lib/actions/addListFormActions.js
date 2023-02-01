import { ADD_LIST_FORM_ACTIONS } from '../constants/addListFormActions';

export const titleChangedAddListForm = payload => ({
	type: ADD_LIST_FORM_ACTIONS.TITLE_CHANGED,
	payload
});

export const descriptionChangedAddListForm = payload => ({
	type: ADD_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const resetAddListForm = () => ({
	type: ADD_LIST_FORM_ACTIONS.RESET_FORM
});
