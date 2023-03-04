import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { IconButton } from '@atoms/buttons/IconButton';
import { ListProductCard } from '@molecules/list/ListProductCard';
import { ListProductsProps } from '@lib/types/list';
import { AddCartIcon } from '@atoms/icons/AddCartIcon';

export const BuyList = ({ products, onDelete }: ListProductsProps) => {
	const { t } = useTranslation();
	console.log(products);
	if (!products || !products.length)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t('listPage.emptyList')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full lg:gap-7'>
			{products.map(product => (
				<ListProductCard
					key={product.id}
					listProduct={product}
					onDelete={onDelete}
				>
					<IconButton filled icon={AddCartIcon} />
				</ListProductCard>
			))}
			{/* {list && (
				<UpdateListModal
					open={openUpdateModal}
					setToggleModal={toggleUpdateModal}
					list={list}
				/>
			)} */}
		</main>
	);
};
