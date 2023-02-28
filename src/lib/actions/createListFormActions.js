import { CREATE_LIST_FORM_ACTIONS } from '../constants/createListFormActions';

export const titleChangedCreateListForm = payload => ({
	type: CREATE_LIST_FORM_ACTIONS.TITLE_CHANGED,
	payload
});

export const descriptionChangedCreateListForm = payload => ({
	type: CREATE_LIST_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const resetCreateListForm = () => ({
	type: CREATE_LIST_FORM_ACTIONS.RESET_FORM
});
