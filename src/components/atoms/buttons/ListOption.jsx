import { Fragment } from 'react';
import { Menu } from '@headlessui/react';

const ListOption = ({ label, children, ...props }) => {
	return (
		<Menu.Item as={Fragment}>
			{({ active }) => (
				<button
					className={`group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm text-white hover:bg-primary-700 transition ${
						active ? 'bg-primary-700' : ''
					}`}
					{...props}
				>
					{children}
					<span className='font-extralight text-lg'>{label}</span>
				</button>
			)}
		</Menu.Item>
	);
};

export default ListOption;