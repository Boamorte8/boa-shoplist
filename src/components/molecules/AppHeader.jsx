import { useTranslation } from 'react-i18next';

import { AppNavigation } from './AppNavigation';
import { ConfirmLogoutModal } from '../organisms/ConfirmLogoutModal';
import { HamburguerIcon } from '../atoms/icons/HamburguerIcon';
import { HeaderLink } from '../atoms/buttons/HeaderLink';
import { IconButton } from '../atoms/buttons/IconButton';
import { LangSelector } from './LangSelector';
import { useMenu } from '../../lib/hooks/useMenu';

export const AppHeader = () => {
	const { t } = useTranslation();
	const { menuOptions, open, openMenu, closeMenu } = useMenu();
	const links = menuOptions.map(({ code, url, onClick }) => (
		<HeaderLink key={code} code={code} to={url} onClick={onClick} />
	));
	return (
		<>
			<header className='h-16 lg:h-24 top-0 w-full px-5 lg:px-24 py-3 grid grid-cols-3 lg:grid-cols-2 items-center z-20 bg-background-700'>
				<IconButton
					className='lg:hidden outline-none'
					icon={HamburguerIcon}
					onClick={openMenu}
				/>
				<div className='flex items-center lg:text-left font-medium text-sm lg:text-lg text-primary-300 uppercase select-none'>
					<img className='h-7 w-7 mr-2' src='/logo-icon.svg' />
					{t('logoComplete')}
				</div>
				<div className='flex items-center justify-self-end lg:gap-7'>
					<nav className='hidden lg:flex gap-5'>{links}</nav>
					<LangSelector />
				</div>
			</header>
			<AppNavigation
				open={open}
				closeMenu={closeMenu}
				menuOptions={menuOptions}
			/>
			<ConfirmLogoutModal />
		</>
	);
};
