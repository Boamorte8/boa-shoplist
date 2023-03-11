import { List } from '@lib/types/list';
import { alertBox } from '../events/alertEvents';
import i18next from '../utils/i18n';
import { supabase } from './client';

async function getLists() {
	try {
		return supabase.from('lists').select('*');
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function getList(listId: string) {
	try {
		return supabase.from('lists').select('*').eq('id', listId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createList(newList: List) {
	try {
		return supabase.from('lists').insert([newList]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateList(listId: string, newData: List) {
	try {
		return supabase.from('lists').update(newData).eq('id', listId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteList(listId: string) {
	try {
		return supabase.from('lists').delete().eq('id', listId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getLists, getList, createList, updateList, deleteList };
