import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { BaseTab } from '../../atoms/BaseTab';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import { EmptyMessage } from '../../atoms/EmptyMessage';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { LoadingMessage } from '../../atoms/LoadingMessage';

export const UserList = ({ list, listProducts, loading, error }) => {
	console.log(listProducts);
	const { t } = useTranslation();
	const getProducts = () => {};
	if (loading)
		return (
			<LoadingMessage>
				<p className='text-white font-light text-center'>
					{t('listPage.loading')}
				</p>
			</LoadingMessage>
		);

	if (error)
		return (
			<ErrorMessage>
				<div className='flex justify-center'>
					<p className='text-error font-light text-center mr-2'>
						{t('listPage.error')}
					</p>
					<ButtonLink className='mb-2' onClick={getProducts}>
						{t('tryLoadAgain')}
					</ButtonLink>
				</div>
			</ErrorMessage>
		);

	if (!list || !listProducts || !listProducts.length)
		return (
			<EmptyMessage image='/empty-canvas.svg'>
				<p className='text-white font-light text-center'>
					{t('listPage.emptyList')}
				</p>
			</EmptyMessage>
		);

	return (
		<main className='flex flex-col gap-5 min-h-full'>
			<Tab.Group>
				<Tab.List className='flex space-x-1 rounded-xl bg-background-700 p-1'>
					<BaseTab key='buy'>Buy</BaseTab>
					<BaseTab key='basket'>Basket</BaseTab>
				</Tab.List>
				<Tab.Panels className=''>
					<Tab.Panel key='buy'>
						<p>Buy</p>
					</Tab.Panel>
					<Tab.Panel key='basket'>
						<p>Basket</p>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</main>
	);
};
