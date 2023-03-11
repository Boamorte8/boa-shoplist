import { ListProduct } from '@lib/types/list';
import { alertBox } from '../events/alertEvents';
import i18next from '../utils/i18n';
import { supabase } from './client';

async function getListProducts(listId: string) {
	try {
		return supabase
			.from('list_products')
			.select('*, products (*, units (*))')
			.eq('list_id', listId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createListProduct(newProduct: ListProduct) {
	try {
		return supabase.from('list_products').insert([newProduct]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateListProduct(listProductId: string, newData: ListProduct) {
	try {
		return supabase
			.from('list_products')
			.update(newData)
			.eq('id', listProductId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteListProduct(listProductId: string) {
	try {
		return supabase.from('list_products').delete().eq('id', listProductId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export {
	getListProducts,
	createListProduct,
	updateListProduct,
	deleteListProduct
};
