import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FloatButton from '../atoms/buttons/FloatButton';
import Modal from '../atoms/modal/Modal';

const AddListModal = () => {
	const { t } = useTranslation();
	const [openModal, setOpenModal] = useState(false);

	const onAdd = () => {
		setOpenModal(true);
		console.log('Add new list');
	};

	return (
		<>
			<FloatButton onClick={onAdd} />
			<Modal isOpen={openModal} setIsOpen={setOpenModal}>
				<Dialog.Title
					as='h3'
					className='text-lg font-medium leading-6 text-gray-900'
				>
					Test title
				</Dialog.Title>
				Test Modal
			</Modal>
		</>
	);
};

export default AddListModal;
