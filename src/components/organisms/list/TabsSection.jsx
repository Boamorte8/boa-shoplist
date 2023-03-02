import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { BaseTab } from '../../atoms/BaseTab';
import { BuyList } from './BuyList';
import { CartList } from './CartList';
import { ListBulletIcon } from '../../atoms/icons/ListBulletIcon';
import { PurchaseList } from './PurchaseList';
import { ReceiptIcon } from '../../atoms/icons/ReceiptIcon';
import { ShopCartIcon } from '../../atoms/icons/ShopCartIcon';

const TABS = {
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

export const TabsSection = ({ listProducts }) => {
	const { t } = useTranslation();
	let products;

	if (listProducts) {
		products = listProducts.reduce(
			(acc, prod) => {
				acc[prod.status].push(prod);
				return acc;
			},
			{ buy: [], cart: [], purchase: [] }
		);
	}

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
						<BuyList products={products.buy} />
					</Tab.Panel>
					<Tab.Panel key='cart'>
						<CartList products={products.cart} />
					</Tab.Panel>
					<Tab.Panel key='purchase'>
						<PurchaseList products={products.purchase} />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</main>
	);
};
