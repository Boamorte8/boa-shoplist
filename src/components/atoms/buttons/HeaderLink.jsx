import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ code, to }) => {
	const { t } = useTranslation();
	const defaultClasses =
		'relative font-extralight text-lg hover:font-sans hover:text-primary after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2 hover:after:content-[""] hover:after:h-[6px] hover:after:w-[6px] hover:after:bg-primary hover:after:rounded-full outline-none';
	return (
		<NavLink
			className={({ isActive }) =>
				`${defaultClasses} ${isActive ? 'text-primary-300' : 'text-white'}`
			}
			to={to}
		>
			{t(code)}
		</NavLink>
	);
};

export default HeaderLink;
