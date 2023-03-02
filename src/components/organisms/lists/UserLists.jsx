import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import { ConfirmDeleteListModal } from './ConfirmDeleteListModal';
import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { ListCard } from '../../molecules/lists/ListCard';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { UpdateListModal } from './UpdateListModal';
import { useList } from '../../../lib/providers/ListProvider';

export const UserLists = () => {
	const { t } = useTranslation();
	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [list, setList] = useState(null);
	const { lists, loadingLists, errorLists, getLists } = useList();

	const onDelete = list => {
		setList(list);
		setOpenDeleteModal(true);
	};

	const onEdit = list => {
		setList(list);
		setOpenUpdateModal(true);
	};

	const toggleDeleteModal = toggle => {
		setOpenDeleteModal(toggle);
		if (!toggle) setList(null);
	};

	const toggleUpdateModal = toggle => {
		setOpenUpdateModal(toggle);
		if (!toggle) setList(null);
	};

	if (loadingLists)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listsPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (errorLists)
		return (
			<ErrorMessage>
				<div className='flex justify-center'>
					<p className='text-error font-light text-center mr-2'>
						{t('listsPage.error')}
					</p>
					<ButtonLink className='mb-2' onClick={getLists}>
						{t('tryLoadAgain')}
					</ButtonLink>
				</div>
			</ErrorMessage>
		);

	if (!lists || !lists.length)
		return (
			<EmptyMessage>
				<p className='text-white font-light text-center'>
					{t('listsPage.emptyLists')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full lg:gap-7'>
			{lists.map(list => (
				<ListCard
					key={list.id}
					list={list}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
			{list && (
				<ConfirmDeleteListModal
					open={openDeleteModal}
					setToggleModal={toggleDeleteModal}
					list={list}
				/>
			)}
			{list && (
				<UpdateListModal
					open={openUpdateModal}
					setToggleModal={toggleUpdateModal}
					list={list}
				/>
			)}
		</main>
	);
};
