import { CREATE_PRODUCT_FORM_ACTIONS } from '../constants/createProductFormActions';

export const titleChangedCreateProductForm = payload => ({
	type: CREATE_PRODUCT_FORM_ACTIONS.TITLE_CHANGED,
	payload
});

export const descriptionChangedCreateProductForm = payload => ({
	type: CREATE_PRODUCT_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const unitChangedCreateProductForm = payload => ({
	type: CREATE_PRODUCT_FORM_ACTIONS.UNIT_CHANGED,
	payload
});

export const resetCreateProductForm = () => ({
	type: CREATE_PRODUCT_FORM_ACTIONS.RESET_FORM
});
