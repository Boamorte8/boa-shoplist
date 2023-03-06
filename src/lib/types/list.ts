import { Product } from './product';

export type ListStatus = 'active' | 'archived';

export enum ListProductStatus {
	BUY = 'buy',
	CART = 'cart',
	PURCHASE = 'purchase'
}

export type List = {
	id: string;
	user_id: string;
	title: string;
	description: string;
	status: ListStatus;
	public: boolean;
};

export type ListProduct = {
	id: string;
	product_id: string;
	quantity: number;
	user_id: string;
	list_id: string;
	status: ListProductStatus;
	products?: Product;
};

export type GroupProduct = {
	buy: ListProduct[];
	cart: ListProduct[];
	purchase: ListProduct[];
};

export type ListProductsProps = {
	products: ListProduct[];
	onEdit: (product: ListProduct) => void;
};
