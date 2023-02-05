import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
	const { t } = useTranslation();

	return (
		<div className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background py-11 px-5 md:px-11'>
			<h1 className='text-white text-xl font-medium text-center'>
				{t('errors.notFoundPage')}
			</h1>
			<img
				src='/page-not-found-404.svg'
				alt='Not found page'
				className='h-1/2 w-1/2 min-w-[320px] max-w-md mx-auto'
			/>
		</div>
	);
};

export default NotFoundPage;
