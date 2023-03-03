import { useTranslation } from 'react-i18next';

import { ButtonLink } from '@atoms/buttons/ButtonLink';
import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { ErrorMessage } from '@atoms/messages/ErrorMessage';
import { LoadingMessage } from '@atoms/messages/LoadingMessage';
import { TabsSection } from './TabsSection';
import { useList } from '@lib/providers/ListProvider';
import { useListProduct } from '@lib/providers/ListProductProvider';

export const UserList = ({ list, listProducts, loading, error }) => {
	const { t } = useTranslation();
	const { getList } = useList();
	const { getListProducts } = useListProduct();

	const getProducts = () => {
		getList(list.id);
		getListProducts(list.id);
	};

	if (loading)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (error)
		return (
			<ErrorMessage>
				<div className='flex justify-center'>
					<p className='text-error font-light text-center mr-2'>
						{t('listPage.error')}
					</p>
					<ButtonLink className='mb-2' onClick={getProducts}>
						{t('tryLoadAgain')}
					</ButtonLink>
				</div>
			</ErrorMessage>
		);

	if (!list || !listProducts || !listProducts.length)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t('listPage.emptyList')}
				</p>
			</EmptyMessage>
		);

	return <TabsSection listProducts={listProducts} />;
};
