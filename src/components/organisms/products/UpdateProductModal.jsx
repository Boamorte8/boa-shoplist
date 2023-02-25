import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../../lib/events/alertEvents';
import { BaseInput } from '../../atoms/forms/BaseInput';
import { Button } from '../../atoms/buttons/Button';
import {
	descriptionChangedUpdateProductForm,
	resetUpdateProductForm,
	titleChangedUpdateProductForm,
	unitChangedUpdateProductForm
} from '../../../lib/actions/updateProductFormActions';
import { Modal } from '../../atoms/modal/Modal';
import { BaseSelect } from '../../atoms/forms/BaseSelect';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import { useProduct } from '../../../lib/providers/ProductProvider';
import { useUnit } from '../../../lib/providers/UnitProvider';
import { useUpdateProductForm } from '../../../lib/hooks/useUpdateProductForm';

export const UpdateProductModal = ({ open, setToggleModal, product }) => {
	const { t } = useTranslation();
	const productTitleText = t('title');
	const unitText = t('unit_one');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { updateProduct, getProducts } = useProduct();
	const { units } = useUnit();
	const { title, description, unit, isFormInvalid, dispatchUpdateProductForm } =
		useUpdateProductForm(product);

	const onUpdateProductSuccess = () => {
		getProducts();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
		if (!toggle) dispatchUpdateProductForm(resetUpdateProductForm());
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('productsPage.updateModal.title')}
		>
			<form
				className='w-full flex flex-col gap-2 items-center py-2'
				onSubmit={ev =>
					handleSubmit(
						ev,
						{ id: product.id, title, description, unit },
						setIsSubmitting,
						updateProduct,
						t,
						onUpdateProductSuccess
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
							dispatchUpdateProductForm(
								titleChangedUpdateProductForm(ev.target.value)
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
							dispatchUpdateProductForm(
								descriptionChangedUpdateProductForm(ev.target.value)
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
							dispatchUpdateProductForm(
								unitChangedUpdateProductForm(selectedUnit)
							)
						}
					/>
					<ButtonLink to='/units' className='mb-2'>
						{t('createNewFem', { item: unitText.toLowerCase() })}
					</ButtonLink>
				</div>

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
						disabled={isFormInvalid || isSubmitting}
						loading={isSubmitting}
						type='submit'
					>
						{t('update')}
					</Button>
				</div>
			</form>
		</Modal>
	);
};

const handleSubmit = async (
	ev,
	{ id, title, description, unit },
	setIsSubmitting,
	updateProduct,
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

	const { error } = await updateProduct(id, product);

	if (!error) {
		alertBox.success(t('productsPage.updateModal.success'));
		closeModal();
	} else {
		alertBox.error(t('productsPage.updateModal.error'));
	}
	setIsSubmitting(false);
};
