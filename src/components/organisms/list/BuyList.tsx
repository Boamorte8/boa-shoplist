import { Tab } from '@headlessui/react';

import { BuyOptions } from '@molecules/list/BuyOptions';
import { ListProductsProps } from '@lib/types/list';
import { ListProducts } from './ListProducts';

export const BuyList = ({ products, onDelete, onEdit }: ListProductsProps) => {
	return (
		<Tab.Panel key='buy'>
			<ListProducts
				products={products}
				onDelete={onDelete}
				onEdit={onEdit}
				emptyMessageCode={'listPage.emptyList'}
				options={BuyOptions}
			/>
		</Tab.Panel>
	);
};
