import { useState } from 'react';

import { BaseCard } from '../../atoms/BaseCard';
import { ConfirmDeleteUnitModal } from '../../organisms/units/ConfirmDeleteUnitModal';
import { ListCardOptions } from '../ListCardOptions';
import { UnitIcon } from '../../atoms/icons/UnitIcon';
import { UpdateUnitModal } from '../../organisms/units/UpdateUnitModal';

export const UnitCard = ({ unit }) => {
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
				<div className=''>
					<div className='flex items-center gap-2 text-primary-300 mb-0'>
						<UnitIcon className='h-5' />
						<h4 className='text-lg font-semibold'>{unit.display}</h4>
					</div>
					<p className='mb-2 text-gray-300 text-sm font-extralight'>
						({unit.name})
					</p>
					<p className='text-white'>{unit.description}</p>
				</div>
				<div className='flex justify-end items-center w-10'>
					<ListCardOptions onEdit={handleEdit} onDelete={handleConfirmDelete} />
				</div>
			</BaseCard>
			<ConfirmDeleteUnitModal
				open={openDeleteModal}
				setToggleModal={setOpenDeleteModal}
				unit={unit}
			/>
			<UpdateUnitModal
				open={openUpdateModal}
				setToggleModal={setOpenUpdateModal}
				unit={unit}
			/>
		</>
	);
};
