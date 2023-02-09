import { useTranslation } from 'react-i18next';

import { AddListModal } from '../organisms/AddListModal';
import { DrawerIcon } from '../atoms/icons/DrawerIcon';
import { UserLists } from '../organisms/UserLists';
import { useList } from '../../lib/providers/ListProvider';

export const ListsPage = () => {
	const { t } = useTranslation();
	const { lists, loadingLists } = useList();

	return (
		<section className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:px-24 lg:py-10'>
			<div className='flex items-center gap-3 text-primary-300 mx-2 mt-4 mb-5'>
				<DrawerIcon className='h-7' />
				<h1 className='font-medium text-xl text-primary-300'>
					{t('listsPage.allLists')}
				</h1>
			</div>

			<UserLists lists={lists} loading={loadingLists} />
			<AddListModal />
		</section>
	);
};
