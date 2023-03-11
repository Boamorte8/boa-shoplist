import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseInput } from '@atoms/forms/BaseInput';
import { Button } from '@atoms/buttons/Button';
import {
	descriptionChangedUpdateListForm,
	resetUpdateListForm,
	titleChangedUpdateListForm
} from '@lib/actions/updateListFormActions';
import { handleSubmitBase } from '@lib/utils/utils';
import { Modal } from '@atoms/modal/Modal';
import { useList } from '@lib/providers/ListProvider';
import { useUpdateListForm } from '@lib/hooks/useUpdateListForm';

export const UpdateListModal = ({ open, setToggleModal, list }) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { updateList, getLists } = useList();
	const { title, description, isFormInvalid, dispatchUpdateListForm } =
		useUpdateListForm(list);

	const onUpdateListSuccess = () => {
		getLists();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
		if (!toggle) dispatchUpdateListForm(resetUpdateListForm(list));
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('listsPage.updateModal.title')}
		>
			<form
				className='w-full flex flex-col gap-2 items-center py-2'
				onSubmit={ev =>
					handleSubmit(
						ev,
						list.id,
						title,
						description,
						setIsSubmitting,
						updateList,
						t,
						onUpdateListSuccess
					)
				}
			>
				<div className='w-full grid gap-4'>
					<BaseInput
						id='title'
						type='title'
						name='title'
						className='max-w-sm'
						label={t('title')}
						placeholder={t('forms.addTitle')}
						error={title.error && t(title.error)}
						value={title.value}
						onChange={ev =>
							dispatchUpdateListForm(
								titleChangedUpdateListForm(ev.target.value)
							)
						}
					/>

					<BaseInput
						id='description'
						type='description'
						name='description'
						className='max-w-sm'
						label={t('description')}
						placeholder={t('forms.addDescription')}
						error={description.error && t(description.error)}
						value={description.value}
						onChange={ev =>
							dispatchUpdateListForm(
								descriptionChangedUpdateListForm(ev.target.value)
							)
						}
					/>
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
	id,
	title,
	description,
	setIsSubmitting,
	updateList,
	t,
	onSuccess
) => {
	const onUpdateList = () => {
		const list = {
			title: title.value,
			description: description.value
		};

		return updateList(id, list);
	};

	handleSubmitBase(
		ev,
		onUpdateList,
		setIsSubmitting,
		t('listsPage.updateModal.success'),
		t('listsPage.updateModal.error'),
		onSuccess
	);
};
