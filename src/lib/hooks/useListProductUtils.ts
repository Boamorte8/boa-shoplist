import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '@lib/events/alertEvents';
import { useListProduct } from '@lib/providers/ListProductProvider';
import { ListProduct, ListProductStatus } from '@lib/types/list';

export const useListProductUtils = () => {
	const { t } = useTranslation();
	const { getListProducts, updateListProduct } = useListProduct();

	const moveListProduct = useCallback(
		async (
			product: ListProduct,
			newStatus: ListProductStatus,
			setIsSubmitting: (submitted: boolean) => void
		) => {
			const updatedProduct = { ...product };
			updatedProduct.status = newStatus;
			delete updatedProduct.products;
			setIsSubmitting(true);

			const { error } = await updateListProduct(
				updatedProduct.id,
				updatedProduct
			);

			if (!error) {
				alertBox.success(t('productsPage.updateModal.success'));
				getListProducts(product.list_id);
			} else {
				alertBox.error(t('productsPage.updateModal.error'));
			}
			setIsSubmitting(false);
		},
		[getListProducts, t, updateListProduct]
	);

	return useMemo(() => ({ moveListProduct }), [moveListProduct]);
};
