import { useTranslation } from 'react-i18next';

import Button from '../atoms/buttons/Button';
import Modal from '../atoms/modal/Modal';

const ConfirmDeleteListModal = ({ open, setToggleModal, onConfirm, title }) => {
	const { t } = useTranslation();

	const toggleModal = toggle => {
		setToggleModal(toggle);
	};

	const handleConfirm = () => {
		onConfirm();
		toggleModal(false);
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('listsPage.deleteModal.title')}
		>
			<div className='w-full flex flex-col gap-2 items-center py-2'>
				<p>{t('listsPage.deleteModal.description', { list: title })}</p>
				<div className='flex justify-around w-full'>
					<Button
						kind='secondary'
						className='mt-6 mb-2'
						onClick={() => toggleModal(false)}
					>
						{t('cancel')}
					</Button>
					<Button className='mt-6 mb-2' onClick={handleConfirm}>
						{t('delete')}
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmDeleteListModal;
