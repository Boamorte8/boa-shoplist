import { MouseEvent, useState } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Button } from '@atoms/buttons/Button';
import { handleSubmitBase } from '@lib/utils/utils';
import { Modal } from '@atoms/modal/Modal';
import { useListProduct } from '@lib/providers/ListProductProvider';

export const ConfirmDeleteListProductModal = () => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		getListProducts,
		deleteListProduct,
		listProductDelete,
		setListProductDelete
	} = useListProduct();

	if (!listProductDelete) return null;

	const onDeleteProductSuccess = () => {
		getListProducts(listProductDelete.list_id);
		setListProductDelete(null);
	};

	return (
		<Modal
			isOpen={!!listProductDelete}
			setIsOpen={setListProductDelete}
			title={t('productsPage.deleteModal.title')}
		>
			<div className='w-full flex flex-col gap-2 items-center py-2'>
				<p>
					{t('productsPage.deleteModal.description', {
						product: listProductDelete.products?.title
					})}
				</p>
				<div className='flex justify-around w-full'>
					<Button
						kind='secondary'
						className='mt-6 mb-2'
						onClick={() => setListProductDelete(null)}
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
								listProductDelete.id,
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
	ev: MouseEvent,
	listProductId: string,
	setIsSubmitting: (value: boolean) => void,
	deleteListProduct: (productId: string) => Promise<{ error: string }>,
	t: TFunction,
	onSuccess: () => void
) => {
	const onDeleteListProduct = () => deleteListProduct(listProductId);

	handleSubmitBase(
		ev,
		onDeleteListProduct,
		setIsSubmitting,
		t('productsPage.deleteModal.success'),
		t('productsPage.deleteModal.error'),
		onSuccess
	);
};
