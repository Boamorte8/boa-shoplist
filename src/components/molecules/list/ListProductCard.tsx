import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseCard } from '@atoms/BaseCard';
import { ListCardOptions } from '../ListCardOptions';
import { ListProduct } from '@lib/types/list';
import { ShoppingCodeIcon } from '@atoms/icons/ShoppingCodeIcon';

export type ListProductCardProps = {
	listProduct: ListProduct;
	onDelete: (listProduct: ListProduct) => void;
	children: ReactNode;
};

export const ListProductCard = ({
	listProduct,
	children,
	onDelete
}: ListProductCardProps) => {
	const { t } = useTranslation();
	const handleConfirmDelete = () => {
		onDelete(listProduct);
	};

	return (
		<BaseCard classes='grid grid-cols-[1fr_2.5rem] md:grid-cols-[1fr_6rem] gap-2 items-center w-full max-w-4xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'>
			<article>
				<div className='flex items-center gap-2 text-primary-300 mb-1 max-w'>
					<ShoppingCodeIcon className='h-5' />
					<h4 className='text-lg'>{listProduct.products?.title}</h4>
				</div>
				<dl className='flex gap-1 font-extralight text-sm text-white mb-2'>
					<dt className='text-primary/80'>{t('quantity_one')}:</dt>
					<dd>{listProduct.products?.units.display}</dd>
				</dl>
				<p className='font-extralight text-sm text-white'>
					{listProduct.products?.description}
				</p>
			</article>
			<div className='flex flex-col justify-between items-end h-full w-10 md:flex-row-reverse md:w-24 md:items-center'>
				<ListCardOptions onEdit={null} onDelete={handleConfirmDelete} />
				{children}
			</div>
		</BaseCard>
	);
};