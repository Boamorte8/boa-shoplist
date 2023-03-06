import { JSXElementConstructor, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { ListProduct, ListProductsProps } from '@lib/types/list';
import { ListProductCard } from '@molecules/list/ListProductCard';
import { LoadingMessage } from '@atoms/messages/LoadingMessage';

type ListProductListProps = ListProductsProps & {
	options: JSXElementConstructor<{
		product: ListProduct;
		setIsSubmitting: (newValue: boolean) => void;
	}>;
	emptyMessageCode: string;
};

export const ListProducts = ({
	products,
	emptyMessageCode,
	options: Options,
	onDelete,
	onEdit
}: ListProductListProps) => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);

	if (isSubmitting)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (!products || !products.length)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t(emptyMessageCode)}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full lg:gap-7'>
			{products.map(product => (
				<ListProductCard
					key={product.id}
					listProduct={product}
					onDelete={onDelete}
					onEdit={onEdit}
				>
					<Options product={product} setIsSubmitting={setIsSubmitting} />
				</ListProductCard>
			))}
		</main>
	);
};
