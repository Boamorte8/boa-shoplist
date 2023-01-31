import { alertBox } from '../events/alertEvents';
import useSupabase from '../hooks/useSupabase';
import i18next from '../utils/i18n';

const { supabase } = useSupabase();

async function getLists() {
	try {
		return supabase.from('lists').select('*');
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createList(newList) {
	try {
		return supabase.from('lists').insert([newList]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getLists, createList };
