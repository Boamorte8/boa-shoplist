import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '@lib/events/alertEvents';
import { Button } from '@atoms/buttons/Button';
import { Modal } from '@atoms/modal/Modal';
import { useList } from '@lib/providers/ListProvider';

export const ConfirmDeleteListModal = ({ open, setToggleModal, list }) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { deleteList, getLists } = useList();

	const onDeleteListSuccess = () => {
		getLists();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('listsPage.deleteModal.title')}
		>
			<div className='w-full flex flex-col gap-2 items-center py-2'>
				<p>{t('listsPage.deleteModal.description', { list: list.title })}</p>
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
								list.id,
								setIsSubmitting,
								deleteList,
								t,
								onDeleteListSuccess
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
	listId,
	setIsSubmitting,
	deleteList,
	t,
	onSuccess
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const { error } = await deleteList(listId);

	if (!error) {
		alertBox.success(t('listsPage.deleteModal.success'));
		onSuccess();
	} else {
		alertBox.error(t('listsPage.deleteModal.error'));
	}
	setIsSubmitting(false);
};
