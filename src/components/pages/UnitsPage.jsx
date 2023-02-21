import { useTranslation } from 'react-i18next';

import { CreateUnitModal } from '../organisms/units/CreateUnitModal';
import { UnitsIcon } from '../atoms/icons/UnitsIcon';
import { UserUnits } from '../organisms/units/UserUnits';
import { useUnit } from '../../lib/providers/UnitProvider';

export const UnitsPage = () => {
	const { t } = useTranslation();
	const { units, loadingUnits } = useUnit();

	return (
		<section className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:px-24 lg:py-10'>
			<div className='flex items-center gap-3 text-primary-300 mx-2 mt-4 mb-5'>
				<UnitsIcon className='h-6' />
				<h1 className='font-medium text-xl text-primary-300'>
					{t('unitsPage.allUnits')}
				</h1>
			</div>

			<UserUnits units={units} loading={loadingUnits} />
			<CreateUnitModal />
		</section>
	);
};
