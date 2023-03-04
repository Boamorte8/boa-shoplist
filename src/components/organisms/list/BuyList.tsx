import { useTranslation } from 'react-i18next';

import { AddCartIcon } from '@atoms/icons/AddCartIcon';
import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { IconButton } from '@atoms/buttons/IconButton';
import { ListProduct, ListProductsProps } from '@lib/types/list';
import { ListProductCard } from '@molecules/list/ListProductCard';
// import { useListProduct } from '@lib/providers/ListProductProvider';

export const BuyList = ({ products, onDelete }: ListProductsProps) => {
	const { t } = useTranslation();
	// const { getListProducts, updateListProduct } = useListProduct();
	console.log(products);

	const moveToCart = (product: ListProduct) => {
		console.log('moveToCart', product);
	};

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
					<IconButton
						filled
						icon={AddCartIcon}
						onClick={() => moveToCart(product)}
					/>
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

// const handleSubmit = async (
// 	ev,
// 	{ id, title, description, unit },
// 	setIsSubmitting,
// 	updateProduct,
// 	t,
// 	closeModal
// ) => {
// 	ev.preventDefault();

// 	setIsSubmitting(true);

// 	const product = {
// 		title: title.value,
// 		description: description.value,
// 		unit: unit.value.id
// 	};

// 	const { error } = await updateProduct(id, product);

// 	if (!error) {
// 		alertBox.success(t('productsPage.updateModal.success'));
// 		closeModal();
// 	} else {
// 		alertBox.error(t('productsPage.updateModal.error'));
// 	}
// 	setIsSubmitting(false);
// };
