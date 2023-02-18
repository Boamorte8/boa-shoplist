import { alertBox } from '../events/alertEvents';
import useSupabase from '../hooks/useSupabase';
import i18next from '../utils/i18n';

const { supabase } = useSupabase();

async function getProducts() {
	try {
		return supabase.from('products').select('*');
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
