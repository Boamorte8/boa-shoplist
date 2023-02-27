import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import { ConfirmDeleteProductModal } from './ConfirmDeleteProductModal';
import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';
import { ProductCard } from '../../molecules/products/ProductCard';
import { UpdateProductModal } from './UpdateProductModal';
import { useProduct } from '../../../lib/providers/ProductProvider';

export const UserProducts = () => {
	const { t } = useTranslation();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const [product, setProduct] = useState(null);
	const { products, loadingProducts, error, getProducts } = useProduct();

	const onDelete = product => {
		setProduct(product);
		setOpenDeleteModal(true);
	};

	const onEdit = product => {
		setProduct(product);
		setOpenUpdateModal(true);
	};

	const toggleDeleteModal = toggle => {
		setOpenDeleteModal(toggle);
		if (!toggle) setProduct(null);
	};

	const toggleUpdateModal = toggle => {
		setOpenUpdateModal(toggle);
		if (!toggle) setProduct(null);
	};

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
				<ProductCard
					key={product.id}
					product={product}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			))}
			{product && (
				<ConfirmDeleteProductModal
					open={openDeleteModal}
					setToggleModal={toggleDeleteModal}
					product={product}
				/>
			)}
			{product && (
				<UpdateProductModal
					open={openUpdateModal}
					setToggleModal={toggleUpdateModal}
					product={product}
				/>
			)}
		</main>
	);
};
