import { MouseEvent } from 'react';

import { AddCartIcon } from '@atoms/icons/AddCartIcon';
import { IconButton } from '@atoms/buttons/IconButton';
import { ListProduct, ListProductStatus } from '@lib/types/list';
import { useListProductUtils } from '@lib/hooks/useListProductUtils';

export const BuyOptions = ({
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
			icon={AddCartIcon}
			onClick={(event: MouseEvent) => moveToCart(event, product)}
		/>
	);
};
