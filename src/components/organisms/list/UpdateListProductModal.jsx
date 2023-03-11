import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '@atoms/modal/Modal';
import { useListProduct } from '@lib/providers/ListProductProvider';
import { useProduct } from '@lib/providers/ProductProvider';
import { UpdateListProductForm } from './UpdateListProductForm';

export const UpdateListProductModal = () => {
	const { t } = useTranslation();
	const { getProducts } = useProduct();
	const { listProductUpdate, setListProductUpdate } = useListProduct();

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	if (!listProductUpdate) return null;

	const toggleModal = toggle => {
		setListProductUpdate(toggle);
	};

	return (
		<Modal
			isOpen={!!listProductUpdate}
			setIsOpen={toggleModal}
			title={t('updateProductList.title')}
		>
			<UpdateListProductForm listProduct={listProductUpdate} />
		</Modal>
	);
};
