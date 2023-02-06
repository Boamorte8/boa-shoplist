import { UPDATE_LIST_FORM_ACTIONS } from '../constants/updateListFormActions';

export const titleChangedUpdateListForm = payload => ({
	type: UPDATE_LIST_FORM_ACTIONS.TITLE_CHANGED,
	payload
});

export const descriptionChangedUpdateListForm = payload => ({
	type: UPDATE_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const resetUpdateListForm = payload => ({
	type: UPDATE_LIST_FORM_ACTIONS.RESET_FORM,
	payload
});
