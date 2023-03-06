import { MouseEvent } from 'react';

import { IconButton } from '@atoms/buttons/IconButton';
import { ListProduct, ListProductStatus } from '@lib/types/list';
import { RemovePurchaseIcon } from '@atoms/icons/RemovePurchaseIcon';
import { useListProductUtils } from '@lib/hooks/useListProductUtils';

export const PurchaseOptions = ({
	product,
	setIsSubmitting
}: {
	product: ListProduct;
	setIsSubmitting: (submitted: boolean) => void;
}) => {
	const { moveListProduct } = useListProductUtils();

	const moveToCart = (event: MouseEvent, product: ListProduct) => {
		event.preventDefault();
		moveListProduct(product, ListProductStatus.CART, setIsSubmitting);
	};
	return (
		<IconButton
			filled
			icon={RemovePurchaseIcon}
			onClick={(event: MouseEvent) => moveToCart(event, product)}
		/>
	);
};
