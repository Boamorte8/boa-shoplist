import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { BaseTab } from '@atoms/BaseTab';
import { ListBulletIcon } from '@atoms/icons/ListBulletIcon';
import { ReceiptIcon } from '@atoms/icons/ReceiptIcon';
import { ShopCartIcon } from '@atoms/icons/ShopCartIcon';
import { TabItem } from '@lib/types/client';
import { GroupProduct } from '@lib/types/list';

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

export const TabHeaderList = ({ products }: { products: GroupProduct }) => {
	const { t } = useTranslation();
	return (
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
	);
};
