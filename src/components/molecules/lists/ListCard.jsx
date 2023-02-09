import { Link } from 'react-router-dom';
import { useState } from 'react';

import { BaseCard } from '../../atoms/BaseCard';
import { PageFlipIcon } from '../../atoms/icons/PageFlipIcon';
import { ConfirmDeleteListModal } from '../../organisms/ConfirmDeleteListModal';
import { ListCardOptions } from './ListCardOptions';
import { UpdateListModal } from '../../organisms/UpdateListModal';

export const ListCard = ({ list }) => {
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);

	const handleEdit = () => {
		setOpenUpdateModal(true);
	};

	const handleConfirmDelete = () => {
		setOpenDeleteModal(true);
	};

	return (
		<>
			<BaseCard
				classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'
				aria-label={list.title}
				component={Link}
				to={`/list/${list.id}`}
			>
				<div className=''>
					<div className='flex items-center gap-2 text-primary-300 mb-1'>
						<PageFlipIcon className='h-5' />
						<h4 className='text-lg'>{list.title}</h4>
					</div>
					<p className='font-extralight text-sm text-white'>
						{list.description}
					</p>
				</div>
				<div className='flex justify-end items-center w-10'>
					<ListCardOptions onEdit={handleEdit} onDelete={handleConfirmDelete} />
				</div>
			</BaseCard>
			<ConfirmDeleteListModal
				open={openDeleteModal}
				setToggleModal={setOpenDeleteModal}
				list={list}
			/>
			<UpdateListModal
				open={openUpdateModal}
				setToggleModal={setOpenUpdateModal}
				list={list}
			/>
		</>
	);
};
