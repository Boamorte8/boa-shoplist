import { useTranslation } from 'react-i18next';

import { LoadingMessage } from '../atoms/LoadingMessage';

export const LoadingPage = () => {
	const { t } = useTranslation();

	return (
		<div className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background py-11 px-5 md:px-11'>
			<h1 className='text-white text-xl font-medium text-center'>
				{t('loadingPage.title')}
			</h1>
			<LoadingMessage />
		</div>
	);
};
