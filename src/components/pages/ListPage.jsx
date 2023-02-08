import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ArrowRightComplete from '../atoms/icons/ArrowRightComplete';
import IconButton from '../atoms/buttons/IconButton';
import UserList from '../organisms/UserList';

export const ListPage = () => {
	const { listId } = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();
	// const { lists, loadingLists } = useList();
	const list = null;
	const loading = false;

	const handleBack = () => {
		navigate('/list');
	};

	return (
		<section className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:px-24 lg:py-10'>
			<div className='flex items-center gap-3 text-primary-300 mx-2 mt-4 mb-5'>
				<IconButton
					className='rotate-180'
					icon={ArrowRightComplete}
					onClick={handleBack}
				/>
				<h1 className='font-medium text-xl text-primary-300'>List</h1>
			</div>

			<p>{listId}</p>
			<UserList lists={list} loading={loading} />
			{/* <AddListModal /> */}
		</section>
	);
};
