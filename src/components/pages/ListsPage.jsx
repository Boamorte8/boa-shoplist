import { useTranslation } from 'react-i18next';

const ListsPage = () => {
	const { t } = useTranslation();

	return (
		<div className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] w-full bg-background p-2 md:p-6 lg:p-10'>
			<h1 className='font-medium text-xl text-primary-300'>
				{t('listsPage.allLists')}
			</h1>
			<div className=''></div>
		</div>
	);
};

export default ListsPage;
