import { useTranslation } from 'react-i18next';

import { CopyrightIcon } from '../atoms/icons/CopyrightIcon';

export const AppFooter = () => {
	const { t } = useTranslation();
	return (
		<footer className='flex items-center gap-2 min-h-fit w-full px-5 lg:px-24 py-4 bg-background-700 text-white'>
			<div className='h-6 w-6'>
				<CopyrightIcon />
			</div>
			<span className='m-0 font-extra text-sm'>
				{t('footer')}{' '}
				<a className='text-primary-300' href='https://storyset.com/data'>
					Storyset
				</a>
			</span>
		</footer>
	);
};
