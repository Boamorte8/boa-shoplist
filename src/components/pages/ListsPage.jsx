import { useTranslation } from 'react-i18next';

import AddListModal from '../organisms/AddListModal';
import UserLists from '../molecules/UserLists';
import { useList } from '../../lib/providers/ListProvider';

const ListsPage = () => {
	const { t } = useTranslation();
	const { lists } = useList();

	return (
		<div className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:p-10'>
			<h1 className='font-medium text-xl text-primary-300 mb-4'>
				{t('listsPage.allLists')}
			</h1>

			<UserLists lists={lists} />
			<AddListModal />
		</div>
	);
};

export default ListsPage;
