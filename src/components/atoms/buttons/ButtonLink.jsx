import { Link } from 'react-router-dom';

const ButtonLink = ({ className, to, ...props }) => {
	return (
		<Link
			className={`font-extralight text-primary-300 hover:underline hover:text-primary outline-none ${className}`}
			to={to}
			{...props}
		></Link>
	);
};

export default ButtonLink;
