import { UPDATE_LIST_PRODUCT_FORM_ACTIONS } from '@lib/constants/updateListProductFormActions';

export const productChangedUpdateListProductForm = payload => ({
	type: UPDATE_LIST_PRODUCT_FORM_ACTIONS.PRODUCT_CHANGED,
	payload
});

export const quantityChangedUpdateListProductForm = payload => ({
	type: UPDATE_LIST_PRODUCT_FORM_ACTIONS.QUANTITY_CHANGED,
	payload
});

export const resetUpdateListProductForm = () => ({
	type: UPDATE_LIST_PRODUCT_FORM_ACTIONS.RESET_FORM
});
