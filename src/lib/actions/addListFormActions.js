import { ADD_LIST_FORM_ACTIONS } from '../constants/addListFormActions';

export const productChangedAddListForm = payload => ({
	type: ADD_LIST_FORM_ACTIONS.PRODUCT_CHANGED,
	payload
});

export const quantityChangedAddListForm = payload => ({
	type: ADD_LIST_FORM_ACTIONS.QUANTITY_CHANGED,
	payload
});

export const resetAddListForm = () => ({
	type: ADD_LIST_FORM_ACTIONS.RESET_FORM
});
