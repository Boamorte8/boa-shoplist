import { MouseEvent, useState } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { AddCartIcon } from '@atoms/icons/AddCartIcon';
import { alertBox } from '@lib/events/alertEvents';
import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { IconButton } from '@atoms/buttons/IconButton';
import {
	ListProduct,
	ListProductsProps,
	ListProductStatus
} from '@lib/types/list';
import { ListProductCard } from '@molecules/list/ListProductCard';
import { LoadingMessage } from '@atoms/messages/LoadingMessage';
import { useListProduct } from '@lib/providers/ListProductProvider';

export const BuyList = ({ products, onDelete }: ListProductsProps) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { getListProducts, updateListProduct } = useListProduct();

	const onSuccess = (product: ListProduct) => {
		getListProducts(product.list_id);
	};

	const moveToCart = (event: MouseEvent, product: ListProduct) => {
		event.preventDefault();
		const updatedProduct = { ...product };
		updatedProduct.status = ListProductStatus.CART;
		delete updatedProduct.products;
		handleSubmit(
			updatedProduct,
			setIsSubmitting,
			updateListProduct,
			t,
			onSuccess
		);
	};

	if (isSubmitting)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listPage.loading')}
				</p>
			</LoadingMessage>
		);

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
						onClick={(event: MouseEvent) => moveToCart(event, product)}
					/>
				</ListProductCard>
			))}
		</main>
	);
};

const handleSubmit = async (
	listProduct: ListProduct,
	setIsSubmitting: (submitted: boolean) => void,
	updateListProduct: (
		listProductId: string,
		listProduct: ListProduct
	) => { error: string },
	t: TFunction,
	onSuccess: (product: ListProduct) => void
) => {
	setIsSubmitting(true);

	const { error } = await updateListProduct(listProduct.id, listProduct);

	if (!error) {
		alertBox.success(t('productsPage.updateModal.success'));
		onSuccess(listProduct);
	} else {
		alertBox.error(t('productsPage.updateModal.error'));
	}
	setIsSubmitting(false);
};
