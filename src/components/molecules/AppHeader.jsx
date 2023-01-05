import { useTranslation } from 'react-i18next';

import IconButton from '../atoms/buttons/IconButton';
import HamburguerIcon from '../atoms/icons/HamburguerIcon';
import LangSelector from './LangSelector';

const AppHeader = () => {
	const { t } = useTranslation();
	return (
		<header className='h-16 lg:h-22 top-0 w-full px-5 lg:px-24 py-3 grid grid-cols-3 lg:grid-cols-2 items-center z-20 bg-background-300'>
			<IconButton className='lg:hidden outline-none' icon={HamburguerIcon} />
			<div className='text-center lg:text-left font-bold text-lg text-primary-300'>
				{t('logoComplete')}
			</div>
			<div className='flex justify-end'>
				<LangSelector />
			</div>
		</header>
	);
};

export default AppHeader;
