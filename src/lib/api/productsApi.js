import { alertBox } from '../events/alertEvents';
import { supabase } from './client';
import i18next from '../utils/i18n';

async function getProducts() {
	try {
		return supabase.from('products').select('*, units (name, display)');
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createProduct(newProduct) {
	try {
		return supabase.from('products').insert([newProduct]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateProduct(productId, newData) {
	try {
		return supabase.from('products').update(newData).eq('id', productId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteProduct(productId) {
	try {
		return supabase.from('products').delete().eq('id', productId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getProducts, createProduct, updateProduct, deleteProduct };
