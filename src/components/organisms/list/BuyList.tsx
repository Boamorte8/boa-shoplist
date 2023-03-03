import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { ListProductsProps } from '@lib/types/list';
import { ListProductCard } from '@molecules/list/ListProductCard';

export const BuyList = ({ products }: ListProductsProps) => {
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

	const onDelete = () => {
		console.log('onDelete');
	};
	return (
		<main className='flex flex-col gap-5 min-h-full lg:gap-7'>
			{products.map(product => (
				<ListProductCard
					key={product.id}
					listProduct={product}
					onDelete={onDelete}
				>
					<span>+</span>
				</ListProductCard>
			))}
			{/* {list && (
				<ConfirmDeleteListModal
					open={openDeleteModal}
					setToggleModal={toggleDeleteModal}
					list={list}
				/>
			)}
			{list && (
				<UpdateListModal
					open={openUpdateModal}
					setToggleModal={toggleUpdateModal}
					list={list}
				/>
			)} */}
		</main>
	);
};
