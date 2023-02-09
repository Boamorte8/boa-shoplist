import { useTranslation } from 'react-i18next';

import Button from '../atoms/buttons/Button';
import Modal from '../atoms/modal/Modal';
import { useAuth } from '../../lib/providers/AuthProvider';

export const ConfirmLogoutModal = () => {
	const { t } = useTranslation();
	const { logout, openConfirmLogout, setOpenConfirmLogout } = useAuth();

	const toggleModal = toggle => {
		setOpenConfirmLogout(toggle);
	};

	const onLogout = () => {
		logout();
		toggleModal(false);
	};

	return (
		<Modal
			isOpen={openConfirmLogout}
			setIsOpen={toggleModal}
			title={t('logoutModal.title')}
		>
			<div className='w-full flex flex-col gap-2 items-center py-2'>
				<p>{t('logoutModal.description')}</p>
				<div className='flex justify-around w-full'>
					<Button
						kind='secondary'
						className='mt-6 mb-2'
						onClick={() => toggleModal(false)}
					>
						{t('cancel')}
					</Button>
					<Button className='mt-6 mb-2' onClick={onLogout}>
						{t('logout')}
					</Button>
				</div>
			</div>
		</Modal>
	);
};
