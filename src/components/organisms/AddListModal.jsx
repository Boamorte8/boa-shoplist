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
			<Modal isOpen={openModal} setIsOpen={setOpenModal} title='Add new list'>
				Test Modal
			</Modal>
		</>
	);
};

export default AddListModal;
