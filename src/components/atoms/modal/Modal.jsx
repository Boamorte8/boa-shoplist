import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import CrossIcon from '../icons/CrossIcon';
import IconButton from '../buttons/IconButton';

const Modal = ({ isOpen, setIsOpen, title, children }) => {
	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<Transition
			show={isOpen}
			appear
			enter='transition duration-100 ease-out'
			enterFrom='transform scale-95 opacity-0'
			enterTo='transform scale-100 opacity-100'
			leave='transition duration-75 ease-out'
			leaveFrom='transform scale-100 opacity-100'
			leaveTo='transform scale-95 opacity-0'
			as={Fragment}
		>
			<Dialog className='fixed inset-0 z-50' onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 h-screen w-screen bg-black bg-opacity-25' />
				</Transition.Child>

				<div className='fixed inset-0 flex items-center justify-center p-4'>
					<Dialog.Panel className='relative w-full max-w-md transform rounded-2xl bg-background-700 text-white shadow-primary-700 p-5 shadow-md transition-all'>
						<IconButton
							filled
							icon={CrossIcon}
							className='absolute -top-3 -right-3'
							onClick={onClose}
						/>
						<Dialog.Title
							as='h3'
							className='text-lg font-medium leading-6 mb-2'
						>
							{title}
						</Dialog.Title>
						{children}
					</Dialog.Panel>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
