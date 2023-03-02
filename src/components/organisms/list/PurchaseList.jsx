import { useTranslation } from 'react-i18next';

import { EmptyMessage } from '../../atoms/EmptyMessage';

export const PurchaseList = ({ products }) => {
	const { t } = useTranslation();
	if (!products || !products.length)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t('listPage.emptyList')}
				</p>
			</EmptyMessage>
		);
	return <p>Purchase list</p>;
};
