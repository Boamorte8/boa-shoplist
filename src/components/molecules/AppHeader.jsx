import { useTranslation } from 'react-i18next';

import IconButton from '../atoms/buttons/IconButton';
import HamburguerIcon from '../atoms/icons/HamburguerIcon';

const AppHeader = props => {
	const { t, i18n } = useTranslation();
	return (
		<header className='h-14 lg:h-22 top-0 w-full px-5 lg:px-24 py-3 grid grid-cols-3 lg:grid-cols-2 items-center z-20 bg-background'>
			<IconButton className='lg:hidden outline-none' icon={HamburguerIcon} />
			<div className='text-center font-bold text-primary-300'>
				{t('logoComplete')}
			</div>
			<div className='flex items-center justify-self-end lg:gap-10'>
				Lang selector
			</div>
		</header>
	);
};

export default AppHeader;
