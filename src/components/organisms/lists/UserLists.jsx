import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { ListCard } from '../../molecules/lists/ListCard';

export const UserLists = ({ lists, loading, error }) => {
	const { t } = useTranslation();
	if (loading)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listsPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (error)
		return (
			<ErrorMessage>
				<p className='text-error font-light text-center'>
					{t('listsPage.error')}
				</p>
			</ErrorMessage>
		);

	if (!lists || !lists.length)
		return (
			<EmptyMessage image='/empty-folder.svg'>
				<p className='text-white font-light text-center'>
					{t('listsPage.emptyLists')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full lg:gap-7'>
			{lists.map(list => (
				<ListCard key={list.id} list={list} />
			))}
		</main>
	);
};
