import { Link } from 'react-router-dom';

type ButtonLinkProps = {
	className: string;
	to: string;
};

export const ButtonLink = ({ className, to, ...props }: ButtonLinkProps) => {
	return (
		<Link
			className={`font-extralight text-primary-300 hover:underline hover:text-primary focus:underline focus:text-primary outline-none ${className}`}
			to={to}
			{...props}
		/>
	);
};
