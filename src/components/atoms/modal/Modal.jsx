import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Modal = ({ isOpen, setIsOpen, children }) => {
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
			<Dialog className='fixed inset-0' onClose={() => setIsOpen(false)}>
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
					<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
						{children}
					</Dialog.Panel>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
