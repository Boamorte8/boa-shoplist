import { ReactNode } from 'react';

import { BaseCard } from '@atoms/BaseCard';
import { PageFlipIcon } from '@atoms/icons/PageFlipIcon';
import { ListCardOptions } from '../ListCardOptions';
import { ListProduct } from '@lib/types/list';

export type ListProductCardProps = {
	listProduct: ListProduct;
	onDelete: (listProduct: ListProduct) => void;
	children: ReactNode;
};

export const ListProductCard = ({
	listProduct,
	onDelete,
	children
}: ListProductCardProps) => {
	const handleConfirmDelete = () => {
		onDelete(listProduct);
	};

	return (
		<BaseCard classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'>
			<article>
				<div className='flex items-center gap-2 text-primary-300 mb-1'>
					<PageFlipIcon className='h-5' />
					<h4 className='text-lg'>{listProduct.products?.title}</h4>
				</div>
				{/* <p className='font-extralight text-sm text-white'>{list.description}</p> */}
			</article>
			<div className='flex flex-col justify-between items-end w-10'>
				<ListCardOptions onEdit={null} onDelete={handleConfirmDelete} />
				{children}
			</div>
		</BaseCard>
	);
};
