import { Tab } from '@headlessui/react';

import { CartOptions } from '@molecules/list/CartOptions';
import { ListProductsProps } from '@lib/types/list';
import { ListProducts } from './ListProducts';

export const CartList = ({ products, onDelete, onEdit }: ListProductsProps) => {
	return (
		<Tab.Panel key='cart'>
			<ListProducts
				products={products}
				onDelete={onDelete}
				onEdit={onEdit}
				emptyMessageCode={'listPage.emptyList'}
				options={CartOptions}
			/>
		</Tab.Panel>
	);
};
