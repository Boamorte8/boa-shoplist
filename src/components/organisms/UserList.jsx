import { useTranslation } from 'react-i18next';

import EmptyMessage from '../molecules/EmptyMessage';

const UserList = ({ list, loading, error }) => {
	const { t } = useTranslation();
	if (loading) return <p className='text-white'>Loading list info...</p>;
	if (error) return <p className='text-white'>Error loading list info</p>;
	if (!list)
		return (
			<EmptyMessage image='/empty-folder.svg'>
				<p className='text-white font-light text-center'>
					{t('listsPage.emptyLists')}
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

export default UserList;
