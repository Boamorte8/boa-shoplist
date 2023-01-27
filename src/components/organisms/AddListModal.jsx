import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BaseInput from '../atoms/forms/BaseInput';
import Button from '../atoms/buttons/Button';
import FloatButton from '../atoms/buttons/FloatButton';
import Modal from '../atoms/modal/Modal';
import { alertBox } from '../../lib/events/alertEvents';
import {
	descriptionChangedAddListForm,
	titleChangedAddListForm
} from '../../lib/actions/addListFormActions';
import { useAddListForm } from '../../lib/hooks/useAddListForm';

const AddListModal = () => {
	const { t } = useTranslation();
	const addList = t('addList.title');
	const [openModal, setOpenModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { title, description, isFormInvalid, dispatchAddListForm } =
		useAddListForm();

	const onAdd = () => {
		setOpenModal(true);
		console.log('Add new list');
	};

	return (
		<>
			<FloatButton onClick={onAdd} />
			<Modal isOpen={openModal} setIsOpen={setOpenModal} title={addList}>
				<form
					className='w-full flex flex-col gap-2 items-center py-2'
					onSubmit={ev =>
						handleSubmit(ev, title, description, setIsSubmitting, () => {}, t)
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
	addList,
	t
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	// const user = {
	// 	email: email.value,
	// 	password: password.value
	// };

	// const { error } = await addList(user);

	// if (!error) {
	// 	alertBox.success(t('auth.loginSuccess'));
	// } else {
	// 	alertBox.error(t('auth.errors.login'));
	// }
	setIsSubmitting(false);
};

export default AddListModal;
