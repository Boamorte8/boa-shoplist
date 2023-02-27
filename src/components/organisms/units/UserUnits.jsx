import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import { ConfirmDeleteUnitModal } from './ConfirmDeleteUnitModal';
import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { UnitCard } from '../../molecules/units/UnitCard';
import { useUnit } from '../../../lib/providers/UnitProvider';
import { UpdateUnitModal } from './UpdateUnitModal';

export const UserUnits = () => {
	const { t } = useTranslation();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const [unit, setUnit] = useState(null);
	const { units, loadingUnits, error, getUnits } = useUnit();

	const onDelete = unit => {
		setUnit(unit);
		setOpenDeleteModal(true);
	};

	const onEdit = unit => {
		setUnit(unit);
		setOpenUpdateModal(true);
	};

	const toggleDeleteModal = toggle => {
		setOpenDeleteModal(toggle);
		if (!toggle) setUnit(null);
	};

	const toggleUpdateModal = toggle => {
		setOpenUpdateModal(toggle);
		if (!toggle) setUnit(null);
	};

	if (loadingUnits)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('unitsPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (error)
		return (
			<ErrorMessage>
				<div className='flex justify-center'>
					<p className='text-error font-light text-center mr-2'>
						{t('unitsPage.error')}
					</p>
					<ButtonLink className='mb-2' onClick={getUnits}>
						{t('tryLoadAgain')}
					</ButtonLink>
				</div>
			</ErrorMessage>
		);

	if (!units || !units.length)
		return (
			<EmptyMessage image='/empty-unit.svg'>
				<p className='text-white font-light text-center'>
					{t('unitsPage.emptyUnits')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full'>
			{units.map(unit => (
				<UnitCard
					key={unit.id}
					unit={unit}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			))}
			{unit && (
				<ConfirmDeleteUnitModal
					open={openDeleteModal}
					setToggleModal={toggleDeleteModal}
					unit={unit}
				/>
			)}
			{unit && (
				<UpdateUnitModal
					open={openUpdateModal}
					setToggleModal={toggleUpdateModal}
					unit={unit}
				/>
			)}
		</main>
	);
};
