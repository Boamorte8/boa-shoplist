import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../../lib/events/alertEvents';
import { Button } from '../../atoms/buttons/Button';
import { Modal } from '../../atoms/modal/Modal';
import { useUnit } from '../../../lib/providers/UnitProvider';

export const ConfirmDeleteUnitModal = ({ open, setToggleModal, unit }) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { deleteUnit, getUnits } = useUnit();

	const onDeleteUnitSuccess = () => {
		getUnits();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('unitsPage.deleteModal.title')}
		>
			<div className='w-full flex flex-col gap-2 items-center py-2'>
				<p>{`${t('unitsPage.deleteModal.description', {
					unit: unit.display
				})} (${unit.name})`}</p>
				<div className='flex justify-around w-full'>
					<Button
						kind='secondary'
						className='mt-6 mb-2'
						onClick={() => toggleModal(false)}
					>
						{t('cancel')}
					</Button>
					<Button
						className='mt-6 mb-2'
						disabled={isSubmitting}
						loading={isSubmitting}
						onClick={ev =>
							handleDelete(
								ev,
								unit.id,
								setIsSubmitting,
								deleteUnit,
								t,
								onDeleteUnitSuccess
							)
						}
					>
						{t('delete')}
					</Button>
				</div>
			</div>
		</Modal>
	);
};

const handleDelete = async (
	ev,
	unitId,
	setIsSubmitting,
	deleteUnit,
	t,
	onSuccess
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const { error } = await deleteUnit(unitId);

	if (!error) {
		alertBox.success(t('unitsPage.deleteModal.success'));
		onSuccess();
	} else {
		alertBox.error(t('unitsPage.deleteModal.error'));
	}
	setIsSubmitting(false);
};
