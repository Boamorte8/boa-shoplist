import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';

import DotsIcon from '../../atoms/icons/DotsIcon';
import IconButton from '../../atoms/buttons/IconButton';
import ListOption from '../../atoms/buttons/ListOption';
import PencilIcon from '../../atoms/icons/PencilIcon';
import TrashIcon from '../../atoms/icons/TrashIcon';

const ListCardOptions = ({ onEdit, onDelete }) => {
	const { t } = useTranslation();

	const handleEdit = event => {
		event.preventDefault();
		onEdit();
	};

	const handleDelete = event => {
		event.preventDefault();
		onDelete();
	};

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<Menu.Button as={IconButton} icon={DotsIcon} />
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items
					as={Fragment}
					className='absolute right-0 w-32 origin-top-right z-50 rounded-md bg-background-700 shadow-sm shadow-primary-700 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none'
				>
					<div className='px-1 py-1 '>
						<ListOption label={t('edit')} onClick={handleEdit}>
							<PencilIcon alt='Edit icon' className='h-6 w-6' />
						</ListOption>
						<ListOption label={t('delete')} onClick={handleDelete}>
							<TrashIcon alt='Delete icon' className='h-6 w-6 text-error-700' />
						</ListOption>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default ListCardOptions;
