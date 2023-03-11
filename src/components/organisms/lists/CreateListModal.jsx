import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseInput } from '@atoms/forms/BaseInput';
import { Button } from '@atoms/buttons/Button';
import {
	descriptionChangedCreateListForm,
	resetCreateListForm,
	titleChangedCreateListForm
} from '@lib/actions/createListFormActions';
import { FloatButton } from '@atoms/buttons/FloatButton';
import { handleSubmitBase } from '@lib/utils/utils';
import { Modal } from '@atoms/modal/Modal';
import { useCreateListForm } from '@lib/hooks/useCreateListForm';
import { useList } from '@lib/providers/ListProvider';

export const CreateListModal = () => {
	const { t } = useTranslation();
	const addList = t('addList.title');
	const [openModal, setOpenModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { createList, getLists } = useList();
	const { title, description, isFormInvalid, dispatchCreateListForm } =
		useCreateListForm();

	const onCreateListSuccess = () => {
		getLists();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setOpenModal(toggle);
		if (!toggle) dispatchCreateListForm(resetCreateListForm());
	};

	return (
		<>
			<FloatButton onClick={() => setOpenModal(true)} />
			<Modal isOpen={openModal} setIsOpen={toggleModal} title={addList}>
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
						<BaseInput
							id='title'
							type='text'
							name='title'
							className='max-w-sm'
							label={t('title')}
							placeholder={t('forms.addTitle')}
							error={title.error && t(title.error)}
							value={title.value}
							onChange={ev =>
								dispatchCreateListForm(
									titleChangedCreateListForm(ev.target.value)
								)
							}
						/>

						<BaseInput
							id='description'
							type='text'
							name='description'
							className='max-w-sm'
							label={t('description')}
							placeholder={t('forms.addDescription')}
							error={description.error && t(description.error)}
							value={description.value}
							onChange={ev =>
								dispatchCreateListForm(
									descriptionChangedCreateListForm(ev.target.value)
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
						{addList}
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
	const onCreateList = () => {
		const list = {
			title: title.value,
			description: description.value
		};

		return createList(list);
	};

	handleSubmitBase(
		ev,
		onCreateList,
		setIsSubmitting,
		t('listsPage.createModal.success'),
		t('listsPage.createModal.error'),
		closeModal
	);
};
