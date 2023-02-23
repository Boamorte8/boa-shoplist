import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { ListCard } from '../../molecules/lists/ListCard';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { useList } from '../../../lib/providers/ListProvider';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';

export const UserLists = () => {
	const { t } = useTranslation();
	const { lists, loadingLists, errorLists, getLists } = useList();
	if (loadingLists)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listsPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (errorLists)
		return (
			<ErrorMessage>
				<div className='flex justify-center'>
					<p className='text-error font-light text-center mr-2'>
						{t('listsPage.error')}
					</p>
					<ButtonLink className='mb-2' onClick={getLists}>
						{t('tryLoadAgain')}
					</ButtonLink>
				</div>
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
