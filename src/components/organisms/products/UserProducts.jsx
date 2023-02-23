import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { ProductCard } from '../../molecules/products/ProductCard';
import { useProduct } from '../../../lib/providers/ProductProvider';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';

export const UserProducts = () => {
	const { t } = useTranslation();
	const { products, loadingProducts, error, getProducts } = useProduct();

	if (loadingProducts)
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
				<div className='flex justify-center'>
					<p className='text-error font-light text-center mr-2'>
						{t('productsPage.error')}
					</p>
					<ButtonLink className='mb-2' onClick={getProducts}>
						{t('tryLoadAgain')}
					</ButtonLink>
				</div>
			</ErrorMessage>
		);

	if (!products || !products.length)
		return (
			<EmptyMessage image='/empty-products.svg'>
				<p className='text-white font-light text-center'>
					{t('productsPage.emptyProducts')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full'>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</main>
	);
};
