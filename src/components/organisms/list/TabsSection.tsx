import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseTab } from '@atoms/BaseTab';
import { BuyList } from './BuyList';
import { CartList } from './CartList';
import { ConfirmDeleteListProductModal } from './ConfirmDeleteListProductModal';
import { GroupProduct, ListProduct } from '@lib/types/list';
import { ListBulletIcon } from '@atoms/icons/ListBulletIcon';
import { PurchaseList } from './PurchaseList';
import { ReceiptIcon } from '@atoms/icons/ReceiptIcon';
import { ShopCartIcon } from '@atoms/icons/ShopCartIcon';
import { TabItem } from '@lib/types/client';

const TABS: { [key: string]: TabItem } = {
	buy: {
		icon: ListBulletIcon,
		text: 'tabs.buy'
	},
	cart: {
		icon: ShopCartIcon,
		text: 'tabs.cart'
	},
	purchase: {
		icon: ReceiptIcon,
		text: 'tabs.purchase'
	}
};

export const TabsSection = ({
	listProducts
}: {
	listProducts: ListProduct[];
}) => {
	const { t } = useTranslation();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [listProduct, setListProduct] = useState<ListProduct | null>(null);
	let products: GroupProduct = { buy: [], cart: [], purchase: [] };

	if (listProducts) {
		products = listProducts.reduce<GroupProduct>((acc, prod) => {
			acc[prod.status].push(prod);
			return acc;
		}, products);
	}

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
				<Tab.List className='flex space-x-1 rounded-xl bg-background-700 p-1'>
					{Object.keys(products).map(product => {
						const Icon = TABS[product].icon;
						return (
							<BaseTab key={product}>
								<div className='flex items-center justify-center gap-1 md:gap-2 flex-col sm:flex-row'>
									<Icon className='h-6 w-6' />
									<span>{t(TABS[product].text)}</span>
								</div>
							</BaseTab>
						);
					})}
				</Tab.List>

				<Tab.Panels className=''>
					<Tab.Panel key='buy'>
						<BuyList products={products.buy} onDelete={onDelete} />
					</Tab.Panel>
					<Tab.Panel key='cart'>
						<CartList products={products.cart} onDelete={onDelete} />
					</Tab.Panel>
					<Tab.Panel key='purchase'>
						<PurchaseList products={products.purchase} onDelete={onDelete} />
					</Tab.Panel>
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
