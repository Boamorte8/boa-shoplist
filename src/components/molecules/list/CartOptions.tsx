import { MouseEvent } from 'react';

import { AddPurchaseIcon } from '@atoms/icons/AddPurchaseIcon';
import { IconButton } from '@atoms/buttons/IconButton';
import { ListProduct, ListProductStatus } from '@lib/types/list';
import { RemoveCartIcon } from '@atoms/icons/RemoveCartIcon';
import { useListProductUtils } from '@lib/hooks/useListProductUtils';

export const CartOptions = ({
	product,
	setIsSubmitting
}: {
	product: ListProduct;
	setIsSubmitting: (submitted: boolean) => void;
}) => {
	const { moveListProduct } = useListProductUtils();

	const purchaseProduct = (event: MouseEvent, product: ListProduct) => {
		event.preventDefault();
		moveListProduct(product, ListProductStatus.PURCHASE, setIsSubmitting);
	};

	const removeProductFromCart = (event: MouseEvent, product: ListProduct) => {
		event.preventDefault();
		moveListProduct(product, ListProductStatus.BUY, setIsSubmitting);
	};
	return (
		<div className='flex gap-4 flex-col h-20 md:flex-row md:items-center'>
			<IconButton
				filled
				icon={RemoveCartIcon}
				onClick={(event: MouseEvent) => removeProductFromCart(event, product)}
			/>
			<IconButton
				filled
				icon={AddPurchaseIcon}
				onClick={(event: MouseEvent) => purchaseProduct(event, product)}
			/>
		</div>
	);
};
