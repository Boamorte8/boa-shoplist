import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AddProductModal } from '../organisms/products/AddProductModal';
import { ArrowRightComplete } from '../atoms/icons/ArrowRightComplete';
import { IconButton } from '../atoms/buttons/IconButton';
import { useList } from '../../lib/providers/ListProvider';
import { useListProduct } from '../../lib/providers/ListProductProvider';
import { UserList } from '../organisms/lists/UserList';

const ListPage = () => {
	const { listId } = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { selectedList, getList, loadingList, errorList } = useList();
	const {
		listProducts,
		loadingListProducts,
		errorListProducts,
		getListProducts
	} = useListProduct();

	useEffect(() => {
		getList(listId);
		getListProducts(listId);
	}, []);

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
				<h1 className='font-medium text-xl text-primary-300'>
					{t('listPage.products', {
						name: selectedList ? selectedList.title : ''
					})}
				</h1>
			</div>

			<UserList
				list={selectedList}
				listProducts={listProducts}
				loading={loadingList || loadingListProducts}
				error={errorList || errorListProducts}
			/>
			<AddProductModal list={selectedList} />
		</section>
	);
};

export default ListPage;
