import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '@atoms/messages/EmptyMessage';
import { ListProductsProps } from '@lib/types/list';

export const CartList = ({ products }: ListProductsProps) => {
	const { t } = useTranslation();
	if (!products || !products.length)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t('listPage.emptyList')}
				</p>
			</EmptyMessage>
		);
	return <p>Cart list</p>;
};
