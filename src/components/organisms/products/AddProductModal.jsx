import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '@lib/events/alertEvents';
import { BaseInput } from '@atoms/forms/BaseInput';
import { BaseSelect } from '@atoms/forms/BaseSelect';
import { Button } from '@atoms/buttons/Button';
import { ButtonLink } from '@atoms/buttons/ButtonLink';
import { FloatButton } from '@atoms/buttons/FloatButton';
import { Modal } from '@atoms/modal/Modal';
import {
	productChangedAddListForm,
	quantityChangedAddListForm,
	resetAddListForm
} from '@lib/actions/addListFormActions';
import { useAddListForm } from '@lib/hooks/useAddListForm';
import { useListProduct } from '@lib/providers/ListProductProvider';
import { useProduct } from '@lib/providers/ProductProvider';

export const AddProductModal = ({ list }) => {
	const { t } = useTranslation();
	const addProduct = t('addProductList.title');
	const productText = t('products_one');
	const [openModal, setOpenModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { products, getProducts } = useProduct();
	const { getListProducts, createListProduct } = useListProduct();
	const { product, quantity, isFormInvalid, dispatchAddListForm } =
		useAddListForm();

	const onCreateListSuccess = () => {
		getListProducts(list.id);
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setOpenModal(toggle);
		if (!toggle) dispatchAddListForm(resetAddListForm());
	};

	const onOpenModal = () => {
		getProducts();
		setOpenModal(true);
	};

	return (
		<>
			<FloatButton onClick={onOpenModal} />
			<Modal isOpen={openModal} setIsOpen={toggleModal} title={addProduct}>
				<form
					className='w-full flex flex-col gap-2 items-center py-2'
					onSubmit={ev =>
						handleSubmit(
							ev,
							{ product, quantity, listId: list.id },
							setIsSubmitting,
							createListProduct,
							t,
							onCreateListSuccess
						)
					}
				>
					<div className='w-full grid gap-4'>
						<BaseSelect
							id='product'
							name='product'
							className='max-w-sm'
							label={productText}
							placeholder={t('addEntity', {
								entity: productText.toLowerCase()
							})}
							emptyMessage={t('emptyEntities', {
								entities: t('products_two').toLowerCase()
							})}
							items={products}
							keyProp='title'
							error={product.error && t(product.error)}
							selected={product.value}
							setSelected={selectedProduct =>
								dispatchAddListForm(productChangedAddListForm(selectedProduct))
							}
						/>
						<ButtonLink to='/products' className='mb-2'>
							{t('createNew', { item: productText.toLowerCase() })}
						</ButtonLink>

						<BaseInput
							id='quantity'
							type='number'
							name='quantity'
							className='max-w-sm'
							label={t('quantity_one')}
							placeholder={t('forms.addEntity', { entity: t('quantity_one') })}
							error={quantity.error && t(quantity.error)}
							value={quantity.value}
							onChange={ev =>
								dispatchAddListForm(quantityChangedAddListForm(ev.target.value))
							}
						/>
					</div>

					<Button
						className='mt-6 mb-2'
						disabled={isFormInvalid || isSubmitting}
						loading={isSubmitting}
						type='submit'
					>
						{addProduct}
					</Button>
				</form>
			</Modal>
		</>
	);
};

const handleSubmit = async (
	ev,
	{ product, quantity, listId },
	setIsSubmitting,
	createListProduct,
	t,
	closeModal
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const listProduct = {
		product_id: product.value.id,
		quantity: quantity.value,
		list_id: listId
	};

	const { error } = await createListProduct(listProduct);

	if (!error) {
		alertBox.success(t('listPage.addModal.success'));
		closeModal();
	} else {
		alertBox.error(t('listPage.addModal.error'));
	}
	setIsSubmitting(false);
};
