import { UPDATE_PRODUCT_FORM_ACTIONS } from '../constants/updateProductFormActions';

export const titleChangedUpdateProductForm = payload => ({
	type: UPDATE_PRODUCT_FORM_ACTIONS.TITLE_CHANGED,
	payload
});

export const descriptionChangedUpdateProductForm = payload => ({
	type: UPDATE_PRODUCT_FORM_ACTIONS.DESCRIPTION_CHANGED,
	payload
});

export const unitChangedUpdateProductForm = payload => ({
	type: UPDATE_PRODUCT_FORM_ACTIONS.UNIT_CHANGED,
	payload
});

export const resetUpdateProductForm = () => ({
	type: UPDATE_PRODUCT_FORM_ACTIONS.RESET_FORM
});
