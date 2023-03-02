import { alertBox } from '../events/alertEvents';
import useSupabase from '../hooks/useSupabase';
import i18next from '../utils/i18n';

const { supabase } = useSupabase();

async function getListProducts(listId) {
	try {
		return supabase
			.from('list_products')
			.select('*, products (*)')
			.eq('list_id', listId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createListProduct(newProduct) {
	try {
		return supabase.from('list_products').insert([newProduct]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateListProduct(listProductId, newData) {
	try {
		return supabase
			.from('list_products')
			.update(newData)
			.eq('id', listProductId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteListProduct(listProductId) {
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
