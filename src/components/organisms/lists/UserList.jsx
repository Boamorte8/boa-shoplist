import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';

export const UserList = ({ list, loading, error }) => {
	const { t } = useTranslation();
	if (loading)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (error)
		return (
			<ErrorMessage>
				<p className='text-error font-light text-center'>
					{t('listPage.error')}
				</p>
			</ErrorMessage>
		);

	if (!list)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t('listPage.emptyList')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full'>
			Products
			{/* {lists.map(list => (
				<ListCard key={list.id} list={list} />
			))} */}
		</main>
	);
};
