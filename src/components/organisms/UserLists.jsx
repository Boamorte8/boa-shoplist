import { useTranslation } from 'react-i18next';

import EmptyMessage from '../molecules/EmptyMessage';
import ListCard from '../molecules/lists/ListCard';

const UserLists = ({ lists, loading, error }) => {
	const { t } = useTranslation();
	if (loading) return <p className='text-white'>Loading lists...</p>;
	if (error) return <p className='text-white'>Error loading user lists</p>;
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

export default UserLists;
