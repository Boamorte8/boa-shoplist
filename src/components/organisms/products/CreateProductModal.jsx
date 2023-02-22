import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../../lib/events/alertEvents';
import { BaseInput } from '../../atoms/forms/BaseInput';
import { Button } from '../../atoms/buttons/Button';
import {
	descriptionChangedCreateProductForm,
	resetCreateProductForm,
	titleChangedCreateProductForm,
	unitChangedCreateProductForm
} from '../../../lib/actions/createProductFormActions';
import { FloatButton } from '../../atoms/buttons/FloatButton';
import { Modal } from '../../atoms/modal/Modal';
import { useCreateProductForm } from '../../../lib/hooks/useCreateProductForm';
import { useProduct } from '../../../lib/providers/ProductProvider';
import { BaseSelect } from '../../atoms/forms/BaseSelect';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import { useUnit } from '../../../lib/providers/UnitProvider';

export const CreateProductModal = () => {
	const { t } = useTranslation();
	const addProduct = t('createNew', { item: t('products_one').toLowerCase() });
	const productTitleText = t('title');
	const unitText = t('unit_one');
	const [openModal, setOpenModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { createProduct, getProducts } = useProduct();
	const { units } = useUnit();
	const { title, description, unit, isFormInvalid, dispatchCreateProductForm } =
		useCreateProductForm();

	const onCreateListSuccess = () => {
		getProducts();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setOpenModal(toggle);
		if (!toggle) dispatchCreateProductForm(resetCreateProductForm());
	};

	return (
		<>
			<FloatButton onClick={() => setOpenModal(true)} />
			<Modal isOpen={openModal} setIsOpen={toggleModal} title={addProduct}>
				<form
					className='w-full flex flex-col gap-2 items-center py-2'
					onSubmit={ev =>
						handleSubmit(
							ev,
							{ title, description, unit },
							setIsSubmitting,
							createProduct,
							t,
							onCreateListSuccess
						)
					}
				>
					<div className='w-full grid gap-4'>
						<BaseInput
							id='title-product'
							type='text'
							name='title-product'
							className='max-w-sm'
							label={productTitleText}
							placeholder={t('addEntity', {
								entity: productTitleText.toLowerCase()
							})}
							error={title.error && t(title.error)}
							value={title.value}
							onChange={ev =>
								dispatchCreateProductForm(
									titleChangedCreateProductForm(ev.target.value)
								)
							}
						/>

						<BaseInput
							id='description-product'
							type='text'
							name='description-product'
							className='max-w-sm'
							label={t('description')}
							placeholder={t('forms.addDescription')}
							error={description.error && t(description.error)}
							value={description.value}
							onChange={ev =>
								dispatchCreateProductForm(
									descriptionChangedCreateProductForm(ev.target.value)
								)
							}
						/>

						<BaseSelect
							id='unit-product'
							name='unit-product'
							className='max-w-sm'
							label={unitText}
							placeholder={t('addEntity', {
								entity: unitText.toLowerCase()
							})}
							emptyMessage={t('emptyEntities', {
								entities: t('unit_two').toLowerCase()
							})}
							items={units}
							keyProp='display'
							error={unit.error && t(unit.error)}
							selected={unit.value}
							setSelected={selectedUnit =>
								dispatchCreateProductForm(
									unitChangedCreateProductForm(selectedUnit)
								)
							}
						/>
						<ButtonLink to='/units' className='mb-2'>
							{t('createNewFem', { item: unitText.toLowerCase() })}
						</ButtonLink>
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
	{ title, description, unit },
	setIsSubmitting,
	createProduct,
	t,
	closeModal
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const product = {
		title: title.value,
		description: description.value,
		unit: unit.value.id
	};

	const { error } = await createProduct(product);

	if (!error) {
		alertBox.success(t('productsPage.createModal.success'));
		closeModal();
	} else {
		alertBox.error(t('productsPage.createModal.error'));
	}
	setIsSubmitting(false);
};
