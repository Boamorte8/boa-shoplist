import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { UnitCard } from '../../molecules/units/UnitCard';
import { useUnit } from '../../../lib/providers/UnitProvider';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';

export const UserUnits = () => {
	const { t } = useTranslation();
	const { units, loadingUnits, error, getUnits } = useUnit();
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
				<UnitCard key={unit.id} unit={unit} />
			))}
		</main>
	);
};
