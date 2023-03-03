import { BaseCard } from '@atoms/BaseCard';
import { CubeIcon } from '@atoms/icons/CubeIcon';
import { ListCardOptions } from '../ListCardOptions';
import { Product } from '@lib/types/product';

export type ProductCardProps = {
	product: Product;
	onDelete: (product: Product) => void;
	onEdit: (product: Product) => void;
};

export const ProductCard = ({
	product,
	onDelete,
	onEdit
}: ProductCardProps) => {
	const { title, description, units } = product;

	const handleEdit = () => {
		onEdit(product);
	};

	const handleConfirmDelete = () => {
		onDelete(product);
	};

	return (
		<BaseCard classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'>
			<article>
				<div className='flex items-center gap-2 text-primary-300 mb-1'>
					<CubeIcon className='h-5' />
					<h4 className='text-lg'>
						{title}
						<span className='mb-2 ml-2 text-gray-300 text-sm font-extralight'>
							({units.display})
						</span>
					</h4>
				</div>
				<p className='font-extralight text-sm text-white'>{description}</p>
			</article>
			<div className='flex justify-end items-center w-10'>
				<ListCardOptions onEdit={handleEdit} onDelete={handleConfirmDelete} />
			</div>
		</BaseCard>
	);
};
