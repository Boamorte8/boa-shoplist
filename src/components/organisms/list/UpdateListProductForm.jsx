import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseInput } from '@atoms/forms/BaseInput';
import { BaseSelect } from '@atoms/forms/BaseSelect';
import { Button } from '@atoms/buttons/Button';
import { ButtonLink } from '@atoms/buttons/ButtonLink';
import { handleSubmitBase } from '@lib/utils/utils';
import {
	productChangedUpdateListProductForm,
	quantityChangedUpdateListProductForm
} from '@lib/actions/updateListProductFormActions';
import { useListProduct } from '@lib/providers/ListProductProvider';
import { useProduct } from '@lib/providers/ProductProvider';
import { useUpdateListProductForm } from '@lib/hooks/useUpdateListProductForm';

export const UpdateListProductForm = ({ listProduct }) => {
	const { t } = useTranslation();
	const productText = t('products_one');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { products } = useProduct();
	const { getListProducts, updateListProduct, setListProductUpdate } =
		useListProduct();
	const { product, quantity, isFormInvalid, dispatchUpdateListProductForm } =
		useUpdateListProductForm({
			product: listProduct.products,
			quantity: listProduct.quantity
		});

	const onUpdateListProductSuccess = () => {
		getListProducts(listProduct.list_id);
		setListProductUpdate(null);
	};

	return (
		<form
			className='w-full flex flex-col gap-2 items-center py-2'
			onSubmit={ev =>
				handleSubmit(
					ev,
					{ product, quantity },
					listProduct,
					setIsSubmitting,
					updateListProduct,
					t,
					onUpdateListProductSuccess
				)
			}
		>
			<div className='w-full grid gap-4'>
				<BaseSelect
					id='product'
					name='product'
					className='max-w-sm'
					label={productText}
					placeholder={t('addEntity', {
						entity: productText.toLowerCase()
					})}
					emptyMessage={t('emptyEntities', {
						entities: t('products_two').toLowerCase()
					})}
					items={products}
					keyProp='title'
					error={product.error && t(product.error)}
					selected={product.value}
					setSelected={selectedProduct =>
						dispatchUpdateListProductForm(
							productChangedUpdateListProductForm(selectedProduct)
						)
					}
				/>
				<ButtonLink to='/products' className='mb-2'>
					{t('createNew', { item: productText.toLowerCase() })}
				</ButtonLink>

				<BaseInput
					id='quantity'
					type='number'
					name='quantity'
					className='max-w-sm'
					label={t('quantity_one')}
					placeholder={t('forms.addEntity', { entity: t('quantity_one') })}
					error={quantity.error && t(quantity.error)}
					value={quantity.value}
					onChange={ev =>
						dispatchUpdateListProductForm(
							quantityChangedUpdateListProductForm(ev.target.value)
						)
					}
				/>
			</div>

			<Button
				className='mt-6 mb-2'
				disabled={isFormInvalid || isSubmitting}
				loading={isSubmitting}
				type='submit'
			>
				{t('updateEntity', { entity: t('product') })}
			</Button>
		</form>
	);
};

const handleSubmit = async (
	ev,
	{ product, quantity },
	updatedProduct,
	setIsSubmitting,
	updateListProduct,
	t,
	onSuccess
) => {
	const onUpdateListProduct = () => {
		const newProductData = { ...updatedProduct };
		newProductData.product_id = product?.value.id;
		newProductData.quantity = quantity.value;
		delete newProductData.products;

		return updateListProduct(newProductData.id, newProductData);
	};

	handleSubmitBase(
		ev,
		onUpdateListProduct,
		setIsSubmitting,
		t('updateProductList.success'),
		t('updateProductList.error'),
		onSuccess
	);
};
