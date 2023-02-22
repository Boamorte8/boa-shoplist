import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../../lib/events/alertEvents';
import { BaseInput } from '../../atoms/forms/BaseInput';
import { Button } from '../../atoms/buttons/Button';
import {
	descriptionChangedUpdateUnitForm,
	displayChangedUpdateUnitForm,
	nameChangedUpdateUnitForm,
	resetUpdateUnitForm
} from '../../../lib/actions/updateUnitFormActions';
import { Modal } from '../../atoms/modal/Modal';
import { useUnit } from '../../../lib/providers/UnitProvider';
import { useUpdateUnitForm } from '../../../lib/hooks/useUpdateUnitForm';

export const UpdateUnitModal = ({ open, setToggleModal, unit }) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { updateUnit, getUnits } = useUnit();
	const { name, description, display, isFormInvalid, dispatchUpdateUnitForm } =
		useUpdateUnitForm(unit);
	const nameText = t('name');
	const displayText = t('forms.display');

	const onUpdateUnitSuccess = () => {
		getUnits();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setToggleModal(toggle);
		if (!toggle) dispatchUpdateUnitForm(resetUpdateUnitForm(unit));
	};

	return (
		<Modal
			isOpen={open}
			setIsOpen={toggleModal}
			title={t('unitsPage.updateModal.title')}
		>
			<form
				className='w-full flex flex-col gap-2 items-center py-2'
				onSubmit={ev =>
					handleSubmit(
						ev,
						{ id: unit.id, name, description, display },
						setIsSubmitting,
						updateUnit,
						t,
						onUpdateUnitSuccess
					)
				}
			>
				<div className='w-full grid gap-4'>
					<BaseInput
						id='unit-name'
						type='text'
						name='name'
						className='max-w-sm'
						label={nameText}
						placeholder={t('addEntity', {
							entity: nameText.toLowerCase()
						})}
						error={name.error && t(name.error)}
						value={name.value}
						onChange={ev =>
							dispatchUpdateUnitForm(nameChangedUpdateUnitForm(ev.target.value))
						}
					/>

					<BaseInput
						id='description'
						type='text'
						name='description'
						className='max-w-sm'
						label={t('description')}
						placeholder={t('forms.addDescription')}
						error={description.error && t(description.error)}
						value={description.value}
						onChange={ev =>
							dispatchUpdateUnitForm(
								descriptionChangedUpdateUnitForm(ev.target.value)
							)
						}
					/>

					<BaseInput
						id='unit-display'
						type='text'
						name='display'
						className='max-w-sm'
						label={displayText}
						placeholder={displayText}
						error={display.error && t(display.error)}
						value={display.value}
						onChange={ev =>
							dispatchUpdateUnitForm(
								displayChangedUpdateUnitForm(ev.target.value)
							)
						}
					/>
				</div>

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
						disabled={isFormInvalid || isSubmitting}
						loading={isSubmitting}
						type='submit'
					>
						{t('update')}
					</Button>
				</div>
			</form>
		</Modal>
	);
};

const handleSubmit = async (
	ev,
	{ id, name, description, display },
	setIsSubmitting,
	updateUnit,
	t,
	onSuccess
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const unit = {
		name: name.value,
		description: description.value,
		display: display.value
	};

	const { error } = await updateUnit(id, unit);

	if (!error) {
		alertBox.success(t('unitsPage.updateModal.success'));
		onSuccess();
	} else {
		alertBox.error(t('unitsPage.updateModal.error'));
	}
	setIsSubmitting(false);
};
