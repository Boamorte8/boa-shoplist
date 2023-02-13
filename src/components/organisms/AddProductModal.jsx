import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../lib/events/alertEvents';
import { BaseInput } from '../atoms/forms/BaseInput';
import { Button } from '../atoms/buttons/Button';
import {
	descriptionChangedAddListForm,
	resetAddListForm,
	titleChangedAddListForm
} from '../../lib/actions/addListFormActions';
import { FloatButton } from '../atoms/buttons/FloatButton';
import { Modal } from '../atoms/modal/Modal';
import { useAddListForm } from '../../lib/hooks/useAddListForm';
import { useList } from '../../lib/providers/ListProvider';
import { ButtonLink } from '../atoms/buttons/ButtonLink';
import { BaseSelect } from '../atoms/forms/BaseSelect';

export const AddProductModal = () => {
	const { t } = useTranslation();
	const addProduct = t('addProductList.title');
	const productText = t('products_one');
	const [openModal, setOpenModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { createList, getLists } = useList();
	const { title, description, isFormInvalid, dispatchAddListForm } =
		useAddListForm();

	const products = [];

	const onCreateListSuccess = () => {
		getLists();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setOpenModal(toggle);
		if (!toggle) dispatchAddListForm(resetAddListForm());
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
							title,
							description,
							setIsSubmitting,
							createList,
							t,
							onCreateListSuccess
						)
					}
				>
					<div className='w-full grid gap-4'>
						<BaseSelect
							id='product'
							type='product'
							name='product'
							className='max-w-sm'
							label={productText}
							placeholder={t('addEntity', { entity: productText })}
							error={title.error && t(title.error)}
							value={title.value}
							onChange={ev =>
								dispatchAddListForm(titleChangedAddListForm(ev.target.value))
							}
						/>
						<ButtonLink to='/products' className='mb-2'>
							{t('createNew', { item: productText })}
						</ButtonLink>

						<BaseInput
							id='quantity'
							type='quantity'
							name='quantity'
							className='max-w-sm'
							label={t('quantity_one')}
							placeholder={t('forms.addDescription')}
							error={description.error && t(description.error)}
							value={description.value}
							onChange={ev =>
								dispatchAddListForm(
									descriptionChangedAddListForm(ev.target.value)
								)
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
	title,
	description,
	setIsSubmitting,
	createList,
	t,
	closeModal
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const list = {
		title: title.value,
		description: description.value
	};

	const { error } = await createList(list);

	if (!error) {
		alertBox.success(t('auth.loginSuccess'));
		closeModal();
	} else {
		alertBox.error(t('auth.errors.login'));
	}
	setIsSubmitting(false);
};
