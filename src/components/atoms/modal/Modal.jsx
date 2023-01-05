import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import IconButton from '../buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';

const Modal = ({ closeModal, children }) => {
	useEffect(() => {
		if (!children) return;

		document.body.classList.add('overflow-y-hidden');

		return () => {
			document.body.classList.remove('overflow-y-hidden');
		};
	}, [children]);

	if (!children) return null;
	return createPortal(
		<div className='flex justify-center items-center fixed inset-0 h-screen w-screen bg-overlay'>
			<div className='w-80 rounded-lg shadow-sm bg-background-300 p-6 relative'>
				<IconButton
					type='button'
					filled
					className='absolute -top-5 -right-5'
					icon={CrossIcon}
					onClick={closeModal}
				/>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
