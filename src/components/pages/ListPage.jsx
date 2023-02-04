import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UserList from '../organisms/UserList';

const ListPage = () => {
	const { listId } = useParams();
	const { t } = useTranslation();
	// const { lists, loadingLists } = useList();
	const list = null;
	const loading = false;

	return (
		<section className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:px-24 lg:py-10'>
			<div className='flex items-center gap-3 text-primary-300 mx-2 mt-4 mb-5'>
				{/* <DrawerIcon className='h-7' /> */}
				<h1 className='font-medium text-xl text-primary-300'>List {listId}</h1>
			</div>

			<UserList lists={list} loading={loading} />
			{/* <AddListModal /> */}
		</section>
	);
};

export default ListPage;
