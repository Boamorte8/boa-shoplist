import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ code, to, onClick }) => {
	const { t } = useTranslation();
	const defaultClasses =
		'relative font-extralight text-lg transition hover:scale-110 focus:scale-110 hover:text-primary after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2 after:content-[""] after:bg-current after:rounded-full hover:after:h-[6px] hover:after:w-[6px] focus:after:h-[6px] focus:after:w-[6px]  outline-none';

	if (to) {
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
	} else {
		return (
			<button className={`text-white ${defaultClasses}`} onClick={onClick}>
				{t(code)}
			</button>
		);
	}
};

export default HeaderLink;
