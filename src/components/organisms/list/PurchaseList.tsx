import { Tab } from '@headlessui/react';

import { ListProductsProps } from '@lib/types/list';
import { ListProducts } from './ListProducts';
import { PurchaseOptions } from '@molecules/list/PurchaseOptions';

export const PurchaseList = ({
	products,
	onDelete,
	onEdit
}: ListProductsProps) => {
	return (
		<Tab.Panel key='purchase'>
			<ListProducts
				products={products}
				onDelete={onDelete}
				onEdit={onEdit}
				emptyMessageCode={'listPage.emptyCartList'}
				options={PurchaseOptions}
			/>
		</Tab.Panel>
	);
};
