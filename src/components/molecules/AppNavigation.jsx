import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AppFooter from './AppFooter';
import CrossIcon from '../atoms/icons/CrossIcon';
import IconButton from '../atoms/buttons/IconButton';
import NavigationLink from '../atoms/buttons/NavigationLink';

const AppNavigation = ({ open, closeMenu, menuOptions }) => {
	if (!open) return null;

	const { t } = useTranslation();
	const [menuClass, setMenuClass] = useState('animate-slide-in-left');

	const closeSelector = () => {
		setMenuClass('animate-slide-out-left');
		setTimeout(() => {
			closeMenu();
		}, 1000);
	};

	const links = menuOptions.map(({ code, url, onClick }) => (
		<NavigationLink
			key={code}
			code={code}
			to={url}
			onClick={() => {
				if (onClick) onClick();
				closeSelector();
			}}
		/>
	));

	return createPortal(
		<div
			className={`fixed top-0 h-screen w-screen bg-background-300 z-30 overflow-hidden lg:hidden ${menuClass}`}
		>
			<header className='sticky h-14 top-0 w-full px-5 py-3 flex justify-between items-center'>
				<div className='flex items-center font-medium text-medium text-primary-300 uppercase'>
					<img className='h-7 w-7 mr-2' src='/logo-icon.svg' />
					{t('logoComplete')}
				</div>
				<IconButton icon={CrossIcon} onClick={closeSelector} />
			</header>

			<div className='container px-5 h-[calc(100vh-7.75rem)]'>
				<h2 className='py-8 font-semibold text-2xl text-white'>{t('menu')}</h2>

				<nav className='flex flex-col gap-6'>{links}</nav>
			</div>
			<AppFooter />
		</div>,
		document.getElementById('navpanel')
	);
};

export default AppNavigation;
