import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { ArrowDownIcon } from '../icons/ArrowDownIcon';

export const NavigationLink = ({ code, to, onClick }) => {
	const { t } = useTranslation();
	const defaultClasses =
		'flex items-center justify-between font-extralight focus:text-primary hover:text-primary hover:scale-110 focus:scale-110 hover:px-4 focus:px-4 outline-none transition-transform';
	return (
		<NavLink
			className={({ isActive }) =>
				`${defaultClasses} ${isActive ? 'text-primary-300' : 'text-white'}`
			}
			to={to}
			onClick={onClick}
		>
			<span className='text-lg'>{t(code)}</span>
			<ArrowDownIcon className='h-5 w-5 -rotate-90' />
		</NavLink>
	);
};
