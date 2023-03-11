import { Product } from '@lib/types/product';
import { alertBox } from '../events/alertEvents';
import i18next from '../utils/i18n';
import { supabase } from './client';

async function getProducts() {
	try {
		return supabase.from('products').select('*, units (name, display)');
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createProduct(newProduct: Product) {
	try {
		return supabase.from('products').insert([newProduct]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateProduct(productId: string, newData: Product) {
	try {
		return supabase.from('products').update(newData).eq('id', productId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteProduct(productId: string) {
	try {
		return supabase.from('products').delete().eq('id', productId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getProducts, createProduct, updateProduct, deleteProduct };
