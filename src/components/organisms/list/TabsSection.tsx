import { Tab } from '@headlessui/react';

import { BuyOptions } from '@molecules/list/BuyOptions';
import { CartOptions } from '@molecules/list/CartOptions';
import { GroupProduct, ListProduct } from '@lib/types/list';
import { ListProducts } from './ListProducts';
import { PurchaseOptions } from '@molecules/list/PurchaseOptions';
import { TabHeaderList } from '@molecules/list/TabHeaderList';
import { ConfirmDeleteListProductModal } from './ConfirmDeleteListProductModal';
import { UpdateListProductModal } from './UpdateListProductModal';

export const TabsSection = ({
	listProducts
}: {
	listProducts: ListProduct[];
}) => {
	let products: GroupProduct = { buy: [], cart: [], purchase: [] };

	if (listProducts) {
		products = listProducts.reduce<GroupProduct>((acc, prod) => {
			acc[prod.status].push(prod);
			return acc;
		}, products);
	}

	return (
		<main className='flex flex-col gap-5 min-h-full'>
			<Tab.Group>
				<TabHeaderList products={products} />

				<Tab.Panels className=''>
					<Tab.Panel key='buy'>
						<ListProducts
							products={products.buy}
							emptyMessageCode={'listPage.emptyList'}
							options={BuyOptions}
						/>
					</Tab.Panel>

					<Tab.Panel key='cart'>
						<ListProducts
							products={products.cart}
							emptyMessageCode={'listPage.emptyList'}
							options={CartOptions}
						/>
					</Tab.Panel>

					<Tab.Panel key='purchase'>
						<ListProducts
							products={products.purchase}
							emptyMessageCode={'listPage.emptyCartList'}
							options={PurchaseOptions}
						/>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>

			<ConfirmDeleteListProductModal />
			<UpdateListProductModal />
		</main>
	);
};
