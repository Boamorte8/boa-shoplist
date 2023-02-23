import { useTranslation } from 'react-i18next';

import { CreateProductModal } from '../organisms/products/CreateProductModal';
import { PackagesIcon } from '../atoms/icons/PackagesIcon';
import { UserProducts } from '../organisms/products/UserProducts';

const ProductsPage = () => {
	const { t } = useTranslation();

	return (
		<section className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:px-24 lg:py-10'>
			<div className='flex items-center gap-3 text-primary-300 mx-2 mt-4 mb-5'>
				<PackagesIcon className='h-6' />
				<h1 className='font-medium text-xl text-primary-300'>
					{t('productsPage.allProducts')}
				</h1>
			</div>

			<UserProducts />
			<CreateProductModal />
		</section>
	);
};

export default ProductsPage;
