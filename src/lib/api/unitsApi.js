import { alertBox } from '../events/alertEvents';
import { supabase } from './client';
import i18next from '../utils/i18n';

async function getUnits() {
	try {
		return supabase.from('units').select('*');
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createUnit(newUnit) {
	try {
		return supabase.from('units').insert([newUnit]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateUnit(UnitId, newData) {
	try {
		return supabase.from('units').update(newData).eq('id', UnitId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteUnit(UnitId) {
	try {
		return supabase.from('units').delete().eq('id', UnitId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getUnits, createUnit, updateUnit, deleteUnit };
