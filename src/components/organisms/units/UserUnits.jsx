import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';

export const UserUnits = ({ units, loading, error }) => {
	const { t } = useTranslation();
	if (loading)
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
				<p className='text-error font-light text-center'>
					{t('unitsPage.error')}
				</p>
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
			Units
			{/* {lists.map(list => (
				<ListCard key={list.id} list={list} />
			))} */}
		</main>
	);
};
