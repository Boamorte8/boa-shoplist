import { Fragment, MouseEvent, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

type ListOptionProps = {
	label: string;
	children: ReactNode;
	onClick: (event: MouseEvent) => void;
};

export const ListOption = ({
	label,
	children,
	onClick,
	...props
}: ListOptionProps) => {
	return (
		<Menu.Item as={Fragment}>
			{({ active, close }) => (
				<button
					className={`group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm text-white hover:bg-primary-700 transition ${
						active ? 'bg-primary-700' : ''
					}`}
					{...props}
					onClick={event => {
						onClick(event);
						close();
					}}
				>
					{children}
					<span className='font-extralight text-lg'>{label}</span>
				</button>
			)}
		</Menu.Item>
	);
};
