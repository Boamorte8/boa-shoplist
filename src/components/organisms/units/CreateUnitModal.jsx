import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../../lib/events/alertEvents';
import { BaseInput } from '../../atoms/forms/BaseInput';
import { Button } from '../../atoms/buttons/Button';
import {
	descriptionChangedCreateUnitForm,
	displayChangedCreateUnitForm,
	nameChangedCreateUnitForm,
	resetCreateUnitForm
} from '../../../lib/actions/createUnitFormActions';
import { FloatButton } from '../../atoms/buttons/FloatButton';
import { Modal } from '../../atoms/modal/Modal';
import { useUnit } from '../../../lib/providers/UnitProvider';
import { useCreateUnitForm } from '../../../lib/hooks/useCreateUnitForm';

export const CreateUnitModal = () => {
	const { t } = useTranslation();
	const addUnit = t('createNewFem', { item: t('unit_one').toLowerCase() });
	const [openModal, setOpenModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { createUnit, getUnits } = useUnit();
	const { name, description, display, isFormInvalid, dispatchCreateUnitForm } =
		useCreateUnitForm();
	const nameText = t('name');
	const displayText = t('forms.display');

	const onCreateUnitSuccess = () => {
		getUnits();
		toggleModal(false);
	};

	const toggleModal = toggle => {
		setOpenModal(toggle);
		if (!toggle) dispatchCreateUnitForm(resetCreateUnitForm());
	};

	return (
		<>
			<FloatButton onClick={() => setOpenModal(true)} />
			<Modal isOpen={openModal} setIsOpen={toggleModal} title={addUnit}>
				<form
					className='w-full flex flex-col gap-2 items-center py-2'
					onSubmit={ev =>
						handleSubmit(
							ev,
							{ name, description, display },
							setIsSubmitting,
							createUnit,
							t,
							onCreateUnitSuccess
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
								dispatchCreateUnitForm(
									nameChangedCreateUnitForm(ev.target.value)
								)
							}
						/>

						<BaseInput
							id='unit-description'
							type='text'
							name='description'
							className='max-w-sm'
							label={t('description')}
							placeholder={t('forms.addDescription')}
							error={description.error && t(description.error)}
							value={description.value}
							onChange={ev =>
								dispatchCreateUnitForm(
									descriptionChangedCreateUnitForm(ev.target.value)
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
								dispatchCreateUnitForm(
									displayChangedCreateUnitForm(ev.target.value)
								)
							}
						/>
					</div>

					<Button
						className='mt-6 mb-2'
						disabled={isFormInvalid || isSubmitting}
						loading={isSubmitting}
						type='submit'
					>
						{addUnit}
					</Button>
				</form>
			</Modal>
		</>
	);
};

const handleSubmit = async (
	ev,
	{ name, description, display },
	setIsSubmitting,
	createUnit,
	t,
	closeModal
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const unit = {
		name: name.value,
		description: description.value,
		display: display.value
	};

	const { error } = await createUnit(unit);

	if (!error) {
		alertBox.success(t('unitsPage.createModal.success'));
		closeModal();
	} else {
		alertBox.error(t('unitsPage.createModal.error'));
	}
	setIsSubmitting(false);
};
