import { Unit } from './unit';

export type Product = {
	id: string;
	title: string;
	description: string;
	display: string;
	user_id: string;
	unit_id: string;
	units: Unit;
};
