import { Tab } from '@headlessui/react';
import { useState } from 'react';

import { BuyList } from './BuyList';
import { CartList } from './CartList';
import { ConfirmDeleteListProductModal } from './ConfirmDeleteListProductModal';
import { GroupProduct, ListProduct } from '@lib/types/list';
import { PurchaseList } from './PurchaseList';
import { TabHeaderList } from '@molecules/list/TabHeaderList';

export const TabsSection = ({
	listProducts
}: {
	listProducts: ListProduct[];
}) => {
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [listProduct, setListProduct] = useState<ListProduct | null>(null);
	let products: GroupProduct = { buy: [], cart: [], purchase: [] };

	if (listProducts) {
		products = listProducts.reduce<GroupProduct>((acc, prod) => {
			acc[prod.status].push(prod);
			return acc;
		}, products);
	}

	const onEdit = (listProduct: ListProduct) => {
		// TODO Implement update list product feature
		console.log('onEdit', listProduct);
	};

	const onDelete = (listProduct: ListProduct) => {
		setListProduct(listProduct);
		toggleDeleteModal(true);
	};

	const toggleDeleteModal = (toggle: boolean) => {
		setOpenDeleteModal(toggle);
		if (!toggle) setListProduct(null);
	};

	return (
		<main className='flex flex-col gap-5 min-h-full'>
			<Tab.Group>
				<TabHeaderList products={products} />

				<Tab.Panels className=''>
					<BuyList
						products={products.buy}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
					<CartList
						products={products.cart}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
					<PurchaseList
						products={products.purchase}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				</Tab.Panels>
			</Tab.Group>

			{listProduct && (
				<ConfirmDeleteListProductModal
					open={openDeleteModal}
					setToggleModal={toggleDeleteModal}
					listProduct={listProduct}
				/>
			)}
		</main>
	);
};
