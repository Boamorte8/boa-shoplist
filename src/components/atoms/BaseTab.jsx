import { Tab } from '@headlessui/react';

import { classNames } from '../../lib/utils/utils';

export const BaseTab = ({ children, ...props }) => {
	return (
		<Tab
			className={({ selected }) =>
				classNames(
					'w-full rounded-lg py-2.5 text-md font-medium leading-5',
					'ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
					selected
						? 'bg-primary text-white shadow hover:bg-primary-700'
						: 'text-primary hover:bg-white/[0.12] hover:text-white'
				)
			}
			{...props}
		>
			{children}
		</Tab>
	);
};
