import { Unit } from '@lib/types/unit';
import { alertBox } from '../events/alertEvents';
import i18next from '../utils/i18n';
import { supabase } from './client';

async function getUnits() {
	try {
		return supabase.from('units').select('*');
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function createUnit(newUnit: Unit) {
	try {
		return supabase.from('units').insert([newUnit]);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function updateUnit(UnitId: string, newData: Unit) {
	try {
		return supabase.from('units').update(newData).eq('id', UnitId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

async function deleteUnit(UnitId: string) {
	try {
		return supabase.from('units').delete().eq('id', UnitId);
	} catch (error) {
		alertBox.error(i18next.t('errors.server'));
	}
}

export { getUnits, createUnit, updateUnit, deleteUnit };
