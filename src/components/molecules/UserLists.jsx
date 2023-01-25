import { useTranslation } from 'react-i18next';

import EmptyMessage from './EmptyMessage';

const UserLists = ({ lists, loading, error }) => {
	const { t } = useTranslation();
	if (loading) return <p className='text-white'>Loading lists...</p>;
	if (error) return <p className='text-white'>Error loading user lists</p>;
	if (!lists.length)
		return (
			<EmptyMessage image='/empty-folder.svg'>
				<p className='text-white font-light text-center'>
					{t('listsPage.emptyLists')}
				</p>
			</EmptyMessage>
		);

	return <div className='flex flex-col'>Lists</div>;
};

export default UserLists;
