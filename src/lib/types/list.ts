import { Product } from './product';

export type ListStatus = 'active' | 'archived';

export type ListProductStatus = 'buy' | 'cart' | 'purchase';

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
	onDelete: (product: ListProduct) => void;
};
