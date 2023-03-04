import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '@lib/events/alertEvents';
import { Button } from '@atoms/buttons/Button';
import { Modal } from '@atoms/modal/Modal';
import { useListProduct } from '@lib/providers/ListProductProvider';

export const ConfirmDeleteListProductModal = ({
	open,
	setToggleModal,
	listProduct
}) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { getListProducts, deleteListProduct } = useListProduct();

	const onDeleteProductSuccess = () => {
		getListProducts(listProduct.list_id);
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('productsPage.deleteModal.title')}
		>
			<div className='w-full flex flex-col gap-2 items-center py-2'>
				<p>
					{t('productsPage.deleteModal.description', {
						product: listProduct.products.title
					})}
				</p>
				<div className='flex justify-around w-full'>
					<Button
						kind='secondary'
						className='mt-6 mb-2'
						onClick={() => toggleModal(false)}
					>
						{t('cancel')}
					</Button>
					<Button
						className='mt-6 mb-2'
						disabled={isSubmitting}
						loading={isSubmitting}
						onClick={ev =>
							handleDelete(
								ev,
								listProduct.id,
								setIsSubmitting,
								deleteListProduct,
								t,
								onDeleteProductSuccess
							)
						}
					>
						{t('delete')}
					</Button>
				</div>
			</div>
		</Modal>
	);
};

const handleDelete = async (
	ev,
	listProductId,
	setIsSubmitting,
	deleteListProduct,
	t,
	onSuccess
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const { error } = await deleteListProduct(listProductId);

	if (!error) {
		alertBox.success(t('productsPage.deleteModal.success'));
		onSuccess();
	} else {
		alertBox.error(t('productsPage.deleteModal.error'));
	}
	setIsSubmitting(false);
};
