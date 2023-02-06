import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BaseInput from '../atoms/forms/BaseInput';
import Button from '../atoms/buttons/Button';
import Modal from '../atoms/modal/Modal';
import { alertBox } from '../../lib/events/alertEvents';
import {
	descriptionChangedAddListForm,
	resetAddListForm,
	titleChangedAddListForm
} from '../../lib/actions/addListFormActions';
import { useAddListForm } from '../../lib/hooks/useAddListForm';
import { useList } from '../../lib/providers/ListProvider';

const UpdateListModal = ({ open, setToggleModal, list }) => {
	const { t } = useTranslation();
	const addList = t('addList.title');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { updateList, getLists } = useList();
	const { title, description, isFormInvalid, dispatchAddListForm } =
		useAddListForm();

	const onUpdateListSuccess = () => {
		getLists();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
		if (!toggle) dispatchAddListForm(resetAddListForm());
	};

	return (
		<Modal isOpen={open} setIsOpen={toggleModal} title={addList}>
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
							dispatchAddListForm(titleChangedAddListForm(ev.target.value))
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
					{t('update')}
				</Button>
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
	closeModal
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const list = {
		title: title.value,
		description: description.value
	};

	const { error } = await updateList(id, list);

	if (!error) {
		alertBox.success(t('auth.loginSuccess'));
		closeModal();
	} else {
		alertBox.error(t('auth.errors.login'));
	}
	setIsSubmitting(false);
};

export default UpdateListModal;
