import { useState } from 'react';

import { BaseCard } from '../../atoms/BaseCard';
import { CubeIcon } from '../../atoms/icons/CubeIcon';
import { ListCardOptions } from '../ListCardOptions';

export const ProductCard = ({ product }) => {
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
			<BaseCard classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'>
				<article>
					<div className='flex items-center gap-2 text-primary-300 mb-1'>
						<CubeIcon className='h-5' />
						<h4 className='text-lg'>{product.title}</h4>
					</div>
					<p className='font-extralight text-sm text-white'>
						{product.description}
					</p>
				</article>
				<div className='flex justify-end items-center w-10'>
					<ListCardOptions onEdit={handleEdit} onDelete={handleConfirmDelete} />
				</div>
			</BaseCard>
			{/* <ConfirmDeleteListModal
				open={openDeleteModal}
				setToggleModal={setOpenDeleteModal}
				list={list}
			/>
			<UpdateListModal
				open={openUpdateModal}
				setToggleModal={setOpenUpdateModal}
				list={list}
			/> */}
		</>
	);
};
