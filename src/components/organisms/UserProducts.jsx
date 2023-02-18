import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../atoms/EmptyMessage';
import { ErrorMessage } from '../atoms/ErrorMessage';
import { LoadingMessage } from '../atoms/LoadingMessage';

export const UserProducts = ({ products, loading, error }) => {
	const { t } = useTranslation();
	if (loading)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('productsPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (error)
		return (
			<ErrorMessage>
				<p className='text-error font-light text-center'>
					{t('productsPage.error')}
				</p>
			</ErrorMessage>
		);

	if (!products || !products.length)
		return (
			<EmptyMessage image='/empty-products.svg'>
				<p className='text-white font-light text-center'>
					{t('productsPage.emptyList')}
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
